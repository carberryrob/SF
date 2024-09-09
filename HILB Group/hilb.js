<!-- Rob Carberry Updated 8/20/2024 -->
<!-- Rob Carberry 5/31/2024 -->
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

<script src="con/jquery.initialize.min.js" type="text/javascript"></script>

<script type="text/javascript">
{/* Rob Carberry 2024 */}
{/* Since we are wrapping the item images, we need to customize the pdna set_preview_image function */}
function set_preview_image(elem, thumburl, largeurl) {
     // console.log( $(elem).parent().find('a').index($(elem)) );
     var idx = $(elem).parent().find('a').index($(elem));
     var img = $(elem).parents('.image-row,.item-thumbnail').find('.image-container .imgwrap > a > img, .image-container .imgwrap > img, .image-container .imgwrap > label > img');
     var a = $(elem).parents('.image-row,.item-thumbnail').find('.image-container .imgwrap > a');
     var imgbtn = $(elem).parents('.image-row').find('input[type="image"][src!="img/catalog_add.gif"]');
     var mobile_img = $(elem).parents('.detail_image_wrapper').find('#d_preview_image > img');

     // console.log(thumburl + ' :|: ' + largeurl);

     if (img.length) {
          thumburl = largeurl
          img.attr('src', thumburl);
     }
     else if (imgbtn.length) {
          thumburl = largeurl
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
               // a.attr('href', largeurl);
          }
     }
     // When clicking/changing Thumbnail images on Apparel, change the dropdown as well.
     var colorselect = $(elem).closest('.stretchy_cols.responsive-item.image-row').find('.colorselect');
     if ($(colorselect).length > 0) {
          $(colorselect).prop('selectedIndex', idx);
     }
}

function WidthAdjuster(){
     //Scale window to fit based on the item widths
     if ($('#all_items_view').hasClass('all-items-hide')){
          return;
     }
     var w = $(window).width(),
          // 'p' is used to prevent the all_items_view from wrapping
          //  to a new line when the window is around 1030px
          p = 1,
          // p = 1,
          t = $('.responsive_tabs-shell').width(),
          n = 0;
          if (t < 10) {t = 0}
     n = 100 - ((t/w) * 100) - p;
     $('#all_items_view').css({
          'float': 'right',
          'width': n+'%'
     });
}
$.fn.ensureVisible = function () { 
     //Function to scroll zoomed image into view if once zoomed it moves off the viewport
     $(this).each(function () { $(this)[0].scrollIntoView(); }); 
};

function AdjustForIMG(elem){
     //Function to adjust the page size to fit a zoomed image then scroll it into view
     if ($(elem).closest('.imgwrap').find('input[type=checkbox].zoomCheck').is(':checked')){
          var ofs = $(elem).offset();
          var oh = $(elem).outerHeight();
          var ow = $(elem).outerWidth();
          // console.log(ofs)
          // console.log($(elem).closest('.imgwrap').find('input[type=checkbox].zoomCheck').is(':checked'));
          var mb = parseInt($("#copy5").css("margin-bottom").replace("px", ""));
          while (ofs.top < 0){
               mb += 1;
               // console.log(mb);
               $("#copy5").css("margin-bottom", mb + "px");
               ofs = $(elem).offset();
          }
          ofs = $(elem).offset();
          var alli = $("div#all_items_view").width();
          while (ofs.left < 0) {
               alli -= 1
               $("div#all_items_view").width(alli);
               ofs = $(elem).offset();
          }
          // $(elem).ensureVisible();
          var topPos = ofs.top - $(window).scrollTop();
          var rightPos = $(elem)[0].getBoundingClientRect().right  + $(window)['scrollLeft']();
          var mp = $(elem).parents('.image-container').find('.multi_preview');
          var bottomPos = $(mp)[0].getBoundingClientRect().bottom + $(window)['scrollTop']();
          // console.log( topPos + " | " + bottomPos + " | " + $(window)['scrollTop']() + " | " + $(window).height() + " | " + ((bottomPos-$(window)['scrollTop']()) >= $(window).height()) );
          if ((rightPos > $(window).width()) || (topPos < 0) || ((bottomPos-$(window)['scrollTop']()) > $(window).height())){$(elem).ensureVisible();}
     }
}

