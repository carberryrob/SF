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
$(document).ready(function () {
		// Make Kit Qty read only in basket etc.
    $("table.true-table .qty_select_cell > select[name*='_Bundle']").each(function() {
        // console.log( $(this).val() );
        $(this).closest('td').prepend($(this).val());
        $(this).hide();
    });
    $("table.true-table .qty_select_cell > input[type='text'][name*='_Bundle']").each(function() {
        // console.log( $(this).val() );
        $(this).closest('td').prepend($(this).val());
        $(this).hide();
    });
});
</script>