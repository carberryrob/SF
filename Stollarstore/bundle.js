
$(window).load(function () {

	// if($(window).width() >= 1025) {


		// Make Kit Qty read only
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
	// }
	
	// $(".true-table").show();

});
