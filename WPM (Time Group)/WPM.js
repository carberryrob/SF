<div class="footer_row3">
<p class="footer_cr">
    Strategic Factory<br>
    11195 Dolfield Boulevard<br>
    Owings Mills, Maryland 21117<br>
    (443) 548-3500<br>
    <a href="mailto:sfportalorders@strategicfactory.com" style="color:#ffffff;">sfportalorders@strategicfactory.com</a>
</p>
</div>
<script>
$(document).ready(function () {
// $(window).load(function () {
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
     $("table.true-table .qty_select_cell > select[name*='For_Kit']").each(function() {
          // console.log( $(this).val() );
          $(this).closest('td').prepend($(this).val());
          $(this).hide();
     });
     $("table.true-table .qty_select_cell > input[type='text'][name*='For_Kit']").each(function() {
          // console.log( $(this).val() );
          $(this).closest('td').prepend($(this).val());
          $(this).hide();
     });
     $("table#shipmeth-info").hide();
});

</script>