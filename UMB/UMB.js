<div class="footer_row3">
<p class="footer_cr">Strategic Factory<br>
11195 Dolfield Boulevard<br>
Owings Mills, Maryland 21117<br>
(443) 548-3500<br>
<a href="mailto:umborders@strategicfactory.com" style="color: #ffffff;">umborders@strategicfactory.com</a></p>
</div>
<script>
{/* Rob Carberry 6/20/2024 */}

$(document).ready(function () {
     // Division
     $( "input[name='corp_tag']" ).each(function() {
          console.log('Division:  ' + $(this).val());
          if ( $(this).val().toLowerCase() == "umb_grad" ) {
               $('h2.blurb').show();
          }
     });

});

</script>