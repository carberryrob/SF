<div class="footer_row3">
<div><img src="con/powered-by-SF.png" alt="Online Storefront Powered by Strategic Factory" class="img-fluid mt-3"></div>
	<p class="footer_cr">
		Strategic Factory<br>
		11195 Dolfield Boulevard<br>
		Owings Mills, Maryland 21117<br>
		(443) 548-3500<br>
		<a href="mailto:sfportalorders@strategicfactory.com">sfportalorders@strategicfactory.com</a>
	</p>
</div>


<script>

function getDSTDates(startYear, endYear) {
    const dstDates = [];

    for (let year = startYear; year <= endYear; year++) {
        // DST Start
        var firstOfMarch = new Date(year, 2, 1);
        var daysUntilFirstSundayInMarch = (7 - firstOfMarch.getDay()) % 7;
        var secondSundayInMarch = firstOfMarch.getDate() + daysUntilFirstSundayInMarch + 7;
        var dstStartDate = new Date(year, 2, secondSundayInMarch);

        // DST End
        var firstOfNovember = new Date(year, 10, 1);
        var daysUntilFirstSundayInNov = (7 - firstOfNovember.getDay()) % 7;
        var firstSundayInNovember = firstOfNovember.getDate() + daysUntilFirstSundayInNov;
        var dstEndDate = new Date(year, 10, firstSundayInNovember);

        dstDates.push({
            year: year,
            start: dstStartDate,
            end: dstEndDate
        });
    }

    return dstDates;
}

function isEDT() {

    const startYear = 2023;
    const endYear = 2027;

    const dstDates = getDSTDates(startYear, endYear);

    dstDates.forEach(entry => {
        console.log(`${entry.year}: DST starts on ${entry.start.toDateString()} and ends on ${entry.end.toDateString()}`);
    });


    const now = new Date();

    // Get the current year's DST start and end dates
    const dstStart = new Date(now.getFullYear()+1, 2, 8 - new Date(now.getFullYear(), 2, 1).getDay() + 7);
    const dstEnd = new Date(now.getFullYear()+1, 10, 1 - new Date(now.getFullYear(), 10, 1).getDay() + 7);

    console.log(dstStart)
    console.log(dstEnd)

    // Check if current date is between DST start and end dates
    return now >= dstStart && now < dstEnd;
}

function shouldExecute() {

    // Call the function to determine if it's EDT or EST
    if (isEDT()) {
        console.log("It's Eastern Daylight Time (EDT).");
        var DaylightSavCorrection = -4
    } else {
        console.log("It's Eastern Standard Time (EST).");
        var DaylightSavCorrection = -5
    }


    const currentDate = new Date();
    console.log(currentDate);
    
    // Convert current date and time to UTC to preserve the same point in time for all time zones
    const currentUTC = new Date(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate(), currentDate.getUTCHours(), currentDate.getUTCMinutes(), currentDate.getUTCSeconds());
    console.log(currentUTC);

    // Define the start and end dates and times in your local time zone
    const localStartDate = new Date('2023-08-23T14:40:00'); // Replace with your desired start date and time in your local time zone
    const localEndDate = new Date('2023-08-23T14:41:00');   // Replace with your desired end date and time in your local time zone
    
    // Convert local times to Eastern Standard Time (EST) since you're interested in that time zone
    const estOffset = DaylightSavCorrection; // EDT offset is -4 hours from UTC; EST offset is -5 hours from UTC
    const estStartDate = new Date(localStartDate.getTime() - estOffset * 60 * 60 * 1000);
    const estEndDate = new Date(localEndDate.getTime() - estOffset * 60 * 60 * 1000);
    
    return currentUTC >= estStartDate && currentUTC <= estEndDate;
}

function ShowBanner() {
    if (shouldExecute()) {
        // Your code here that should be executed between the specified date and time range
        console.log("ShowBanner executed!");
    } else {
        // Code to execute when the current date/time is outside the specified range
        console.log("ShowBanner skipped!");
    }
}