function GetNextGangDate(OrderDate){
     // Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6, Sun=7
     var d = new Date(OrderDate);
     var targetDay = 3; // Wed
     if (d.getDay() >=3 && d.getDay()<=4) {
          targetDay = 5; // Fri
     }
     d.setDate(d.getDate() + (((targetDay + 7 - d.getDay()) % 7) || 7));
     return d
}


$(window).load(function () {

     // Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6, Sun=7
     // var d = new Date();
     // const targetDay = 4; // Thursday
     // d.setDate(d.getDate() + (((1 + 7 - d.getDay()) % 7) || 7));
     // d.setDate(d.getDate() + (((targetDay + 7 - d.getDay()) % 7) || 7));
     console.log(GetNextGangDate('5/10/2024'));


     $('head').append('<link rel="icon" href="con/cropped-Favicon-e1556906063867-32x32.png" sizes="32x32" />')
     $('head').append('<link rel="icon" href="con/cropped-Favicon-e1556906063867-192x192.png" sizes="192x192" />')
     $('head').append('<link rel="apple-touch-icon" href="con/cropped-Favicon-e1556906063867-180x180.png" />')
     $('head').append('<meta name="msapplication-TileImage" content="con5/cropped-Favicon-e1556906063867-270x270.png" />')


     // $('head').append('<link rel="icon" type="image/x-icon" href="con/favicon.ico">');
     // $('head').append('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=DM+Serif+Display&display=swap">');
     $( "link[href^='css/header.css']" ).removeAttr( "media" );

     $( ".header-links" ).find( "a" ).removeAttr( "style" );

     // $( "#header_logo img.no_mobile" ).wrap( '<td id="desklogo"><div class="logolinkdiv"><a style="display: inline-block;" href="index.cgi">' );
     // $( "#header_logo img.no_desktop" ).wrap( '<a style="display: inline-block;" href="index.cgi">' );

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


     if($(window).width() >= 1025) {


          /*********Cart/Basket table*********/
          $("table.items-table.true-table").find("th:nth-child(2)").removeClass("right").addClass("center");
          $("table.items-table.true-table").find("th:nth-child(3)").removeClass("right").addClass("center");
          $("table.items-table.true-table").find("td:nth-child(2)").removeClass("right").addClass("center");
          $("table.items-table.true-table").find("td:nth-child(3)").removeClass("right").addClass("center");

          // $("table.items-table.true-table").find("th:nth-child(2)").hide();
          // $("table.items-table.true-table").find("th:nth-child(3)").hide();
          // $("table.items-table.true-table").find("td:nth-child(2)").hide();
          // $("table.items-table.true-table").find("td:nth-child(3)").hide();
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
          /***********************************/
          
          /*********Billing Table************/
          $("table#billing-pricetable").find("td.input.right.totalinpcol").attr("colspan", "1");
          $('<td colspan="1" class="newtotalcol right">').insertBefore($("table#billing-pricetable").find("td.input.right.totalinpcol"));
          $('td.newtotalcol.right').html($("td.input.right.updatetotalcol").html());
          $("td.input.right.updatetotalcol").html("");
          //$("table#billing-pricetable").find("td.input.right.totalinpcol").removeClass("right").addClass("left");
          $("table#billing-pricetable").find("th:nth-child(1)").removeClass("left").addClass("center");
          //$("table#billing-pricetable").find("td:nth-child(1)").removeClass("left").addClass("center");
          $('td:contains("UUG Paid")').attr('style', 'text-align: right !important; font-weight: bold;');
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
               // $('.cart_item').parents('table').css({'text-align': 'center','overflow': 'scroll','display': 'block','width': '100%'});
               
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


          // Handle zoom for images. *********************************************************************
          if ( $( "input[name='tab']" ).length > 0 ) {
               if ( $( "input[name='tab']" ).val().toLowerCase().indexOf("ms word templates") < 0) {
                    $(".image-container img").not("img.catalog-tiny-thumbnail").each(function() {
                         if ($(this).parent().prop('nodeName') == 'A') {  
                              $(this).unwrap();
                              // return
                              // if its a link then just unwrap the img to remove the link
                         }else{
                              // if it's a kit then create a new image and add it to the DOM, and remove the original so it doesn't use ng-click.
                              var source = $(this).attr('src'); //get img source for new img
                              var alt = $(this).attr('alt'); //get img alt text for new img
                              $(this).parent().prepend('<img alt="' + alt + '" src = "' + source + '">'); // add img to DOM at .img-container
                              $(this).remove(); // remove orginal img that was using ng-click.
                         }
                    });
                    // console.log($('.imgwrap > img').length);
                    x=0

                    $(".image-container img").not("img.catalog-tiny-thumbnail").on('load', function () {
                         // console.log('** img load')
                         AdjustForIMG(this);
                    });

                    $('.imgwrap > img').each(function() {
                         x += 1
                         $(this).on('transitionend webkitTransitionEnd oTransitionEnd', function () {
                              AdjustForIMG($(this));
                              // console.log('img transition end');
                         });
                         $(this).wrap('<label for="zoomCheck' + x + '">');
                         $(this).parents('.imgwrap').prepend('<input type="checkbox" id="zoomCheck' + x + '" class="zoomCheck">');

                    });

                    $('input[type=checkbox].zoomCheck').change(function() {
                         if(this.checked) {
                              var thisid = $(this).attr('id');
                              // console.log(thisid);
                              $('input[type=checkbox].zoomCheck:checked').each(function() {
                                   if ($(this).attr('id') != thisid) {
                                        $(this).prop('checked', false); // Unchecks all others that are checked.
                                   }
                              });
                         }else{
                              $("#copy5").css("margin-bottom", "0px");
                              WidthAdjuster();
                         }
                    });
               }
          }
          // *********************************************************************************************
          


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
          // console.log('1: ' + maxH);
          if (maxH > 0) {maxH += 1;}
          // console.log('2: ' + maxH);
          maxH = maxH + "px";
          $('div.note.responsive-onhand').css('min-height', maxH);
          
          // If responsive-tagcheck.tagcheck-bottom exist set that area height the same for all items
          maxH = 0
          $('span.responsive-tagcheck.tagcheck-bottom').each(function() {
               if ($(this).height() > maxH) {maxH = $(this).height();}
          });
          // console.log('1: ' + maxH);
          if (maxH > 0) {maxH += 1;}
          // console.log('2: ' + maxH);
          maxH = maxH + "px";
          $('span.responsive-tagcheck.tagcheck-bottom').css('min-height', maxH);

          // If div.image-container exist set that area height the same for all items
          maxH = 0
          $("div.image-container").each(function() {
               if ($(this).height() > maxH) {maxH = $(this).height();}
          });
          // console.log('1: ' + maxH);
          if (maxH > 0) {maxH += 1;}
          // console.log('2: ' + maxH);
          maxH = maxH + "px";
          $("div.image-container").css('min-height', maxH);

          // *****************************************************************************************

          WidthAdjuster();


     }

     if( $('.stretchy_cols').length == 1) {$('.stretchy_cols').addClass("singleItemCenter");}
     if( $('.basket-list-item').length >= 1) {$('#basket-list-title').show();}

     $('.header-links').attr('style', 'display: revert !important');

     // $('td.input:has(input[name="new_HILB-Benefit_Guides_mailing_1_qty"][type="number"])').parent('tr').hide();
     $('td.input:has(input[name="new_HILB-Benefit_Guides_mailing_1_qty"][type="number"])').each(function() {
          $(this).parent('tr').hide();
          $('tr#total_block').hide();
     });
     $('td.input:has(input[name="new_HILB-Benefit_Guides_distribution_1_qty"][type="number"])').each(function() {
          $(this).parent('tr').hide();
          $('tr#total_block').hide();
     });

});

