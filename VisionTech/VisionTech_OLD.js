<div class="footer_row3">
<div><img src="con/SF-PoweredBy2024-260w-White.png" alt="Online Storefront Powered by Strategic Factory" class="img-fluid mt-3"></div>
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
	//$('head').append('<link rel="icon" type="image/x-icon" href="https://irp-cdn.multiscreensite.com/faf75e4c/site_favicon_16_1608498118297.ico">');
	//$( "link[href^='css/header.css']" ).removeAttr( "media" );
	//$( ".header-links" ).find( "a" ).removeAttr( "style" )
	//$( "#header_logo img.no_mobile" ).wrap( '<td id="desklogo"><div class="logolinkdiv"><a style="display: inline-block;" href="index.cgi">' );
	//$( "#header_logo img.no_desktop" ).wrap( '<a style="display: inline-block;" href="index.cgi">' );
	$("div.error:contains('Incompatible Mail List or Delivery methods.')").each(function() {
		var errtxt = $(this).text().replace("Incompatible Mail List or Delivery methods.", "");
		//console.log(errtxt);
		$(this).text(errtxt);
	});

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
		$("table#billing-pricetable").find("td:nth-child(1)").removeClass("left").addClass("center");
		/***********************************/
		/**** Check to see if in basketview and hide extra checkout button ********/
		if($('form[action="item_form.cgi"]').length > 0) {
			$(".buttonsbar").find("button:nth-child(4)").hide();
		}
	}
});
$(document).ready(function () {
	//$( "#shipmeth-info" ).hide();
	$('div.note:contains("(optional)")').hide();
	var sav = $("td.input").has("input#userid").html();
	
	$('input[type=radio][name=act]').change(function() {
		//console.log( $(this).val() );
		if ($(this).val() == "remind") {
			var r = $("td.input").has("input#userid").html().replace("@visiontechnologies.com", "")
			$("td.input").has("input#userid").html(r);
			$("input#userid").prop("size", "30");
		}else{
			$("td.input").has("input#userid").html(sav);
			$("input#userid").prop("size", "15");
		}
	});
	
	/*$("input#act_remind").change(function() {
		//console.log($("input#act_remind").val());
		//console.log( "|" + $("td.input").has("input#userid").text() + "|" );
		var r = $("td.input").has("input#userid").html().replace("@visiontechnologies.com", "")
		$("td.input").has("input#userid").html(r);
		$("input#userid").prop("size", "30");
	});*/

	//$( "#shipaddr-info" ).insertAfter($( "#requestor-info" ));
	//$('div.pagetitle:contains("Shipping Information:")').insertAfter($( "#requestor-info" ));

	//$( "#requestor-info" ).hide();
	//$('div.pagetitle:contains("Requestor Information:")').hide();

	/*if($('form[action="profile.cgi"]').length == 0) {
		if( $(".item_count").text() > 0) {
			$("button#submit_cancel").show();
		} else{
			$("button#submit_cancel").hide();
		}
	}*/
	if( $(".item_count").text() > 0) {
		$("button#submit_cancel").has(":contains('Cancel Order')").show();
	}else{
		$("button#submit_cancel").has(":contains('Cancel Order')").hide();
	}

});

</script>