$(window).load(function () {
	$('head').append('<link href="https://resilience.com/wp-content/uploads/2022/04/cropped-Resilience-Icon-Transparent-32x32.png" rel="shortcut icon" type="image/x-icon" />');
	$( "link[href^='css/header.css']" ).removeAttr( "media" );
	$( ".header-links" ).find( "a" ).removeAttr( "style" )
	$( "#header_logo img.no_mobile" ).wrap( '<td id="desklogo"><div style="margin-left: 62px;margin-bottom: -8px;padding-top: 8px;"><a href="index.cgi">' );
	$( "#header_logo img.no_desktop" ).wrap( '<a href="index.cgi">' );
	//$( '<div class="top_blurb"><span>FREE SHIPPING ON ORDERS OVER $100</span></div>').prependTo("#header-wrapper")
	//$( '<div class="top_blurb"><span>FREE SHIPPING ON ORDERS OVER $100</span></div>').prependTo("#header-wrapper")
	$(".note:contains('Non-taxable items marked with *')").hide();
	if($('form[action="authenticate.cgi"]').length === 0) {
		if($('form[action="makenewaccount.cgi"]').length === 0) {
			$("button#submit_continue").last().hide();
		}
	}
	if ($("tr.form-sublabel.negativeprice:contains('Res Bucks')").length > 0) {
		var rebucks = $("tr.form-sublabel.negativeprice:contains('Res Bucks')");
		var ttl = $(rebucks).siblings('tr:contains("Total Price:")');
		if ($(ttl).length > 0) {$(rebucks).insertBefore($(ttl));}
	}
	$("table#billing-pricetable").find("tr:contains('Handling')").hide();
	$("table#billing-pricetable").find("td , th").each(function() {
		
		$(this).css("text-align", "right");
		$(this).filter(":contains('*')").each(function() {
			var nostar = '';
			var nostar = $(this).html().replace("*", "");
			$(this).html(nostar);
		});
	});
	// Hide Res Bucks for now
	$('span.budgetlbl').hide();
	$('span.budget').hide();
	//****************************

    if($(window).width() >= 1025) {
		$( ".header-links a" ).wrapAll( '<div id="dropdown-contentdiv" class="dropdown-content"></div>' );
		$( ".dropdown-content" ).wrapAll( '<div id="dropdowndiv" class="dropdown"><span id="dropicon">ACCOUNT</span>' );
		$( "#logout_userid" ).insertAfter( '.dropdown' );
		$( ".dropdown-content" ).insertAfter( '#dropicon' );
		$( "a[href='basket_view.cgi'].no_mobile" ).insertBefore( "#dropdowndiv" );
		$( ".image-container img").css("max-height","max-content");
		
		$( "#desklogo" ).insertBefore(".header-links");
		/*$( "#desklogo" ).after('<td id="allitemsTD" class="toptabs">' + $('#tab_responsive_tabs dfn:contains("All Items")').html());
		$( "#allitemsTD" ).after('<td id="mensTD" class="toptabs">' + $('#tab_responsive_tabs dfn:contains("Mens")').html());
		$( "#mensTD" ).after('<td id="womensTD" class="toptabs">' + $('#tab_responsive_tabs dfn:contains("Womens")').html());
		$( "#womensTD" ).after('<td id="unisexTD" class="toptabs">' + $('#tab_responsive_tabs dfn:contains("Unisex")').html());
		$( "#unisexTD" ).after('<td id="accessoriesTD" class="toptabs">' + $('#tab_responsive_tabs dfn:contains("Accessories")').html());
		$( "#accessoriesTD" ).after('<td id="marketingTD" class="toptabs">' + $('#tab_responsive_tabs dfn:contains("Marketing")').html());
		$( "#marketingTD" ).after('<td id="faqTD" class="toptabs">' + $('#tab_responsive_tabs dfn:contains("FAQ")').html());
		$( "#faqTD" ).after('<td id="space">');
		*/


		var idN = 'desklogo';
		var idN2 = '';
		$('#tab_responsive_tabs dfn').each(function() {
			idN2 = $(this).text().replace(' ', '_') + 'TD';
			$('#' + idN).after('<td id="' + idN2 + '" class="toptabs">' + $(this).html());
			idN = idN2;
			//console.log(idN);
		});
		$('#' + idN).after('<td id="space">');



		$( ".toptabs:contains('undefined')" ).hide();
		
		/*
		var nostar = $('td.numcol.pricecol:contains("*")').text().replace("*", "").replace(" ", "");
		$('td.numcol.pricecol:contains("*")').text(nostar);
		$('td.left.middle.qty_select_cell:contains("-$0.00")').each(function() {
			$(this).text("1");
			$(this).css("padding-left", "8px");
			$(this).parents('tr').appendTo($(this).parents("tbody"));
		});
		var freeship = $('tr.form-sublabel:contains("Free Shipping over $100.00")');
		if($(freeship).length > 0) {
			var tbl = $('tr.form-sublabel').last();
			$(freeship).insertAfter(tbl);
			$('td.center:contains("Free shipping provided due to discount")').hide();
		}*/
		
		
		
		/*
		var total_cart = 0;
		$('td.left.no_mobile:contains("$")').each(function() {
			var numb = $( this ).text().replace("$", "").replace(" ea.", "");
			if(isNaN(numb)) {
				numb = 0;
			}
			total_cart = total_cart + parseFloat(numb);
		});
		total_cart = total_cart.toFixed(2);
		$('<tr><td></td><td class="left middle qty_select_cell" style="padding-right: 20px; text-align: right !important; font-weight: bold;">Total</td><td class="left no_mobile"><span class="note" style="font-weight: bold;">$'+total_cart+'</span><td></td>').appendTo($('table#shipping-pricetable').children('tbody'));
		console.log($('#review-items-table').length);
		if($('#review-items-table').length === 0) {
			total_cart = 0;
			if($('table.items-table.true-table').length > 0) {
				$('td:contains("$")').each(function() {
					var numb = $( this ).text().replace("$", "");
					if(isNaN(numb)) {
						numb = 0;
					}
					total_cart = total_cart + parseFloat(numb);
				});
				total_cart = total_cart.toFixed(2);
				$('<tr><td></td><td class="right" style="font-weight: bold;">Total</td><td class="right"><span class="note" style="font-weight: bold;">$'+total_cart+'</span><td></td>').appendTo($('table.items-table.true-table').children('tbody'));
			}
		}*/
		
		
		
		if($('.pagetitle').text().toUpperCase() === 'IN YOUR CART') {
			var cnt = 1;
			$('span.menu-knob').parents('tr').each(function() {
				$( this ).attr('class', 'menu-knob_tr'+cnt);
				$('<td class="cart_item"></td>').insertBefore( this);
				$( this ).children('th').css('text-align', 'center')
				cnt = cnt + 1;
			});
			cnt = 1;
			$('.previewcell').parents('tr').each(function() {
				$( this ).attr('class', 'previewcell_tr'+cnt);
				cnt = cnt + 1;
			});
			cnt = 1;
			$('.cart_item').each(function() {
				var previewcell = $('.previewcell_tr'+cnt)
				var menuknob = $('.menu-knob_tr'+cnt)
				$( this).prepend(previewcell);
				$( this).prepend(menuknob);
				cnt = cnt + 1;
			});
			$('.cart_item').parents('table').css('text-align', 'center');
			var buttonbar = $('button#button_addproducts').parent();
			$('<span style="display: block; font-size: small; margin-left: 205px; padding-bottom: 10px;">Shipping & taxes calculated at checkout</span>').prependTo(buttonbar);
		}
	}
});
$(document).ready(function () {
	$("label:contains('FAQ-HOLDER')").parentsUntil( ".stretchy_cols" ).children().hide();
	$( "#shipmeth-info" ).hide();
	$( "#searchfield_input" ).parent().hide();
	$( "#basket-list-title" ).parent().hide();
	windowSize();

	if( $(".item_count").text() > 0) {
		$("button#submit_cancel").show();
	} else{
		$("button#submit_cancel").hide();
	}
    
    
    // const edate = new Date();
    // var ESToffSet = -240; //EST is -4:00 of UTC; i.e. 60*4 = -240 in minutes 
    // offset= ESToffSet*60*1000;
    // var ESTTime = new Date(edate.getTime()+offset);
    // console.log("EST Date",ESTTime);

    // const date = new Date();
    // var CSToffSet = -360; //CST is -6:00 of UTC; i.e. 60*6 = -360 in minutes 
    // offset= CSToffSet*60*1000;
    // var CSTTime = new Date(date.getTime()+offset);
    // console.log("CST Date",CSTTime);

    // console.log("Date Now: ",Date(Date.now()));
    // console.log(Date(Date.now()));

    ShowBanner();

    if ($("#salebanner").length > 0) {
        var classstr = $("#salebanner").parents("div").attr("class");
        if (~classstr.indexOf("no_mobile")) {
            $("#salebanner").parents("div").removeClass("no_mobile");
        }    
    }
});
function windowSize() {
	windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
	windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
}
$(window).resize(function() {
	windowSize();
	//console.log('width is :', windowWidth, 'Height is :', windowHeight);
	if (windowWidth >= 1025) {
		//console.log('dropicon: ', $("#dropicon").length > 0);
		if ($("#dropicon").length === 0) {
			$( ".header-links a" ).wrapAll( '<div id="dropdown-contentdiv" class="dropdown-content"></div>' );
			$( ".dropdown-content" ).wrapAll( '<div id="dropdowndiv" class="dropdown"><span id="dropicon">ACCOUNT</span>' );
			$( "#logout_userid" ).insertAfter( '.dropdown' );
			$( ".dropdown-content" ).insertAfter( '#dropicon' );
			$( "a[href='basket_view.cgi'].no_mobile" ).insertBefore( "#dropdowndiv" );
			$( "#dropdown-contentdiv" ).find( "a" ).removeAttr( "style" );
		}
	} else {
		//console.log('dropicon: ', $("#dropicon").length > 0);
		if($( ".dropdown-content" ).parent().is( "div.dropdown" )) {$( ".dropdown-content" ).unwrap();}
		if($( ".header-links a" ).parent().is( "div.dropdown-content" ) ) {$( ".header-links a" ).unwrap();}
		if($("#dropicon").length > 0) {$("#dropicon").remove();}
	}
});
/*window.setInterval(function(){
	$('.top_blurb').css("opacity","0.5");
	window.setTimeout(function(){
		$('.top_blurb').css("opacity","1");
	},750);
}, 1500);*/
</script>