$(document).ready(function () {

     $.initialize("div.estimate-total", function() {
          // console.log('**************************************' + $(this).text());
          var errtxt = $(this).text().replace("Note: Quote options problem: ", "");
          $(this).text(errtxt);
     });

     

     /********* Hide FAQ Holders & Place Holders **********/
     $('div.stretchy_cols').has('div.responsive-longname:contains("FAQ-HOLDER")').wrap( '<div class="hideit" style="display: none !important;">' );
     $('div.stretchy_cols').has('div.responsive-longname:contains("PLACE-HOLDER")').wrap( '<div class="hideit" style="display: none !important;">' );

     $( "#header_logo img.no_mobile" ).wrap( '<td id="desklogo"><div class="logolinkdiv"><a style="display: inline-block;" href="index.cgi">' );
     $( "#header_logo img.no_desktop" ).wrap( '<a style="display: inline-block;" href="index.cgi">' );

     if($('.pagetitle').text().toUpperCase() === 'IN YOUR CART') {
          // $(".buttonsbar").find("button:nth-child(4)").hide(); /**** Check to see if in basketview and hide extra checkout button ********/
     }

     // *********************************************************************************************************************************************************************
     // Adds Save Cart button to Basket pge, and Shipping page
     $('form[action="item_form.cgi"]').each(function() {
          $('<button type="button" class="button" id="button_save_order" onclick="return disable_buttons(this,\'button[data-disableable=1]\', {callback:function(btn){btn.form.action=\'save_basket.cgi\';btn.form.submit()}});" data-disableable="1" name="save_basket" value="1"><span class="ic-msg" id="BasketPlugin.SAVE_ORDER_BUTTON_TEXT">Save This Cart</span></button>').insertBefore($(".buttonsbar").find("button:nth-of-type(2)"));
     });
     $('form[action="bill.cgi"]').each(function() {
          $('<button type="button" class="button" id="button_save_order" onclick="return disable_buttons(this,\'button[data-disableable=1]\', {callback:function(btn){btn.form.action=\'save_basket.cgi\';btn.form.submit()}});" data-disableable="1" name="save_basket" value="1"><span class="ic-msg" id="BasketPlugin.SAVE_ORDER_BUTTON_TEXT">Save This Cart</span></button>').insertBefore($(".buttonsbar").find("button:nth-of-type(2)"));
     });
     // *********************************************************************************************************************************************************************

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

     // console.log( '******************************************************' + $('table#estimate-item-container .form-body input[type="text"]').filter(':visible').length )
     $('table#estimate-item-container .form-body input[type="text"]').filter(':visible').each(function() {
          // console.log('******************************************************table#estimate-item-container .form-body input[type="text"]');
          var nme = 'new_' + $(this).attr('name'); //get name for new input
          var v = $(this).val(); //get name for new input
          $(this).parent().prepend('<input name="' + nme + '" type="number" required value="'+ v + '" min="0">'); // add input to DOM with listener
          // $(this).remove(); // remove orginal input that was type="text".
          $(this).hide(); // remove orginal input that was type="text".

     });

     const numInputs = document.querySelectorAll('input[type=number]')

     numInputs.forEach(function(input) {
          input.addEventListener('change', function(e) {
               if (e.target.value == '' || e.target.value <= 0) {
               e.target.value = 0
               }
               console.log(e.target.name);
               var nme = e.target.name;
               nme = nme.split("new_")[1];
               var v = e.target.value
               $('table#estimate-item-container .form-body input[type="text"][name="' + nme + '"]').val(v).change();
          })
     })

     $("input.noclear.sbs_update_field").attr( "autocomplete", "new-password" );

     if ($(window).width() >= 1025) {
          
          // $("#cost_options\\.quantity").closest('tr').hide();
          // The above hides the estimate qty
          
          /************* My Account Menu *************/
          
          $( ".header-links a" ).wrapAll( '<div id="dropdown-contentdiv" class="dropdown-content"></div>  ' );
          $( ".dropdown-content" ).wrapAll( '<div id="dropdowndiv" class="dropdown"><span id="dropicon">My Account</span>' );
          $( ".dropdown-content" ).insertAfter( '#dropicon' );
          $( "a[href='basket_view.cgi'].no_mobile" ).insertBefore( "#dropdowndiv" );
          $( ".image-container img").css("max-height","max-content");
          // $( "#dropdowndiv" ).insertBefore( 'table.header' );
          $( "div#header-wrapper" ).prepend( $("#dropdowndiv") );
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
          // Hide "LandingPage" tab
          $( "li.onlyli:contains('LandingPage')" ).css( "display", "none" );

          $( ".toptabs:contains('undefined')" ).hide();  /** if on a page that tabs are not exposed, hide the place holders. **/
          /********** End TopTabs ***********/

          /***************** TopTab Search items feature ****************/
          /****** Move Search Box ********/
          $("input#searchfield_input").wrap('<div class="input-wrapper">');
          $( '<label for="searchfield_input" class="fa fa fa-search"></label>' ).insertAfter("input#searchfield_input");
          /**************************/

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


     }
});

