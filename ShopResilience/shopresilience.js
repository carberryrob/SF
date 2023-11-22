<div class="footer_row3">
<div><img src="con/White-PoweredBySF-2023-260.png" alt="Online Storefront Powered by Strategic Factory" class="img-fluid mt-3"></div>
	<p class="footer_cr">
		Strategic Factory<br>
		11195 Dolfield Boulevard<br>
		Owings Mills, Maryland 21117<br>
		(443) 548-3500<br>
		<a href="mailto:sfportalorders@strategicfactory.com">sfportalorders@strategicfactory.com</a>
	</p>
</div>


<script>

function getDSTDates(year) {
    const dstDates = [];
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

    return dstDates;
}

function isEDT() {
	const now = new Date();
    const dstDates = getDSTDates(now.getFullYear());

	var sstart = new Date();
	var eend = new Date();
	dstDates.forEach(entry => {
        // console.log(`${entry.year}: DST starts on ${entry.start.toDateString()} and ends on ${entry.end.toDateString()}`);
		sstart = entry.start
		eend = entry.end
    });
    return now >= sstart && now < eend;
}

function shouldExecute(localStartDate,localEndDate) {
    // Call the function to determine if it's EDT or EST
    if (isEDT()) {
        // console.log("It's Eastern Daylight Time (EDT).");
        var DaylightSavCorrection = -4
    } else {
        // console.log("It's Eastern Standard Time (EST).");
        var DaylightSavCorrection = -5
    }
    const currentDate = new Date();
    // Convert current date and time to UTC to preserve the same point in time for all time zones
    const currentUTC = new Date(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate(), currentDate.getUTCHours(), currentDate.getUTCMinutes(), currentDate.getUTCSeconds());
    // console.log(currentUTC);

	// Convert local times to Eastern Standard Time (EST) since you're interested in that time zone
    const estOffset = DaylightSavCorrection; // EDT offset is -4 hours from UTC; EST offset is -5 hours from UTC
    const estStartDate = new Date(localStartDate.getTime() - estOffset * 60 * 60 * 1000);
    const estEndDate = new Date(localEndDate.getTime() - estOffset * 60 * 60 * 1000);
    
    return currentUTC >= estStartDate && currentUTC <= estEndDate;
}


$(window).load(function () {
	$('head').append('<link rel="icon" type="image/x-icon" href="con/favicon.ico">');
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
    
	// Show Banner only during a predetermined date and time.
    var localStartDate = new Date('2023-11-24T00:00:01'); // Replace with your desired start date and time in your local time zone
    var localEndDate = new Date('2023-11-27T23:59:59');   // Replace with your desired end date and time in your local time zone
	if (shouldExecute(localStartDate,localEndDate)) {
		console.log("Start - " + localStartDate.toString());
		console.log("End - " + localEndDate.toString());
		var dnow = new Date();
		console.log("Now - " + dnow.toString());
		console.log("Show Banner");
		$("#salebanner").show();
	} else {
		console.log("Hide Banner");
		$("#salebanner").hide();
	}

    if ($("#salebanner").length > 0) {
        var classstr = $("#salebanner").parents("div").attr("class");
        if (~classstr.indexOf("no_mobile")) {
            $("#salebanner").parents("div").removeClass("no_mobile");
        }    
    }
	//End Banner ************************************************************
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
