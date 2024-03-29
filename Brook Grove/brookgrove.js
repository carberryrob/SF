<div class="footer_row3">
<div><img src="con/SF-PoweredBy2024-260w-White.png" alt="Online Storefront Powered by Strategic Factory" class="img-fluid mt-3"></div>
     <p class="footer_cr">
          Strategic Factory<br>
          11195 Dolfield Boulevard<br>
          Owings Mills, Maryland 21117<br>
          (443) 548-3500<br>
          <a href="mailto:sfportalorders@strategicfactory.com">sfportalorders@strategicfactory.com</a>
     </p>
</div>
<script>

{/* Rob Carberry 2023 */}
{/* Since we are wrapping the item images, we need to customize the pdna set_preview_image function */}
function set_preview_image(elem, thumburl, largeurl) {
     // console.log('set_preview_image');
     var img = $(elem).parents('.image-row,.item-thumbnail').find('.image-container .imgwrap > a > img, .image-container .imgwrap > img');
     var a = $(elem).parents('.image-row,.item-thumbnail').find('.image-container .imgwrap > a');
     var imgbtn = $(elem).parents('.image-row').find('input[type="image"][src!="img/catalog_add.gif"]');
     var mobile_img = $(elem).parents('.detail_image_wrapper').find('#d_preview_image > img');
     if (img.length) {
          img.attr('src', thumburl);
     }
     else if (imgbtn.length) {
          imgbtn.attr('src', thumburl);
     }
     else if (mobile_img.length) {
          mobile_img.attr('src', thumburl);
     }
     if (a.length) {
          if (largeurl.startswith('img/')) {
               a.attr('href', largeurl);
          }
          else {
               a.attr('onclick', unescape(largeurl));
          }
     }
}

