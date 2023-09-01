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
	$( "#shipmeth-info" ).hide();
	$('div.note:contains("(optional)")').hide();
	$( "#shipaddr-info" ).insertAfter($( "#requestor-info" ));
	$('div.pagetitle:contains("Shipping Information:")').insertAfter($( "#requestor-info" ));
	$( "#requestor-info" ).hide();
	$('div.pagetitle:contains("Requestor Information:")').hide();
	$("select#ship_office").change(function() {
		//console.log($("select#ship_office").val());
		if ($("select#ship_office").val() == "other") {
			$("select#ship_method").val("UPS_Ground");
		}else{
			$("select#ship_method").val("UWCM Delivery (Friday)");
		}
		//console.log($("select#ship_office").val());
		//console.log($("select#ship_method").val());
	});
	$("input#ship_street1").change(function() {
		if ($("input#ship_street1").val() != "1800 Washington Blvd Ste 340") {
			$("select#ship_method").val("UPS_Ground");
		}else{
			$("select#ship_method").val("UWCM Delivery (Friday)");
		}
	});

</script>
