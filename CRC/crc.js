<script src="https://kit.fontawesome.com/7ad7d988c2.js" crossorigin="anonymous"></script>
<!-- script src="https://www.nationsprint.com/clients/crc/con/catalog-new.js"></script -->


<div class="footer_row3">
<p class="footer_cr">Strategic Factory<br>
11195 Dolfield Boulevard<br>
Owings Mills, Maryland 21117<br>
443-589-3159<br>
<a href="mailto:margaretc@strategicfactory.com" style="color: #FFF;">margaretc@strategicfactory.com</a></p>
</div>

<script>
$(document).ready(function() {

     $(".stretchy_cols").removeAttr("style");

     // When an item's preview image is clicked...
     $(".image-container").click(function()
     {
     // If a bundle subitem row has no contents, hide it.
     $("tr:not(:has(td))").css("display", "none");

     // For whatever reason subgroup titles get added in even if you explicitly disallow
     // that option, so hide them too.
     $("tr:has(.bundle_subitem_subgroupname)").css("display", "none");

     // The footer won't get out of the way so away it goes.
     $(".footnote").remove();
     });

     // When the description of an item is clicked...
     $(".responsive-choose-info").click(function()
     {
     // Toggle its hidden description if it has one.
     $(this).children("span").children(".catalog-details").slideToggle();
     });

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

});
</script>