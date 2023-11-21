<div class="footer_row3">
<div><img style="opacity: 100%; padding-top: 7px;" src="con/White-PoweredBySF-2023-260.png" alt="Online Storefront Powered by Strategic Factory" class="img-fluid mt-3"></div>
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
	$('head').append('<link rel="shortcut icon" href="https://www.merrittproperties.com/themes/custom/merritt/favicon.ico" type="image/vnd.microsoft.icon">');
	$( "link[href^='css/header.css']" ).removeAttr( "media" );
	$( "#header_logo img.no_mobile" ).wrap( '<a style="display: inline-block;" href="index.cgi">' );
	$( "#header_logo img.no_desktop" ).wrap( '<a style="display: inline-block;" href="index.cgi">' );
	$(".note:contains('Non-taxable items marked with *')").hide();
	
	$("table#billing-pricetable").find("td , th").each(function() {
		//$(this).css("text-align", "right");
		$(this).filter(":contains('*')").each(function() {
			var nostar = '';
			var nostar = $(this).html().replace("*", "");
			$(this).html(nostar);
		});
	});
	/****** Search Box ********/
	$("input#searchfield_input").wrap('<div class="input-wrapper">')
	$( '<label for="searchfield_input" class="fa fa fa-search"></label>' ).insertAfter("input#searchfield_input");
	/**************************/
	
	//if ($("div.form-body div.title > h1").text().length == 0) {$("div.form-body div.title > h1").hide();}
	$("div.form-body div.title > h1").each(function() {
		if ($(this).text().trim().length == 0) {$(this).hide()}
		//console.log("h1 length = " + $(this).text().trim().length);
		//console.log("h1 text = " + $(this).text().trim());
	});
	
	if($(window).width() >= 1025) {
		$( "#desklogo" ).insertBefore(".header-links");
		$( "td#header_logo" ).css("display", "table-cell");

        $(".imp_edit_link a").addClass("button");
		
		/*********Cart/Basket table*********/
		$("table.items-table.true-table").find("th:nth-child(2)").removeClass("right").addClass("center");
		$("table.items-table.true-table").find("th:nth-child(3)").removeClass("right").addClass("center");
		$("table.items-table.true-table").find("td:nth-child(2)").removeClass("right").addClass("center");
		$("table.items-table.true-table").find("td:nth-child(3)").removeClass("right").addClass("center");		
		/***********************************/

		/*********Shipping Table************/
		$("table#shipping-pricetable").find("th:nth-child(2)").removeClass("left").addClass("center");
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
			
		/*if($('.pagetitle').text().toUpperCase() === 'IN YOUR CART') {
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
		}*/
	}
});
$(document).ready(function () {
	$( "#shipmeth-info" ).hide();
	if($('form[action="profile.cgi"]').length === 0) {
		if( $(".item_count").text() > 0) {
			$("button#submit_cancel").show();
		} else{
			$("button#submit_cancel").hide();
		}
	}
	//$("div.fileSpec ul li:('single sided')").hide();
	$("div.fileSpec ul").hide();
	/*$("th.left.middle:contains('Remove')").each(function() {
		$(this).removeClass("left middle");
		$(this).addClass("center middle");
	});
	$("td.left.drop_cell").each(function() {
		$(this).removeClass("left drop_cell");
		$(this).addClass("center drop_cell");
	});*/
});
</script>
<script>
//********** Enable/Disable "Submit Order" button based on approval *****************************************************
$(document).ready(function () {
	if ($("select[name='bill_code10']").val() == "No") {
		$("button#submit_send_order").prop('disabled', 'disabled');
	}
	$('form[action="accept_bill.cgi"]').change(function() {
		if ($("select[name='bill_code10']").val() == "No") {$("button#submit_send_order").prop('disabled', 'disabled');}
		if ($("select[name='bill_code10']").val() == "Yes") {$("button#submit_send_order").prop('disabled', false);}
		//console.log($("select[name='bill_code10']").val());
	});

	//********** Move approval yes/no to just above "Submit Order"*******************
	$("tr:contains('I have verified and approve this order:')").appendTo($("p.approve_order").parents("tr").parent());
	//*******************************************************************************
});
//***********************************************************************************************************************
</script>