$(window).load(function () {

     // $('head').append('<link rel="icon" type="image/x-icon" href="con/favicon.ico">');
     $("#header-wrapper").wrap('<div id="header-wrapperBG">')
     $('head').append('<link rel="icon" href="con/Brooke-Grove-favicon.png" sizes="32x32" />')
     $('head').append('<link rel="icon" href="con/Brooke-Grove-favicon.png" sizes="192x192" />')
     $('head').append('<link rel="apple-touch-icon" href="con/Brooke-Grove-favicon.png" />')

     $('head').append('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=DM+Serif+Display&display=swap">');
     $( "link[href^='css/header.css']" ).removeAttr( "media" );
     
     $( ".header-links" ).find( "a" ).removeAttr( "style" );
     $( "#header_logo img.no_mobile" ).wrap( '<td id="desklogo"><div class="logolinkdiv"><a style="display: inline-block;" href="index.cgi">' );
     $( "#header_logo img.no_desktop" ).wrap( '<a style="display: inline-block;" href="index.cgi">' );

     $(".note:contains('Non-taxable items marked with *')").hide();
     $(".pagetitle:contains('Mailing List')").hide();
     $("div.error:contains('Incompatible Mail List or Delivery methods.')").each(function() {
          var errtxt = $(this).text().replace("Incompatible Mail List or Delivery methods.", "");
          $(this).text(errtxt);
     });
     
     $("table#billing-pricetable").find("td , th").each(function() {
          //$(this).css("text-align", "right");
          $(this).filter(":contains('*')").each(function() {
               var nostar = '';
               var nostar = $(this).html().replace("*", "");
               $(this).html(nostar);
          });
     });


     /****** Search Box ********/
     $("input#searchfield_input").wrap('<div class="input-wrapper">');
     $( '<label for="searchfield_input" class="fa fa fa-search"></label>' ).insertAfter("input#searchfield_input");
     /**************************/

     if($(window).width() >= 1025) {

          /************* My Account Menu *************/
          
          $( ".header-links a" ).wrapAll( '<div id="dropdown-contentdiv" class="dropdown-content"></div>  ' );
          $( ".dropdown-content" ).wrapAll( '<div id="dropdowndiv" class="dropdown"><span id="dropicon">My Account</span>' );
          $( ".dropdown-content" ).insertAfter( '#dropicon' );
          $( "a[href='basket_view.cgi'].no_mobile" ).insertBefore( "#dropdowndiv" );
          $( ".image-container img").css("max-height","max-content");
          $( "#dropdowndiv" ).insertBefore( 'table.header' );
          $( "#logout_userid" ).insertBefore( '.dropdown' );
          
          /*********** End My Account Menu ***********/

          $( "#desklogo" ).insertBefore(".header-links");


          /************* TopTabs *************/
          
          // $("div.responsive_tabs-shell").show();  /*** Only for testing; Show the old Tabs ***/
          // $(".tab_html_wrapper").show();  /*** Only for testing; Show the old Tabs ***/
          // $(".responsive_tabs-shell .before").show();  /*** Only for testing; Show the old Tabs ***/
          // $("div#basket-list-title").show();  /*** Only for testing; Show the old Tabs ***/



          $( "#header-wrapper" ).after('<div id="TabsDiv"><nav id="TabsNav"><ul id="TabsMenu">'); /** Create the top nav place holder **/
          var tabid = '';
          var appendid = '';
          $('#tab_responsive_tabs [id^="tab_"]').each(function() {
               /**** Top most tabs menu item ****/
               if ($("#TMul_" + $(this).attr("id")).length > 0 ) {return true;} /*** if it has already been created then skip to next ***/
               //console.log( "TOP - " + $(this).find("dfn").first().text() + " : " + $(this).attr("id") + " | " + $(this).find("dfn").length );
               appendid = 'TabsMenu';
               tabid = $(this).attr("id");
               if ($(this).find("dfn").length == 1) {
                    $("#" + appendid).append( '<li class="onlyli" id="TMli_' + tabid + '">' + $(this).find("dfn").first().html() + '</li>' ); /**** Top most menu link with no sub items ****/
               }else{
                    $("#" + appendid).append( '<li class="topli" id="TMli_' + tabid + '">' + $(this).find("dfn").first().text() + '<ul id="TMul_' + tabid + '"></ul></li>' ); /*Top most menu with sub items*/
               }
               /**** Sub tabs menu items ****/
               $(this).children().find('dfn').each(function () {
                    //console.log( "---- " + $(this).text() + " == " + $(this).parents('div [id^="tab_"]').parents('div [id^="tab_"]').attr("id") + " /// " + $(this).parents('div [id^="tab_"]').first().attr("id") + " || " + $(this).is(":last-child") );
                    if ($(this).is(":last-child")) {
                         appendid = 'TMul_' + $(this).parents('div [id^="tab_"]').first().attr("id");
                         tabid = $(this).parents('div [id^="tab_"]').parents('div [id^="tab_"]').attr("id");
                         if (tabid == 'tab_responsive_tabs') {tabid = 'TabsMenu';}
                         $("#" + appendid).append( '<li class="subtab">' + $(this).html() + '</li>' ); /**** All sub item links ****/
                    }else{
                         tabid = $(this).parents('div [id^="tab_"]').first().attr("id");
                         if (tabid == 'tab_responsive_tabs') {tabid = 'TabsMenu';}
                         appendid = 'TMul_' + $(this).parents('div [id^="tab_"]').parents('div [id^="tab_"]').attr("id");
                         $("#" + appendid).append( '<li class="subtopli" id="MMli_' + tabid + '">' + $(this).text() + '<ul id="TMul_' + tabid + '"></ul></li>' ); /**** Middle menu with sub items ****/
                    }
               });
          });

          // Division
          $( "input[name='corp_tag']" ).each(function() {
               console.log('Division:  ' + $(this).val());
               if ( $(this).val().toLowerCase() != "marketing" ) {
                    $('li.topli:contains("Marketing Materials")').hide();
               }
          });

          $( ".toptabs:contains('undefined')" ).hide();  /** if on a page that tabs are not exposed, hide the place holders. **/
          /********** End TopTabs ***********/

          /***************** TopTab Search items feature ****************/
          if ( $("a[href='basket_view.cgi'].no_mobile").length > 0 ) {
               $(".input-wrapper:has(#searchfield_input)").first().clone(true,true).insertAfter("a[href='basket_view.cgi'].no_mobile").attr("id", "Srch");
               $( "div#Srch input" ).keyup(function(event) {
                    //console.log(event.which);
                    $('.item-search-block input').val( $(this).val() );
                    if (event.which == 13) {
                         $("#submit_catalog_search").trigger("click");
                    }
               });
          }else{
               $(".input-wrapper:has(#searchfield_input)").first().clone(true,true).insertAfter( "#pageurl" ).attr("id", "Srch");
               $( "div#Srch input" ).keyup(function(event) {
                    //console.log(event.which);
                    $('.item-search-block input').val( $(this).val() );
                    if (event.which == 13) {
                         $("#submit_catalog_search").trigger("click");
                    }
               });
          }
          /*************** End TopTab Search items feature **************/

          if ( $( "input[name='tab']" ).val() ) {
               $("#copy5 span").text( $( "input[name='tab']" ).val().replace(/\|\|/g, ' - ') ); /** Set the catalog top left description **/
          }


          //$( "td#header_logo" ).css("display", "table-cell");

          /*********Cart/Basket table*********/
          $("table.items-table.true-table").find("th:nth-child(2)").removeClass("right").addClass("center");
          $("table.items-table.true-table").find("th:nth-child(3)").removeClass("right").addClass("center");
          $("table.items-table.true-table").find("td:nth-child(2)").removeClass("right").addClass("center");
          $("table.items-table.true-table").find("td:nth-child(3)").removeClass("right").addClass("center");
          
          // $("table.items-table.true-table").find("tr:contains('Same as above')").each(function () {
          // 	$(this).hide();
          // 	var cartcount = $("span.cart_num_items.no_mobile").html().replace("(","").replace(")","").trim();
          // 	cartcount -= 1;
          // 	$("span.cart_num_items.no_mobile").html(cartcount);
          // });
          /***********************************/

          /*********Shipping Table************/
          $("table#shipping-pricetable").find("th:nth-child(2)").removeClass("left").addClass("center");
          $("table#shipping-pricetable").find("th:nth-child(3)").removeClass("left").addClass("center");
          $("table#shipping-pricetable").find("th:nth-child(4)").removeClass("left").addClass("center");
          $("table#shipping-pricetable").find("th:nth-child(5)").removeClass("left").addClass("center");
          $("table#shipping-pricetable").find("td:nth-child(2)").removeClass("left").addClass("centerimp");
          $("table#shipping-pricetable").find("td:nth-child(3)").removeClass("left").addClass("centerimp");
          $("table#shipping-pricetable").find("td:nth-child(4)").removeClass("left").addClass("centerimp");
          $("table#shipping-pricetable").find("td:nth-child(5)").removeClass("left").addClass("centerimp");

          // $("table#shipping-pricetable").find("tr:contains('Same as above')").each(function () {
          // 	$(this).hide();
          // 	var cartcount = $("span.cart_num_items.no_mobile").html().replace("(","").replace(")","").trim();
          // 	cartcount -= 1;
          // 	$("span.cart_num_items.no_mobile").html(cartcount);
          // });
          /***********************************/
          
          /*********Billing Table************/
          $("table#billing-pricetable").find("td.input.right.totalinpcol").attr("colspan", "1");
          $('<td colspan="1" class="newtotalcol right">').insertBefore($("table#billing-pricetable").find("td.input.right.totalinpcol"));
          $('td.newtotalcol.right').html($("td.input.right.updatetotalcol").html());
          $("td.input.right.updatetotalcol").html("");
          //$("table#billing-pricetable").find("td.input.right.totalinpcol").removeClass("right").addClass("left");
          $("table#billing-pricetable").find("th:nth-child(1)").removeClass("left").addClass("center");
          //$("table#billing-pricetable").find("td:nth-child(1)").removeClass("left").addClass("center");
          // $('td:contains("UUG Paid")').attr('style', 'text-align: right !important; font-weight: bold;');

          // $("table#billing-pricetable").find("tr:contains('Spot UV (Included)')").each(function () {
          // 	$(this).hide();
          // 	var cartcount = $("span.cart_num_items.no_mobile").html().replace("(","").replace(")","").trim();
          // 	cartcount -= 1;
          // 	$("span.cart_num_items.no_mobile").html(cartcount);
          // });
          /***********************************/

          if($('.pagetitle').text().toUpperCase() === 'IN YOUR CART') {
               var cnt = 1;
               $('span.menu-knob').parents('tr').each(function() {
                    $( this ).attr('class', 'menu-knob_tr'+cnt);
                    $('<td class="cart_item"></td>').insertBefore(this);
                    $( this ).children('th').css('text-align', 'center')
                    cnt = cnt + 1;
               });
               cnt = 1;
               $('.previewcell').parents('tr').each(function() {
                    $( this ).attr('class', 'previewcell_tr'+cnt);
                    cnt = cnt + 1;
               });
               cnt = 1;
               $('.cart_item').each(function() {
                    var previewcell = $('.previewcell_tr'+cnt)
                    var menuknob = $('.menu-knob_tr'+cnt)
                    $(this).prepend(previewcell);
                    $(this).prepend(menuknob);
                    cnt = cnt + 1;
               });
               $('.cart_item').parents('table').css('text-align', 'center');
          }

          $(".basket-list-item").html(function() {
               var txt = '<div class="basket-text">' + this.innerText.trim() + '</div>';
               //console.log("|" + txt + "|");
               var butt = $(this).html();
               var buttend = butt.search(/<\/button>/);
               butt = '<div class="basket-butt">' + butt.substring(1, buttend) + '</button>' + '</div>';
               return butt + txt;
          });
          $('span.cart_num_items.no_mobile').each(function() {
               var cartcnt = $(this).text();
               cartcnt = cartcnt.replace("(", "").replace(")", "").trim();
               $(this).text(cartcnt);
               
          });
          $("span.cart_num_items.no_mobile").parent("a").wrap('<div class="carticon">');


          // ************ Size stretchy column items so all are top aligned and buttons are uniform *************
          
          // Wrap item imgs and thumbnails for sizing
          $('div.image-container:not(:has(>div.multi_preview)').append('<div class="multi_preview"></div>');
          $("div.image-container").find('img:first').each(function() {
               if ($(this).parent('a').length > 0) {
                    $(this).parent('a').wrap('<div class="imgwrap">')
               }else{
                    $(this).wrap('<div class="imgwrap">')
               }
          });

          // Set height of img wraps based on tallest img so items can be top aligned 
          var maxH = 0
          $('div.imgwrap').each(function() {
               if ($(this).height() > maxH) {maxH = $(this).height();}
          });
          if (maxH > 0) {maxH += 1;}
          maxH = maxH + "px";
          $('div.imgwrap').css('min-height', maxH); /* set all the wrapped heights to the tallest img height */
          
          // If multi-page img thumbs exist set that area height the same for all items
          maxH = 0
          $('div.multi_preview').each(function() {
               if ($(this).height() > maxH) {maxH = $(this).height();}
          });
          if (maxH > 0) {maxH += 1;}
          maxH = maxH + "px";
          $('div.multi_preview').css('min-height', maxH);

          // If Responsive Longname exist set that area height the same for all items
          maxH = 0
          $('div.responsive-longname').each(function() {
               if ($(this).height() > maxH) {maxH = $(this).height();}
          });
          if (maxH > 0) {maxH += 1;}
          maxH = maxH + "px";
          $('div.responsive-longname').css('min-height', maxH);

          // If .responsive-choose-info exist set that area height the same for all items
          maxH = 0
          $('div.responsive-choose-info').each(function() {
               if ($(this).height() > maxH) {maxH = $(this).height();}
          });
          if (maxH > 0) {maxH += 1;}
          maxH = maxH + "px";
          $('div.responsive-choose-info').css('min-height', maxH);

          // If .note.responsive-pricing exist set that area height the same for all items
          maxH = 0
          $('div.note.responsive-pricing').each(function() {
               if ($(this).height() > maxH) {maxH = $(this).height();}
          });
          if (maxH > 0) {maxH += 1;}
          maxH = maxH + "px";
          $('div.note.responsive-pricing').css('min-height', maxH);

          // If onhand exist set that area height the same for all items
          maxH = 0
          $('div.note.responsive-onhand').each(function() {
               if ($(this).height() > maxH) {maxH = $(this).height();}
          });
          if (maxH > 0) {maxH += 1;}
          maxH = maxH + "px";
          $('div.note.responsive-onhand').css('min-height', maxH);
          
          // If responsive-tagcheck.tagcheck-bottom exist set that area height the same for all items
          maxH = 0
          $('span.responsive-tagcheck.tagcheck-bottom').each(function() {
               if ($(this).height() > maxH) {maxH = $(this).height();}
          });
          if (maxH > 0) {maxH += 1;}
          maxH = maxH + "px";
          $('span.responsive-tagcheck.tagcheck-bottom').css('min-height', maxH);
     
          // If div.image-container exist set that area height the same for all items
          maxH = 0
          $("div.image-container").each(function() {
               if ($(this).height() > maxH) {maxH = $(this).height();}
          });
          if (maxH > 0) {maxH += 1;}
          maxH = maxH + "px";
          $("div.image-container").css('min-height', maxH);
     
          // *****************************************************************************************
     }
     
     if( $('.stretchy_cols').length == 1) {$('.stretchy_cols').addClass("singleItemCenter");}
     if( $('.basket-list-item').length >= 1) {$('#basket-list-title').show();}
     
     $('.header-links').attr('style', 'display: revert !important');

     /********* Hide FAQ Holders & Place Holders **********/
     $('div.height-adjuster').has('div.responsive-longname:contains("FAQ-HOLDER")').wrap( '<div class="hideit" style="display: none !important;">' );
     $('div.height-adjuster').has('div.responsive-longname:contains("PLACE-HOLDER")').wrap( '<div class="hideit" style="display: none !important;">' );

});

$(document).ready(function () {
     if($('.pagetitle').text().toUpperCase() === 'IN YOUR CART') {
          $(".buttonsbar").find("button:nth-child(4)").hide(); /**** Check to see if in basketview and hide extra checkout button ********/
     }
     //$( "#shipmeth-info" ).hide();
     
     /** -None are blank addresses to make sure it clears the fields.  Hide it from the shipping page **/
     if($('#ship_office').find('option[value="-None"]').length > 0) {$('#ship_office').find('option[value="-None"]').remove();} 
     
     $('div.note:contains("(optional)")').hide();  /** remove (optional) blurb **/

     /********** Only show Cancel Order button when items are in the cart ***********/
     if( $(".item_count").text() > 0) {
          $("button#submit_cancel").has("span:contains('Cancel Order')").show();
     } else{
          $("button#submit_cancel").has("span:contains('Cancel Order')").hide();
     }	
});

</script>
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
