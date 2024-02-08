<div class="footer_row3">
<div><img style="opacity: 100%;" src="con/SF-PoweredBy2024-260w-White.png" alt="Online Storefront Powered by Strategic Factory" class="img-fluid mt-3"></div>
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
	$("table#billing-info").insertBefore("div#final-buttonsbar"); /* *** Enable/Disable "Submit Order" button based on approval move to above Submit*** */
    $('head').append('<link rel="icon" type="image/png" sizes="32x32" href="https://whatsyourgrief.com/favicon-32x32.png">');
	$( "link[href^='css/header.css']" ).removeAttr( "media" );
	$( "#header_logo img.no_mobile" ).wrap( '<a style="display: inline-block;" href="index.cgi">' );
	$( "#header_logo img.no_desktop" ).wrap( '<a style="display: inline-block;" href="index.cgi">' );
	$(".note:contains('Non-taxable items marked with *')").hide();
	//var nostar = $('td.numcol.pricecol.discount_price:contains("*")').text().replace("*", "");
	//$('td.numcol.pricecol.discount_price:contains("*")').text(nostar);
	//var nostar = $('td.numcol.pricecol:contains("*")').text().replace("*", "");
	//$('td.numcol.pricecol:contains("*")').text(nostar);
	//$('tr.form-sublabel.negativeprice').insertAfter('#bill.shipping_label').parent('tr');
		
	/*if ($("tr.form-sublabel.negativeprice:contains('Voucher Funds')").length > 0) {
		$("tr.form-sublabel.negativeprice td:contains('Voucher Funds')").css('font-weight', 'bold');
		var voucher = $("tr.form-sublabel.negativeprice:contains('Voucher Funds')");
		var ttl = $(voucher).siblings('tr:contains("Total Price:")');
		if ($(ttl).length > 0) {$(voucher).insertBefore($(ttl));}
		var cc = $(voucher).siblings('tr:contains("Creditcard Surcharge:")');
		if ($(cc).length > 0) {$(voucher).insertBefore($(cc));}
		
	}*/
	//$("table#billing-pricetable").find("tr:contains('Handling')").hide();
	$("table#billing-pricetable").find("td , th").each(function() {
		
		$(this).css("text-align", "right");
		$(this).filter(":contains('*')").each(function() {
			var nostar = '';
			var nostar = $(this).html().replace("*", "");
			$(this).html(nostar);
		});
	});
    if($(window).width() >= 1025) {
		$( "#desklogo" ).insertBefore(".header-links");
		$('table.items-table.true-table').children().find("th").each(function() {
			if($(this).text().length > 0 && $(this).attr("class") === undefined) {
				//console.log($(this).attr("class") + " | " + $(this).text());
				$(this).attr("class", "right");
				//console.log($(this).attr("class") + " | " + $(this).text());
			}			
		});
		$('table.items-table.true-table').children().find('td').each(function() {
			if($(this).text().length > 0 && $(this).attr("class") === undefined) {
				//console.log($(this).attr("class") + " | " + $(this).text());
				$(this).attr("class", "right");
				//console.log($(this).attr("class") + " | " + $(this).text());
			}			
		});

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
		}
	}
});
$(document).ready(function () {
	//$( "#shipmeth-info" ).hide();
	if($('form[action="profile.cgi"]').length === 0) {
		if( $(".item_count").text() > 0) {
			$("button#submit_cancel").show();
		} else{
			$("button#submit_cancel").hide();
		}
	}
});
</script>
<script>
//********** Enable/Disable "Submit Order" button based on approval *****************************************************
$(document).ready(function () {
	if ($("select[name='bill_code10']").val() == "No") {
		$("button#submit_send_order").prop('disabled', 'disabled');
	}
	//console.log($("select[name='bill_code10']").val());
	//$('form[action="accept_bill.cgi"]').change(function() {
	$('form[action="accept.cgi"]').change(function() {
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
