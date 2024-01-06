<!-- Rob Carberry Updated 1/5/2024 -->
<div class="footer_row3">
<div><img src="con/White-PoweredBySF.png" alt="Online Storefront Powered by Strategic Factory" class="img-fluid mt-3"></div>
	<p class="footer_cr">
		Strategic Factory<br>
		11195 Dolfield Boulevard<br>
		Owings Mills, Maryland 21117<br>
		(443) 548-3500<br>
		<a href="mailto:sfportalorders@strategicfactory.com">sfportalorders@strategicfactory.com</a>
	</p>
</div>
<script>

$(window).load(function () {

	$('head').append('<link rel="icon" type="image/x-icon" href="con/favicon.ico">');
	$('head').append('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=DM+Serif+Display&display=swap">');
	$( "link[href^='css/header.css']" ).removeAttr( "media" );
	
	$( ".header-links" ).find( "a" ).removeAttr( "style" );
	$( "#header_logo img.no_mobile" ).wrap( '<td id="desklogo"><div class="logolinkdiv"><a style="display: inline-block;" href="index.cgi">' );
	
	$( "#header_logo img.no_desktop" ).wrap( '<a style="display: inline-block;" href="index.cgi">' );

	$(".note:contains('Non-taxable items marked with *')").hide();
	$(".pagetitle:contains('Mailing List')").hide();
	$("div.error:contains('Incompatible Mail List or Delivery methods.')").each(function() {
		var errtxt = $(this).text().replace("Incompatible Mail List or Delivery methods.", "");
		$(this).text(errtxt);
	});
	
	$("table#billing-pricetable").find("td , th").each(function() {
		//$(this).css("text-align", "right");
		$(this).filter(":contains('*')").each(function() {
			var nostar = '';
			var nostar = $(this).html().replace("*", "");
			$(this).html(nostar);
		});
	});

	
	/****** Search Box ********/
	$("input#searchfield_input").wrap('<div class="input-wrapper">');
	$( '<label for="searchfield_input" class="fa fa fa-search"></label>' ).insertAfter("input#searchfield_input");
	/**************************/

	if($(window).width() >= 1025) {

		/************* My Account Menu *************/
		
		$( ".header-links a" ).wrapAll( '<div id="dropdown-contentdiv" class="dropdown-content"></div>  ' );
		$( ".dropdown-content" ).wrapAll( '<div id="dropdowndiv" class="dropdown"><span id="dropicon">My Account</span>' );
		$( ".dropdown-content" ).insertAfter( '#dropicon' );
		$( "a[href='basket_view.cgi'].no_mobile" ).insertBefore( "#dropdowndiv" );
		$( ".image-container img").css("max-height","max-content");
		$( "#dropdowndiv" ).insertBefore( 'table.header' );
		$( "#logout_userid" ).insertBefore( '.dropdown' );
		
		/*********** End My Account Menu ***********/

		$( "#desklogo" ).insertBefore(".header-links");


		/************* TopTabs *************/
		
		// $("div.responsive_tabs-shell").show();  /*** Only for testing; Show the old Tabs ***/
		// $(".tab_html_wrapper").show();  /*** Only for testing; Show the old Tabs ***/
		// $(".responsive_tabs-shell .before").show();  /*** Only for testing; Show the old Tabs ***/
		// $("div#basket-list-title").show();  /*** Only for testing; Show the old Tabs ***/



		$( "#header-wrapper" ).after('<div id="TabsDiv"><nav id="TabsNav"><ul id="TabsMenu">'); /** Create the top nav place holder **/
		var tabid = '';
		var appendid = '';
		$('#tab_responsive_tabs [id^="tab_"]').each(function() {
			/**** Top most tabs menu item ****/
			if ($("#TMul_" + $(this).attr("id")).length > 0 ) {return true;} /*** if it has already been created then skip to next ***/
			//console.log( "TOP - " + $(this).find("dfn").first().text() + " : " + $(this).attr("id") + " | " + $(this).find("dfn").length );
			appendid = 'TabsMenu';
			tabid = $(this).attr("id");
			if ($(this).find("dfn").length == 1) {
				$("#" + appendid).append( '<li class="onlyli" id="TMli_' + tabid + '">' + $(this).find("dfn").first().html() + '</li>' ); /**** Top most menu link with no sub items ****/
			}else{
				$("#" + appendid).append( '<li class="topli" id="TMli_' + tabid + '">' + $(this).find("dfn").first().text() + '<ul id="TMul_' + tabid + '"></ul></li>' ); /*Top most menu with sub items*/
			}
			/**** Sub tabs menu items ****/
			$(this).children().find('dfn').each(function () {
				//console.log( "---- " + $(this).text() + " == " + $(this).parents('div [id^="tab_"]').parents('div [id^="tab_"]').attr("id") + " /// " + $(this).parents('div [id^="tab_"]').first().attr("id") + " || " + $(this).is(":last-child") );
				if ($(this).is(":last-child")) {
					appendid = 'TMul_' + $(this).parents('div [id^="tab_"]').first().attr("id");
					tabid = $(this).parents('div [id^="tab_"]').parents('div [id^="tab_"]').attr("id");
					if (tabid == 'tab_responsive_tabs') {tabid = 'TabsMenu';}
					$("#" + appendid).append( '<li class="subtab">' + $(this).html() + '</li>' ); /**** All sub item links ****/
				}else{
					tabid = $(this).parents('div [id^="tab_"]').first().attr("id");
					if (tabid == 'tab_responsive_tabs') {tabid = 'TabsMenu';}
					appendid = 'TMul_' + $(this).parents('div [id^="tab_"]').parents('div [id^="tab_"]').attr("id");
					$("#" + appendid).append( '<li class="subtopli" id="MMli_' + tabid + '">' + $(this).text() + '<ul id="TMul_' + tabid + '"></ul></li>' ); /**** Middle menu with sub items ****/
				}
			});
		});
		
		$( ".toptabs:contains('undefined')" ).hide();  /** if on a page that tabs are not exposed, hide the place holders. **/
		/********** End TopTabs ***********/

		/***************** TopTab Search items feature ****************/
		if ( $("a[href='basket_view.cgi'].no_mobile").length > 0 ) {
			$(".input-wrapper:has(#searchfield_input)").first().clone(true,true).insertAfter("a[href='basket_view.cgi'].no_mobile").attr("id", "Srch");
			$( "div#Srch input" ).keyup(function(event) {
				//console.log(event.which);
				$('.item-search-block input').val( $(this).val() );
				if (event.which == 13) {
					$("#submit_catalog_search").trigger("click");
				}
			});
		}else{
			$(".input-wrapper:has(#searchfield_input)").first().clone(true,true).insertAfter( "#pageurl" ).attr("id", "Srch");
			$( "div#Srch input" ).keyup(function(event) {
				//console.log(event.which);
				$('.item-search-block input').val( $(this).val() );
				if (event.which == 13) {
					$("#submit_catalog_search").trigger("click");
				}
			});
		}
		/*************** End TopTab Search items feature **************/

		if ( $( "input[name='tab']" ).val() ) {
			$("#copy5 span").text( $( "input[name='tab']" ).val().replace(/\|\|/g, ' - ') ); /** Set the catalog top left description **/
		}


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
		//$("table#billing-pricetable").find("td.input.right.totalinpcol").removeClass("right").addClass("left");
		$("table#billing-pricetable").find("th:nth-child(1)").removeClass("left").addClass("center");
		//$("table#billing-pricetable").find("td:nth-child(1)").removeClass("left").addClass("center");
		$('td:contains("UUG Paid")').attr('style', 'text-align: right !important; font-weight: bold;');
		/***********************************/

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
			// $('.cart_item').parents('table').css('text-align', 'center');
			$('.cart_item').parents('table').css({'text-align': 'center','overflow': 'scroll','display': 'block','width': '100%'});
			
		}

		$(".basket-list-item").html(function() {
			var txt = '<div class="basket-text">' + this.innerText.trim() + '</div>';
			//console.log("|" + txt + "|");
			var butt = $(this).html();
			var buttend = butt.search(/<\/button>/);
			butt = '<div class="basket-butt">' + butt.substring(1, buttend) + '</button>' + '</div>';
			return butt + txt;
		});
		$('span.cart_num_items.no_mobile').each(function() {
			var cartcnt = $(this).text();
			cartcnt = cartcnt.replace("(", "").replace(")", "").trim();
			$(this).text(cartcnt);
			
		});
		$("span.cart_num_items.no_mobile").parent("a").wrap('<div class="carticon">');
	}
	
	if( $('.stretchy_cols').length == 1) {$('.stretchy_cols').addClass("singleItemCenter");}
	if( $('.basket-list-item').length >= 1) {$('#basket-list-title').show();}
	
	$('.header-links').attr('style', 'display: revert !important');

	/********* Hide FAQ Holders & Place Holders **********/
	// $('div.height-adjuster').has('div.responsive-longname:contains("FAQ-HOLDER")').wrap( '<div class="hideit" style="display: none !important;">' );
	// $('div.height-adjuster').has('div.responsive-longname:contains("PLACE-HOLDER")').wrap( '<div class="hideit" style="display: none !important;">' );
	$('div.stretchy_cols').has('div.responsive-longname:contains("FAQ-HOLDER")').wrap( '<div class="hideit" style="display: none !important;">' );
	$('div.stretchy_cols').has('div.responsive-longname:contains("PLACE-HOLDER")').wrap( '<div class="hideit" style="display: none !important;">' );
    
});

