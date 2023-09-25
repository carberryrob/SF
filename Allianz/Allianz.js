<div class="footer_row3">
	<p class="footer_cr">
		Strategic Factory<br>
		11195 Dolfield Boulevard<br>
		Owings Mills, Maryland 21117<br>
		(443) 548-3500<br>
		<a href="mailto:sfportalorders@strategicfactory.com" style="color:#000;">sfportalorders@strategicfactory.com</a>
	</p>
</div>

<script>
$(window).load(function () {
	$("select#service_code:contains(' - $0.00')").children().each(function() {
		var selectshiptxt = $(this).html().replace(" - $0.00", "");
		//console.log(selectshiptxt);
		$(this).html(selectshiptxt);
	});
	$("td.numcol.pricecol:contains('$0.00*')").each(function() {
		var priceshiptxt = $(this).text().replace("$0.00*", "");
		//console.log(priceshiptxt);
		$(this).text(priceshiptxt);
	});
	$("div.error:contains('Incompatible Mail List or Delivery methods.')").each(function() {
		// var errtxt = $(this).text().replace("Incompatible Mail List or Delivery methods.", "Incompatible Delivery methods.");
		var errtxt = $(this).text().replace("Incompatible Mail List or Delivery methods.", "");
		//console.log(errtxt);
		$(this).text(errtxt);
	});
});
</script>