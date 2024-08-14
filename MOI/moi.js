<script>
$(window).load(function () {
    $('head').append('<link rel="icon" href="https://www.moii.com/wp-content/uploads/2020/09/cropped-MOIfavicon-32x32.png" sizes="32x32">');
	$( "link[href^='css/header.css']" ).removeAttr( "media" );
	/*$( "#header_logo img.no_mobile" ).wrap( '<td id="desklogo"><div style="margin-left: 62px;margin-bottom: -8px;padding-top: 8px;"><a href="index.cgi">' );*/
	$( "#header_logo img.no_mobile" ).wrap( '<a href="index.cgi">' );
	$( "#header_logo img.no_desktop" ).wrap( '<a href="index.cgi">' );
	$(".note:contains('Non-taxable items marked with *')").hide();
	var nostar = $('td.numcol.pricecol:contains("*")').text().replace("*", "");
	$('td.numcol.pricecol:contains("*")').text(nostar);

	/*$( '<div class="top_blurb"><span>FREE SHIPPING ON ORDERS OVER $100</span></div>').prependTo("#header-wrapper")
	if($('form[action="authenticate.cgi"]').length === 0) {
		$("button#submit_continue").last().hide();
	}*/

    if($(window).width() >= 1025) {
		$( "#desklogo" ).insertBefore(".header-links");
		$('table.items-table.true-table').children().find("th").each(function() {
			if($(this).text().length > 0 && $(this).attr("class") === undefined) {
				console.log($(this).attr("class") + " | " + $(this).text());
				$(this).attr("class", "right");
				console.log($(this).attr("class") + " | " + $(this).text());
			}			
		});
		$('table.items-table.true-table').children().find('td').each(function() {
			if($(this).text().length > 0 && $(this).attr("class") === undefined) {
				console.log($(this).attr("class") + " | " + $(this).text());
				$(this).attr("class", "right");
				console.log($(this).attr("class") + " | " + $(this).text());
			}			
		});
		/*$('.maincol').addClass("right");
		$('.form-sublabel').addClass("right");*/
	
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
			/*var buttonbar = $('button#button_addproducts').parent();
			$('<span style="display: block; font-size: small; margin-left: 205px; padding-bottom: 10px;">Shipping & taxes calculated at checkout</span>').prependTo(buttonbar);
			*/
		}
	}
});
$(document).ready(function () {
	/*$( "#shipmeth-info" ).hide();*/
	$( "#searchfield_input" ).parent().hide();
	$( "#basket-list-title" ).parent().hide();

	if( $(".item_count").text() > 0) {
		$("button#submit_cancel").show();
	} else{
		$("button#submit_cancel").hide();
	}
});
</script>
