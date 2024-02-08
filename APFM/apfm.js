
<div class="footer_row3">
<div><img src="con/SF-PoweredBy2024-260w-White.png" alt="Online Storefront Powered by Strategic Factory" class="img-fluid mt-3"></div>
	<div class="outfoot"><div class="footer_cr">
		Strategic Factory<br>
		11195 Dolfield Boulevard<br>
		Owings Mills, Maryland 21117<br>
		(443) 548-3500<br>
		<a href="mailto:sfportalorders@strategicfactory.com">sfportalorders@strategicfactory.com</a>
	</div></div>
</div>

<script>
$('div.error').each(function(){
    $(this).text($(this).text().replace('Coupon added', "Gift Card Applied"));
    $(this).text($(this).text().replace('Coupon already on order', "This Gift Card is already applied"));
});

$(window).load(function () {
	$( "link[href^='css/header.css']" ).removeAttr( "media" );
	$("div.error:contains('Incompatible Mail List or Delivery methods.')").each(function() {
		var errtxt = $(this).text().replace("Incompatible Mail List or Delivery methods.", "One or more items must be ordered separately");
		//console.log(errtxt);
		$(this).text(errtxt);
	});
});


$(document).ready(function () {
	//$( "#shipmeth-info" ).hide();
	if($('form[action="item_form.cgi"]').length > 1) {
		$('th').each(function(){
			$(this).css('text-align', 'center');
		});
	}
	$("span.budgetlbl").find('br').remove();
});

</script>
