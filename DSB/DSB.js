<div class="footer_row3">
<div><img src="con/SF-PoweredBy2024-260w-White.png" alt="Online Storefront Powered by Strategic Factory" class="img-fluid mt-3"></div>
	<p class="footer_cr">
		Strategic Factory<br>
		11195 Dolfield Boulevard<br>
		Owings Mills, Maryland 21117<br>
		(443) 548-3500<br>
		<a href="mailto:sfportalorders@strategicfactory.com">sfportalorders@strategicfactory.com</a>
	</p>
	<p class="footer_cr">David S. Brown Enterprises Ltd.<br>
		100 Painters Mill Road, Suite 900<br>
		Owings Mills, MD 21117<br>
		410.363.3434<br>
		<a href="mailto:contact@davidsbrown.com" style="color: #ffffff;">contact@davidsbrown.com</a>
	</p>
</div>
<script>
$(window).load(function () {
	//$('head').append('<link rel="icon" type="image/x-icon" href="https://irp-cdn.multiscreensite.com/faf75e4c/site_favicon_16_1608498118297.ico">');
	$( "link[href^='css/header.css']" ).removeAttr( "media" );
	$( ".header-links" ).find( "a" ).removeAttr( "style" )
	$( "#header_logo img.no_mobile" ).wrap( '<td id="desklogo"><div class="logolinkdiv"><a style="display: inline-block;" href="index.cgi">' );
	$( "#header_logo img.no_desktop" ).wrap( '<a style="display: inline-block;" href="index.cgi">' );

	/****** Search Box ********/
	$("input#searchfield_input").wrap('<div class="input-wrapper">')
	$( '<label for="searchfield_input" class="fa fa fa-search"></label>' ).insertAfter("input#searchfield_input");
	/**************************/

	if($(window).width() >= 1025) {
		//$( "td#header_logo" ).css("display", "table-cell");

		/*********Cart/Basket table*********/
		$("table.items-table.true-table").find("th:nth-child(2)").removeClass("right").addClass("center");
		$("table.items-table.true-table").find("th:nth-child(3)").removeClass("right").addClass("center");
		$("table.items-table.true-table").find("td:nth-child(2)").removeClass("right").addClass("center");
		$("table.items-table.true-table").find("td:nth-child(3)").removeClass("right").addClass("center");
		/***********************************/

		/*********Shipping Table************/
		$("table#shipping-pricetable").find("th:nth-child(2)").removeClass("left").addClass("center");
		$("table#shipping-pricetable").find("th:nth-child(3)").removeClass("left").addClass("center");
		$("table#shipping-pricetable").find("th:nth-child(4)").removeClass("left").addClass("center");
		$("table#shipping-pricetable").find("th:nth-child(5)").removeClass("left").addClass("center");
		$("table#shipping-pricetable").find("td:nth-child(2)").removeClass("left").addClass("centerimp");
		$("table#shipping-pricetable").find("td:nth-child(3)").removeClass("left").addClass("centerimp");
		$("table#shipping-pricetable").find("td:nth-child(4)").removeClass("left").addClass("centerimp");
		$("table#shipping-pricetable").find("td:nth-child(5)").removeClass("left").addClass("centerimp");
		/***********************************/
		
		/*********Billing Table************/
		$("table#billing-pricetable").find("td.input.right.totalinpcol").attr("colspan", "1");
		$('<td colspan="1" class="newtotalcol right">').insertBefore($("table#billing-pricetable").find("td.input.right.totalinpcol"));
		$('td.newtotalcol.right').html($("td.input.right.updatetotalcol").html());
		$("td.input.right.updatetotalcol").html("");
		$("table#billing-pricetable").find("td.input.right.totalinpcol").removeClass("right").addClass("left");
		$("table#billing-pricetable").find("th:nth-child(1)").removeClass("left").addClass("center");
		//$("table#billing-pricetable").find("td:nth-child(1)").removeClass("left").addClass("center");
		/***********************************/
		/**** Check to see if in basketview and hide extra checkout button ********/
		if($('form[action="item_form.cgi"]').length > 0) {
			$(".buttonsbar").find("button:nth-child(4)").hide();
		}
		//console.log($('.pagetitle').text().toUpperCase());
		if($('.pagetitle').text().toUpperCase() === 'IN YOUR CART') {
			var cnt = 1;
			$('span.menu-knob').parents('tr').each(function() {
				$( this ).attr('class', 'menu-knob_tr'+cnt);
				$('<td class="cart_item"></td>').insertBefore(this);
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
				$(this).prepend(previewcell);
				$(this).prepend(menuknob);
				cnt = cnt + 1;
			});
			$('.cart_item').parents('table').css('text-align', 'center');
		}


		/************* TopTabs *************/
		$( "#desklogo" ).insertBefore(".header-links");
		var idN = 'desklogo';
		var idN2 = '';
		$('#tab_responsive_tabs dfn').each(function() {
			idN2 = $(this).text().replace(' ', '_') + 'TD';
			$('#' + idN).after('<td id="' + idN2 + '" class="toptabs">' + $(this).html() + "   ");
			idN = idN2;
			//console.log(idN);
		});
		$("#" + idN).after('<td id="rightSP" class="space">');
		$('#desklogo').after('<td id="leftSP" class="space">');

		$('a#submit_logout').after('   ');
		$( ".toptabs:contains('undefined')" ).hide();
		/********** End TopTabs ***********/

		/***************** TopTab Search items feature ****************/
		//console.log($("div#Srch").length + " 1| " + ($("div#Srch").length === 0));
		//if( $("div#Srch").length === 0 ) {
			$(".input-wrapper:has(#searchfield_input)").first().clone(true,true).insertAfter("#leftSP").attr("id", "Srch");
			$("div#Srch").after('<td class="space">');
			$( "div#Srch input" ).keyup(function(event) {
				//console.log(event.which);
				$('.item-search-block input').val( $(this).val() );
				if (event.which == 13) {
					$("#submit_catalog_search").trigger("click");
				}
			});
		//}
		/*************** End TopTab Search items feature **************/
		//console.log($("div#Srch").length + " 2| " + ($("div#Srch").length === 0));


		
	}
});
$(document).ready(function () {
	$( "#shipmeth-info" ).hide();
	$('div.note:contains("(optional)")').hide();

	//$( "#shipaddr-info" ).insertAfter($( "#requestor-info" ));
	//$('div.pagetitle:contains("Shipping Information:")').insertAfter($( "#requestor-info" ));

	//$( "#requestor-info" ).hide();
	//$('div.pagetitle:contains("Requestor Information:")').hide();

	if( $(".item_count").text() > 0) {
		$("button#submit_cancel").show();
	} else{
		$("button#submit_cancel").hide();
	}

	$("input#ship_zip").change(function() {
		//console.log( "|" + $(this).val() + "|" );
		var zip = $(this).val()
		if ( zip.indexOf("21117") >= 0 ) {
			//console.log("contains 21117 = True");
			$("select#ship_method").val("sf_delivery");
		}else{
			//console.log("contains 21117 = False");
			$("select#ship_method").val("ups_ground");
		}
	});
});

</script>