$(document).ready(function () {
	$("#cost_options\\.quantity").closest('tr').hide();

	if($('.pagetitle').text().toUpperCase() === 'IN YOUR CART') {
		$(".buttonsbar").find("button:nth-child(4)").hide(); /**** Check to see if in basketview and hide extra checkout button ********/
	}
	//$( "#shipmeth-info" ).hide();
	
	/** -None are blank addresses to make sure it clears the fields.  Hide it from the shipping page **/
	if($('#ship_office').find('option[value="-None"]').length > 0) {$('#ship_office').find('option[value="-None"]').remove();} 
	
	$('div.note:contains("(optional)")').hide();  /** remove (optional) blurb **/

	/********** Only show Cancel Order button when items are in the cart ***********/
	if( $(".item_count").text() > 0) {
		$("button#submit_cancel").has("span:contains('Cancel Order')").show();
	} else{
		$("button#submit_cancel").has("span:contains('Cancel Order')").hide();
	}
	
	
});

</script>
<script>
/********** Enable/Disable "Submit Order" button based on approval *****************************************************/
$(document).ready(function () {
	if ($("select[name='bill_code10']").val() == "No") {
		$("button#submit_send_order").prop('disabled', 'disabled');
	}
	// console.log($("select[name='bill_code10']").val());
	$('form[action="accept_bill.cgi"]').change(function() {
		if ($("select[name='bill_code10']").val() == "No") {$("button#submit_send_order").prop('disabled', 'disabled');}
		if ($("select[name='bill_code10']").val() == "Yes") {$("button#submit_send_order").prop('disabled', false);}
		console.log($("select[name='bill_code10']").val());
		//if ( $('select#ship_office').val() == '1 - Will Call at Strategic Factory in Owings Mills') {$("span#willcalltxt").show();}
	});

	//********** Move approval yes/no to just above "Submit Order"*******************
	$("tr:contains('I have verified and approve this order:')").appendTo($("p.approve_order").parents("tr").parent());
	//*******************************************************************************
});
/***********************************************************************************************************************/
</script>