</script>
<script type="text/javascript" defer>
/********** Enable/Disable "Submit Order" button based on approval *****************************************************/
$(document).ready(function () {
     if ($("select[name='bill_code10']").val() == "No") {
          $("button#submit_send_order").prop('disabled', 'disabled');
     }
     // console.log($("select[name='bill_code10']").val());
     $('form[action="accept_bill.cgi"]').change(function() {
          if ($("select[name='bill_code10']").val() == "No") {$("button#submit_send_order").prop('disabled', 'disabled');}
          if ($("select[name='bill_code10']").val() == "Yes") {$("button#submit_send_order").prop('disabled', false);}
          console.log($("select[name='bill_code10']").val());
          //if ( $('select#ship_office').val() == '1 - Will Call at Strategic Factory in Owings Mills') {$("span#willcalltxt").show();}
     });

     //********** Move approval yes/no to just above "Submit Order"*******************
     $("tr:contains('I have verified and approve this order:')").appendTo($("p.approve_order").parents("tr").parent());
     //*******************************************************************************
});
/***********************************************************************************************************************/
</script>

<script type="text/javascript" defer>
{/* Rob Carberry - So we can customize the pdna itemWidthAdjuster function we add the code from responsive_catalog.js so we can alter the function */}
$(document).ready(function(){
     if ($(window).width() >= 1025) {
          // return;
          // bugfix var for iOS
          var loadedWidth = $(window).width();

          windowSansScrollBars = 535;

          ///////////////////////////////////////////////
          // Set up Variables
          ///////////////////////////////////////////////

          var searchNavBar = $('.before'),
               tabList = $('#tab_responsive_tabs'),
               onsAndOffs = $('div.on, div.off, dfn.on, dfn.off'),
               navTabs = $('#navTabs'),
               mainSection = $('.main-section'),
               allItems = $('#all_items_view'),
               itemDetails = $('#item_details_view'),
               tabCloser = $('#mobile_tab_closer'),
               tabExiter = $('.exit_overlay'),
               tabShell = $('.responsive_tabs-shell'),
               searchButton = $('#submit_catalog_search'),
               oldSearchBtnHtml = searchButton.html(),
               tabDivs = $('.responsive_tabs div[id^="tab_"]'),
               tabOnDiv = $('.responsive_tabs div.on'),
               heightAdjuster = $('.height-adjuster'),
               loadedStretchyColHeight = $('.stretchy_cols').css('height'),
               footer = $('.footer');


          ///////////////////////////////////////////////
          // Set up Functions
          ///////////////////////////////////////////////

          // Remove style attr of element if it exists
          function killStyleAttr (elm) {
               // console.log('killStyleAttr');
               if (elm.attr('style')) {
                    elm.removeAttr('style');
               }
          }

          // Scale window to fit based on the item widths
          function itemWidthAdjuster(){
               // console.log('itemWidthAdjuster')
               if (allItems.hasClass('all-items-hide')){
                    return;
               }
               var w = $(window).width(),
                    // 'p' is used to prevent the all_items_view from wrapping
                    //   to a new line when the window is around 1030px
                    // p = 5,
                    p = 1,
                    t = tabShell.width(),
                    n = 0;
                    if (t < 10) {t = 0}
               n = 100 - ((t/w) * 100) - p;

               allItems.css({
                    'float': 'right',
                    'width': n+'%'
               });
          }

          // On page load, call different height adjusters
          function initialAdjuster (selector) {
               // console.log('initialAdjuster');
               if ($(window).outerWidth() >= windowSansScrollBars) {
                    killStyleAttr(selector);
                    itemScaler(selector, 2);
               }
               else if ($(window).outerWidth() < windowSansScrollBars) {
                    // Kill the itemScaler stuff here too on resize
                    killStyleAttr(selector);
                    itemScaler(selector, 1);
               }
          }

          // Get items to fit within cells better, bottom aligned

          function itemScaler (selector, rows) {
               // console.log('itemScaler');
               selector.each(function() {
                    var tempHeight = $(this).height(),
                         tempParentHeight = $(this).parent().outerHeight();
                    if (tempHeight <= tempParentHeight){
                         killStyleAttr($(this).parent());
                         if (rows == 2) {
                              $(this).css('margin-top', tempParentHeight - tempHeight);
                              singleItemCenter();
                         }
                         else if (rows == 1) {
                              // this is affecting the stretchy_cols class
                              $(this).parent().css({
                                   'min-height': tempHeight,
                                   'max-height': tempHeight,
                                   'height': tempHeight,
                              });
                         }
                    }
               });
          }

          // if there is only one item, center it.
          function singleItemCenter() {
               // console.log('singleItemCenter');
               if( $('.stretchy_cols').length < 2) {
                    $('.stretchy_cols').css({
                         'min-width': '100%',
                         'max-width': '100%',
                         'width': '100%'
                    });
               }
          }

          // Hide / Show logic for Tabs
          function tabHandler(action) {
               // console.log('tabHandler');
               var openTabs = false;
               if (!action){return;}
               if (action == 'open') {
                    tabExiter.addClass('visible');  // add fake area for clicking out of tabs
                    tabDivs.addClass('temphide');
                    onsAndOffs.hide();
                    tabList.animate({
                    width:'toggle'
                    },300).promise().done(function(){
                    tabDivs.removeClass('temphide');
                    onsAndOffs.fadeIn(100);
                    killStyleAttr(tabOnDiv);
                    $('body, html').css('overflow','hidden');
                    });
                    mainSection.add(searchNavBar).css('pointer-events', 'none');
                    openTabs = true;
                    itemWidthAdjuster();
               }
               else if (action == 'close') {
                    tabExiter.removeClass('visible');
                    tabDivs.addClass('temphide');
                    onsAndOffs.fadeOut(100);
                    tabList.animate({width:'toggle'}, 300).promise().done(function(){
                    tabDivs.removeClass('temphide');
                    $('body, html').css('overflow','visible');
                    });
                    openTabs = false;
                    mainSection.add(searchNavBar).css('pointer-events', 'auto');
                    itemWidthAdjuster();
               }
          }

          // Scale the height of main class to be that of the items within it + 50 for spacing
          function pageScaler () {
               // console.log('pageScaler');
               // return;
               var hiddenFooter = 0,
                    timeVar = 0;
               if (allItems.hasClass('all-items-hide')){
                    return;
               }
               if(footer.css('display') != 'none') {
                    // If there is a footer on the page, hide it, wait for page to be drawn, then show footer
                    // This was the result of another hyper-urgent Costco demand....
                    footer.hide();
                    hiddenFooter = 1;
                    // timeVar = 1000;
                    timeVar = 1;
               }
               setTimeout(function () {
                    var taller = Math.max(tabShell.outerHeight(), allItems.outerHeight());
                    if (window.innerWidth > RESPONSIVE.max()) {
                    taller += $('#copy2').outerHeight();
                    taller += $('#copy3').outerHeight();
                    taller += $('#copy4').outerHeight();
                    taller += $('#copy5').outerHeight();
                    taller += $('.pagetitle.no_mobile').outerHeight();
                    }
                    $('.select-items, .catalog, form').animate({height:(taller + 50)},3);
                    if (hiddenFooter == 1) {
                         footer.fadeIn();
                    }
               }, timeVar);
          }


          ///////////////////////////////////////////////
          // Set up Media Query
          /////////////////////////////////////////////////
          if (matchMedia) {
               mq = matchMedia("(max-width: " + RESPONSIVE.max() + "px)");
               mq.addListener(catalogWidthChange);
               catalogWidthChange(mq);
          }

          //////////////////////////////////////////////////
          // Set up Changer for mobile vs non-mobile
          //////////////////////////////////////////////////
          function catalogWidthChange(mq) {
               // console.log('catalogWidthChange');
               //////////////////////////////////////////////////
               // WE ARE IN MOBILE VIEW HERE....
               //////////////////////////////////////////////////
               if (mq.matches) {

                    $('.detail_closer').click();  // close details so item grid works

                    tabList.hide();
                    navTabs.add(tabCloser).show();

                    // Show magnifying glass in search
                    searchButton.html('<i class="fa fa-search"> </i>');

                    // trying this for use with footnote, may need revisiting if this doesn't work
                    $(window).on('load',function(){
                         pageScaler();
                    });

                    // stop floating allItems once in mobile
                    $(window).resize(function() {
                         // console.log('resize triggered1');
                         if (itemDetails.css('display') != 'none'){
                              return;
                         }
                         if ($(window).width() != loadedWidth) {
                              killStyleAttr(allItems);
                              pageScaler();
                         }
                         // console.log('resize finished1');
                    });

                    // As the window resizes, call different height adjusters
                    $(window).resize(function() {
                         // console.log('resize triggered2');
                         if (itemDetails.css('display') != 'none'){
                              return;
                         }
                         if ($(window).width() != loadedWidth) {
                              if ($(window).outerWidth() >= windowSansScrollBars) {
                                   killStyleAttr(heightAdjuster);
                                   itemScaler(heightAdjuster, 2);
                              }
                              else if ($(window).outerWidth() < windowSansScrollBars) {
                                   // Kill the itemScaler stuff here too on resize
                                   killStyleAttr(heightAdjuster);
                                   itemScaler(heightAdjuster, 1);
                              }
                         }
                         // console.log('resize finished2');
                    });

                    singleItemCenter();

                    navTabs.on('click', function(){tabHandler('open');});
                    tabCloser.on('click', function(){tabHandler('close');});
                    tabExiter.on('click', function(){
                         if ($('#mobile_link_box').css('display') != 'block') {
                              tabHandler('close'); // close tabs if links aren't showing
                         }
                    });

                    $(window).on('load',function(){initialAdjuster(heightAdjuster);});

               }

               //////////////////////////////////////////////////
               // WE ARE NOT IN MOBILE VIEW HERE....
               //////////////////////////////////////////////////
               else {

                    $('.detail_closer').click();  // close details so item grid works

                    navTabs.add(tabCloser).hide();
                    tabList.show();

                    singleItemCenter();

                    searchButton.html(oldSearchBtnHtml);

                    // runtime adjustment:
                    itemWidthAdjuster();

                    $(window).on('load',function(){
                    initialAdjuster(heightAdjuster);
                    pageScaler();
                    });

                    // resizing adjustment
                    $(window).resize(function() {
                         // console.log('resize triggered3');
                         if (itemDetails.css('display') != 'none'){
                              return;
                         }
                         if ($(window).width() < (parseInt(RESPONSIVE.min(), 10) - RESPONSIVE.scrollbars())) {
                              return;  //this is necessary despite the WidthChange context here...
                         }
                         itemWidthAdjuster();
                         WidthAdjuster();
                         pageScaler();

                         // let's be sure the item is not obscured by a short stretchy_col
                         // AND let's make all stretchy_cols on the page the same height
                         var tall = loadedStretchyColHeight,
                              safetyPadding = 10,
                              tallest;
                         heightAdjuster.each(function() {
                              // loop over height-adjuster cells and get the max height
                              if ($(this).height() > $(this).parent().height()) {
                                   var taller = Math.max(tall, $(this).height()) + safetyPadding;
                                   tallest = Math.max(tall, tallest);
                              }else {
                                   return;
                              }
                         });
                         // now set the parent height on all height-adjusters to this calculated height
                         heightAdjuster.parent().css({
                              'min-height': tallest,
                              'max-height': tallest,
                              'height': tallest,
                         });
                         // console.log('resize end3');
                    });

                    // Kill the itemScaler stuff
                    killStyleAttr(heightAdjuster);

                    // show tabs again in case we hid them in mobile then went back to desktop
                    if (onsAndOffs.attr('style')) {onsAndOffs.removeAttr('style');}

                    // reset pointer events to be safe
                    mainSection.add(searchNavBar).css('pointer-events', 'auto');

                    // unbind all click events so they start fresh if window shrinks back down
                    navTabs.add(tabCloser).add(tabExiter).unbind("click");

                    tabExiter.removeClass('visible');

                    // in case someone opened tabs, didn't close them, and increased window size
                    $('body, html').css('overflow','visible');

               } // end else for mq.matches

          } // end WidthChange function


          //////////////////////////////////////////////////
          // After all our magic is done - let the user see
          //////////////////////////////////////////////////
          var throbOverlay = $('#ajax_throbber_overlay');
          throbOverlay.show();
          $('body').animate({scrollTop: 0}, 200);
          $(window).on('load',function() {

               $('body').css('opacity', '1');

               if ($.active > 0) {
                    $(document).ajaxComplete(function(){
                    throbOverlay.animate({
                         opacity: 0,
                         duration: 1000,
                    }).promise().done(function(){
                         throbOverlay.hide();
                         });
                    });
               }
               else {
                    // no ajax, no throbber
                    throbOverlay.hide();
               }

          });
     }
});	
</script>
