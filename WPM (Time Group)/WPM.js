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
/********** Enable/Disable "Submit Order" button based on approval *****************************************************/
$(document).ready(function () {
     // if ($("select[name='bill_code10']").val() == "No") {
     //      $("button#submit_send_order").prop('disabled', 'disabled');
     // }
     // // console.log($("select[name='bill_code10']").val());
     // $('form[action="accept_bill.cgi"]').change(function() {
     //      if ($("select[name='bill_code10']").val() == "No") {$("button#submit_send_order").prop('disabled', 'disabled');}
     //      if ($("select[name='bill_code10']").val() == "Yes") {$("button#submit_send_order").prop('disabled', false);}
     //      console.log($("select[name='bill_code10']").val());
     //      //if ( $('select#ship_office').val() == '1 - Will Call at Strategic Factory in Owings Mills') {$("span#willcalltxt").show();}
     // });

     // //********** Move approval yes/no to just above "Submit Order"*******************
     // $("tr:contains('I have verified and approve this order:')").appendTo($("p.approve_order").parents("tr").parent());
     // //*******************************************************************************
     $( "#shipmeth-info" ).hide();

     if($('form[action="accept_confirm.cgi"]').length >= 1) {
          $("table#bill-sect").insertAfter("table#ship-sect");
     }

     if($('form[action="bill.cgi"]').length >= 1 || $('form[action="review.cgi"]').length >= 1) {
          $("table#billing-info").insertBefore("#final-buttonsbar");
          //$("table#billing-info tr").eq(0).hide();
     }

     
     if ($("select[name='bill_code10']").val() == "No") {
          $("button#submit_send_order").prop('disabled', 'disabled');
          $("button#submit_review_order").prop('disabled', 'disabled');
     }
     //console.log($("select[name='bill_code10']").val());
     $('form[action="accept_bill.cgi"]').change(function() {
          if ($("select[name='bill_code10']").val() == "No") {$("button#submit_send_order").prop('disabled', 'disabled');}
          if ($("select[name='bill_code10']").val() == "Yes") {$("button#submit_send_order").prop('disabled', false);}
          //console.log($("select[name='bill_code10']").val());
     });
     $('form[action="review_bill.cgi"]').change(function() {
          if ($("select[name='bill_code10']").val() == "No") {$("button#submit_review_order").prop('disabled', 'disabled');}
          if ($("select[name='bill_code10']").val() == "Yes") {$("button#submit_review_order").prop('disabled', false);}
          // console.log($("select[name='bill_code10']").val());
     });
     $('form[action="review.cgi"]').change(function() {
          if ($("select[name='bill_code10']").val() == "No") {$("button#submit_review_order").prop('disabled', 'disabled');}
          if ($("select[name='bill_code10']").val() == "Yes") {$("button#submit_review_order").prop('disabled', false);}
          console.log($("select[name='bill_code10']").val());
     });

     //********** Move approval yes/no to just above "Submit Order"*******************
     $("tr:contains('I have verified and approve this order:')").appendTo($("p.approve_order").parents("tr").parent());
     //*******************************************************************************


});
/***********************************************************************************************************************/
</script>
