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
    $(input#ship_needby).each(function() {
        console.log($(this).val());
    });
});
