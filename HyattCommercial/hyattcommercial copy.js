<!-- Rob Carberry 10/1/2025 -->
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
    
    
        $('head').append('<link rel="icon" href="con/cropped-Everstand-Icon-192x192.png" sizes="32x32" />')
        $('head').append('<link rel="icon" href="con/cropped-Everstand-Icon-192x192.png" sizes="192x192" />')
        $('head').append('<link rel="apple-touch-icon" href="con/cropped-Everstand-Icon-180x180.png" />')

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
                if ($(this).height() > maxH) {maxH = $(this).height();}});
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
    });
    
    $(document).ready(function () {
    
        /********* Hide FAQ Holders & Place Holders **********/
        $('div.stretchy_cols').has('div.responsive-longname:contains("FAQ-HOLDER")').wrap( '<div class="hideit" style="display: none !important;">' );
        $('div.stretchy_cols').has('div.responsive-longname:contains("PLACE-HOLDER")').wrap( '<div class="hideit" style="display: none !important;">' );
    
        $( "#header_logo img.no_mobile" ).wrap( '<td id="desklogo"><div class="logolinkdiv"><a style="display: inline-block;" href="index.cgi">' );
        $( "#header_logo img.no_desktop" ).wrap( '<a style="display: inline-block;" href="index.cgi">' );
    
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
            
            // Give color dropdowns a class to call later.
            $('.the_actual_qty_select').find('select:first').each(function() {
                    $(this).addClass('colorselect');
            });
            
            // Apparel- When changing a color from a dropdown make the large image that color by code clicking the corresponding thumbnail.
            if ( $('.colorselect').length > 0 ) {
                    $('.colorselect').change(function() {
                        var idx = $(this).prop('selectedIndex');
                        var prnt = $(this).closest('.stretchy_cols.responsive-item.image-row');
                        $(prnt).find('.multi_preview a').eq(idx).trigger( "click" );
                    });
            }
    
            // $("#cost_options\\.quantity").closest('tr').hide();
            // The above hides the estimate qty
            
            /************* My Account Menu *************/
            
            $( ".header-links a" ).wrapAll( '<div id="dropdown-contentdiv" class="dropdown-content"></div> ' );
            $( ".dropdown-content" ).wrapAll( '<div id="dropdowndiv" class="dropdown"><span id="dropicon">MY ACCOUNT</span>' );
            $( ".dropdown-content" ).insertAfter( '#dropicon' );
            $( "a[href='basket_view.cgi'].no_mobile" ).insertBefore( "#dropdowndiv" );
            $( ".image-container img").css("max-height","max-content");
            // $( "#dropdowndiv" ).insertBefore( 'table.header' );
            $( "div#header-wrapper" ).prepend( $("#dropdowndiv") );
            $( "#logout_userid" ).insertAfter( '.dropdown' );
            
            
            // Jake Boyd 
            // This section of code moves the budget information of the website into the account dropdown menu.
            if (!window.location.pathname.endsWith('/logout.cgi')) {
                    $('.full').children().appendTo('#dropdown-contentdiv').each(function() {

                        if($(this).text() === 'No Budget Remaining at this time'){
                            $(this).replaceWith('<a href="#"></a>');
                        } else {
                            $(this).replaceWith('<a href="#">' + $(this).text() + '</a>');
                        }

                    });
    
                    var flexboxDiv = document.createElement('div');
                    flexboxDiv.style.display = 'flex';
                    flexboxDiv.id = 'myAccountIDWrapper';
                    flexboxDiv.appendChild(document.getElementById('dropdowndiv'));
                    flexboxDiv.appendChild(document.getElementById('logout_userid'));
                    document.getElementById('header-wrapper').prepend(flexboxDiv);

            }
            
            $( "#desklogo" ).insertBefore(".header-links");
            $('.full').remove();
    
            // Jake Boyd
            // This section prepends the confirm_container to the form so that it appears in front of the confirm_overlay and maintains button functionality.
            // Note: Moving the confirm_container outside of the form area will throw an error when submitting form. 
            $('form[name="f"]').prepend($("#confirm_container"));
    
            //Jake Boyd 
            // This section decides whether the new tags with the .newTag and a data-hide-date will be displayed.
            $('.newTag').each(function() {
                    var currentDate = new Date();
                    var hideDate = new Date($(this).data('hide-date'));
                    if (currentDate > hideDate) {
                        $(this).hide();
                    }
            });
            
            /*********** End My Account Menu ***********/
    
    
    
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
    
            //Jake Boyd This section moves the logo to the TabsDiv for a better structured responsive design
            if ($('#desklogo').length && $('#TabsDiv').length) {
                    $('#desklogo').prependTo('#TabsDiv');
            }
            
            
            
    
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
                    // Add search button next to the search bar
                    $('<button id="search-button">Search</button>').insertAfter("div#Srch input").click(function() {
                        $("#submit_catalog_search").trigger("click");
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
                    // Add search button next to the search bar
                    $('<button id="search-button">Search</button>').insertAfter("div#Srch input").click(function() {
                        $("#submit_catalog_search").trigger("click");
                    });
            }
    
            /*************** End TopTab Search items feature **************/
    
            if ( $( "input[name='tab']" ).val() ) {
                    $("#copy5 span").text( $( "input[name='tab']" ).val().replace(/\|\|/g, ' - ') ); /** Set the catalog top left description **/
            }
    
            $( "input[name='tab']" ).each(function() {
                    console.log($(this).val().toLowerCase());
                    if ( $(this).val().toLowerCase().indexOf("promo/apparel") >= 0 ) {
                        // Remove border around promo/apparel large image
                        $(".image-container img").not("img.catalog-tiny-thumbnail").each(function() {
                            $(this).css('border', 'none');
                        });
                    }
            });
    
        }
    });
    
    </script>
    <script type="text/javascript" defer>
    {/* ************* Enable/Disable "Submit Order" button based on approval************** */}
    $(document).ready(function () {
        if($('form[action="accept_confirm.cgi"]').length >= 1) {
        $("table#bill-sect").insertAfter("table#ship-sect");
        }

        if($('form[action="bill.cgi"]').length >= 1 || $('form[action="review.cgi"]').length >= 1) {
            $("table#billing-info").insertBefore("#final-buttonsbar");
            // $("table#billing-info tr").eq(0).hide();
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
        // ***********************************************************************
        if ($("select[name='bill_code10']").val() == "No") {
            $("button#submit_send_order").prop('disabled', 'disabled');
            $("button#submit_review_order").prop('disabled', 'disabled');
        }
        //console.log($("select[name='bill_code10']").val());
        $("select[name='bill_code10']").change(function() {
            if ($(this).val() == "No") {
                $("button#submit_send_order").prop('disabled', 'disabled');
                $("button#submit_review_order").prop('disabled', 'disabled');
            }
            if ($(this).val() == "Yes") {
                $("button#submit_send_order").prop('disabled', false);
                $("button#submit_review_order").prop('disabled', false);
            }
        });
    
        // ********** Move approval yes/no to just above "Submit  Order"  *******************
        $("tr:contains('I have verified and approve this order:')").appendTo($("p.approve_order").parents("tr").parent());
        // ***************************************************************************
    });
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
                footer = $('.footer'),
                footnote = $('.footnote');
            
            // Give footnote an ID and move it to end of body
            $('.footnote').attr('id', 'footnote');
            $('body').append($('#footnote'));
    
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
                    // 'p' is used to prevent the all_items_view from wrapping to a new line when the window is around 1030px
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
                    searchButton.html('<i class="fa fa-search"> </i>');

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

    <script>
    {/* Jake Boyd
    Once everything has loaded in:
    Create and add the cart icon to the TabsDiv
    Add the Search bar to the TabsDiv        
    Add and fade out the overlay
    Initially hide TabsDiv contents and create overlay when document is ready */}
    $(document).ready(function() {
        $('#TabsDiv > *').css('display', 'none');
        createOverlay();
    });

    function createOverlay() {
        if ($('#TabsDiv').length) {
            if (!$('.tabsdiv-overlay').length) {
                $('<div class="tabsdiv-overlay"></div>').insertBefore('#TabsDiv');
                $('.tabsdiv-overlay').css({
                    'position': 'absolute',
                    'top': '32px',
                    'width': '100%',
                    'height': '80px',
                    'min-height': '80px',
                    'background-color': 'rgb(27, 82, 120)',
                    'z-index': '1000'
                });
            }
            return true;
        }
        return false;
    }

    function checkAndCreateOverlay() {
        if (!createOverlay()) {
            setTimeout(checkAndCreateOverlay, 100);
        }
    }

    $(window).on('load', function() {
        setTimeout(function() {
            $("span.cart_num_items.no_mobile").parent("a").wrap('<div class="carticon">');
            if ($('.carticon').length && $('#TabsDiv').length) {
                $('.carticon').appendTo('#TabsDiv');
            } else {
                console.error('Elements not found: .carticon or #TabsDiv');
            }

            $('#Srch').appendTo('#TabsDiv');

            // Show TabsDiv contents
            $('#TabsDiv > *').fadeIn();

            // Fade out and remove the overlay
            $('.tabsdiv-overlay').fadeOut(500, function() {
                $(this).remove();
            });
        }, 500);
    });
    </script>
    
    <script>
    {/* Jake Boyd 
    When scrolling:
    Set the distance of the cart on the left side of the screen.
    The cart will be in the middle of the page at all times, unless scrolled above or below the min / max height. */}
    $(window).on('scroll', function() {
        var topPosition = $(window).scrollTop() + ($(window).height() - $('.responsive_tabs-shell').height()) / 2;
        var bottomPosition = $(window).scrollTop() + $(window).height() - $('.responsive_tabs-shell').height();
        var maxHeight = $(document).height() - ($('#footnote').height() + 75) - $('.responsive_tabs-shell').height();
        if (topPosition < 330) {
            $('.responsive_tabs-shell').css('top', 330);
        } else if (topPosition > maxHeight) {
            $('.responsive_tabs-shell').css('top', maxHeight);
        } else {
            $('.responsive_tabs-shell').css('top', topPosition);
        }
    });

    {/* Jake Boyd
    This section solves the problem of the cart getting too large and overflowing the window height.
    If the  */}
    $(window).on('load', function() {
        if ($('.basket-list-item').length > 5) {
            $('.after').css('overflow-y', 'auto').css('max-height', '500px');
            $('#basket-list-title').prependTo('.responsive_tabs-shell');
            $('#basket-list-title').css('display', 'flex').css('justify-content', 'center');
            $('.basket-list-subtotal').appendTo('.responsive_tabs-shell');
            $('#basket_button_container').appendTo('.responsive_tabs-shell');
        }
    });
    </script>

    <script>
    $(window).on('load', function() {
        if($('.footer').find('#submit_cancel').length > 0) {
            $('.footer').prependTo('.footnote');
        }
    })
    </script>

    <script>
    window.addEventListener('beforeunload', function() {
        // Create white overlay div
        var unloadOverlay = $('<div>', {
            css: {
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgb(27, 43, 91)',
                zIndex: 999999
            }
        });

        // Add overlay to body
        $('body').append(unloadOverlay);
    });
    </script>

    <script>
    // On load add an almost transparent overlay to the whole page
    $(window).on('load', function() {
        // Create overlay div
        var overlay = $('<div>', {
            css: {
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                zIndex: 9999
            }
        });

        // Add overlay to body
        $('body').append(overlay);

        // Remove overlay after 1000ms
        setTimeout(function() {
            overlay.fadeOut(function() {
                overlay.remove();
            });
        }, 1000);
    });
    </script>
    <script>
    {/* David Oguh 06/01/2025 */}
    $('head').append('<link rel="icon" href="con/Hyatt-Iconjpg.jpg" sizes="32x32" />')
    $('head').append('<link rel="icon" href="con/Hyatt-Iconjpg.jpg" sizes="192x192" />')
    $('head').append('<link rel="apple-touch-icon" href="con/Hyatt-Iconjpg.jpg" />')
    </script>


<script>
{/* src="https://cdn.jsdelivr.net/gh/nwanne56/sf@main/map.js" */}
{/* David Oguh
Create map iframe and attach to pricing options page 
09.03.25 */}
// Create map iframe and attach to pricing options page 
// 09.03.25
function waitForElement(selector) {
    return new Promise((resolve) => {
        const element = $(selector);
        if (element.length) {
            resolve(element);
            return;
        }

        const observer = new MutationObserver((mutations, obs) => {
            const element = $(selector);
            if (element.length) {
                obs.disconnect();
                resolve(element);
            }
        })

        observer.observe(document.body, {
            childList: true,
            subtree: true
        })
    })
};

function createMapIframe(initLats, initLngs, initZoom, initAddresses) {
    const iframe = document.createElement("iframe");
    iframe.id = "map-iframe";
    iframe.style.cssText = `
        width: 600px;
        height: 600px;
        margin: 20px 0;
        border: none;
        display: block;
    `;
    iframe.srcdoc = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Google Map</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Roboto, Arial, sans-serif;
        }
        #map {
            width: 100%;
            height: 100vh;
        }
        #marker-controls {
            position: absolute;
            top: 60px;
            left: 10px;
            z-index: 1000;
            background: white;
            padding: 10px;
            border-radius: 4px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
            max-width: 200px;
        }
        .marker-button {
            display: block;
            width: 100%;
            margin: 2px 0;
            padding: 8px 12px;
            background: #4285F4;
            color: white;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            font-size: 14px;
        }
        .marker-button:hover {
            background: #3367D6;
        }
        .marker-button.active {
            background: #EA4335;
        }
    </style>
</head>
<body>
    <div id="marker-controls">
        <div style="font-weight: bold; margin-bottom: 8px; color: #333;">Jump to Marker:</div>
    </div>
    <div id="map"></div>
    
    <script>
        let draggableMarkers = [];
        let geocoder;
        let map;
        let infoWindow;
        let currentQuantity = 1;
        let globalMarkerNumber = 1;
        const initLats = ${JSON.stringify(initLats)};
        const initLngs = ${JSON.stringify(initLngs)};
        const initZoom = ${initZoom};
        const initAddresses = ${JSON.stringify(initAddresses)};

        (g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = \`https://maps.\${c}apis.com/maps/api/js?\` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })({
            key: "AIzaSyCpKLgIGARppYtXkaBsneFZVwG1f6oPNWo",
            v: "weekly"
        });

        async function initMap() {
            const submitButton = document.createElement("button");
            submitButton.id = "submit_map";
            submitButton.textContent = "Search";
            submitButton.style.cssText = \`
                background-color: #4285F4;
                display: table-cell;
                border: 0px;
                margin: 10px 10px 10px 0px;
                padding: 0px 17px;
                text-transform: none;
                appearance: none;
                position: relative;
                cursor: pointer;
                user-select: none;
                overflow: hidden;
                text-align: center;
                height: 40px;
                vertical-align: middle;
                color: white;
                font-family: Roboto, Arial, sans-serif;
                font-size: 18px;
                box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
                min-width: 64px;
                border-radius: 0px;
            \`;

            const inputText = document.createElement("input");
            inputText.type = "text";
            inputText.placeholder = "Enter a location";
            inputText.id = "input_map";
            inputText.style.cssText = \`
                background-color: white;
                display: table-cell;
                border: 0px;
                margin: 10px 0px 10px 10px;
                padding: 0px 17px;
                text-transform: none;
                position: relative;
                overflow: hidden;
                text-align: center;
                height: 40px;
                vertical-align: middle;
                color: rgb(86, 86, 86);
                font-family: Roboto, Arial, sans-serif;
                font-size: 18px;
                box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
                min-width: 64px;
            \`;

            submitButton.addEventListener("click", (e) => {
                e.preventDefault();
                if (inputText.value === "") {
                    alert("Please enter a location");
                    return;
                }
                reverse_geocode({ address: inputText.value });
            });

            const { Map, InfoWindow } = await google.maps.importLibrary("maps");
            const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
            const { Geocoder } = await google.maps.importLibrary("geocoding");

            geocoder = new Geocoder();

            map = new Map(document.getElementById('map'), {
                center: { lat: initLats[0], lng: initLngs[0] },
                zoom: initZoom,
                mapId: "d5851eac82c9571db0015c06",
            });

            const mapDiv = document.getElementById('map');
            mapDiv.addEventListener('wheel', (event) => {
                setTimeout(() => updateAllMarkerData(), 100);
            });

            map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputText);
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(submitButton);
            infoWindow = new InfoWindow();

            const initialQuantity = Math.max(initLats.length, initLngs.length, 1);
            createMarkersForQuantity(initialQuantity);

            window.addEventListener('message', function(event) {
                if (event.data.type === 'quantityChange') {
                    createMarkersForQuantity(event.data.quantity);
                }
            });

            async function createMarkersForQuantity(quantity) {
                if (globalMarkerNumber < quantity){
                    globalMarkerNumber = 1;
                }
                currentQuantity = quantity;
                
                while (draggableMarkers.length > quantity) {
                    const marker = draggableMarkers.pop();
                    if (marker) marker.map = null;
                }
                
                for (let i = draggableMarkers.length; i < quantity; i++) {
                    let position;
                    if (i < initLats.length && i < initLngs.length) {
                        position = { lat: initLats[i], lng: initLngs[i] };
                    } else if (draggableMarkers.length > 0) {
                        const lastMarker = draggableMarkers[draggableMarkers.length - 1];
                        const lastLat = typeof lastMarker.position.lat === 'function' ? lastMarker.position.lat() : lastMarker.position.lat;
                        const lastLng = typeof lastMarker.position.lng === 'function' ? lastMarker.position.lng() : lastMarker.position.lng;
                        position = { 
                            lat: lastLat + 0.001,
                            lng: lastLng + 0.001
                        };
                    } else {
                        position = { 
                            lat: initLats[0] + (i * 0.001),
                            lng: initLngs[0] + (i * 0.001)
                        };
                    }
                    await createDraggableMarker(position, i + 1, initAddresses[i]);
                }
                
                updateMarkerControls();
                updateAllMarkerData();
            }

            async function createDraggableMarker(position, markerNumber, address) {
                const pin = new PinElement({
                    scale: 1.2,
                    background: '#4285F4',
                    borderColor: '#ffffff',
                    glyphColor: '#ffffff',
                    glyph: markerNumber.toString()
                });

                const marker = new AdvancedMarkerElement({
                    map,
                    position: position,
                    gmpDraggable: true,
                    gmpClickable: true,
                    content: pin.element,
                    title: \`Sign Location #\${markerNumber}\`,
                });

                marker.markerNumber = markerNumber;
                draggableMarkers[markerNumber - 1] = marker;
                marker.address = address;

                marker.addListener('dragend', async (event) => {
                    highlightMarker(markerNumber);
                    const position = marker.position;
                    geocode_address(position, marker);
                    updateAllMarkerData();
                    showMarkerInfo(marker);
                });
                
                marker.addListener('click', ({ domEvent, latLng }) => {
                    highlightMarker(markerNumber);
                    showMarkerInfo(marker);
                });

                // Show initial instruction and do initial geocoding
                infoWindow.setContent(\`Drag the pin around to choose where this sign will be located. When the pin is dropped, you will be able to see the exact coordinates and address of the sign location.\`);
                infoWindow.open(marker.map, marker);
                geocode_address(position, marker);
            }

            function updateMarkerControls() {
                const controlsDiv = document.getElementById('marker-controls');
                let buttonsContainer = controlsDiv.querySelector('.marker-buttons');
                
                if (!buttonsContainer) {
                    buttonsContainer = document.createElement('div');
                    buttonsContainer.className = 'marker-buttons';
                    controlsDiv.appendChild(buttonsContainer);
                }
                
                buttonsContainer.innerHTML = '';

                for (let i = 1; i <= currentQuantity; i++) {
                    const button = document.createElement('button');
                    button.className = 'marker-button';
                    //button.textContent = \`Marker \${i}\`;
                    button.textContent = 'Jump';
                    
                    button.addEventListener('click', () => jumpToMarker(i));
                    buttonsContainer.appendChild(button);
                }
            }

            function jumpToMarker(markerNumber) {
                const marker = draggableMarkers[markerNumber - 1];
                if (marker) {
                    map.panTo(marker.position);
                    map.setZoom(initZoom);
                    
                    showMarkerInfo(marker);
                    highlightMarker(markerNumber);
                }
            }

            function highlightMarker(markerNumber) {
                globalMarkerNumber = markerNumber;
                document.querySelectorAll('.marker-button').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                const buttons = document.querySelectorAll('.marker-button');
                if (buttons[markerNumber - 1]) {
                    buttons[markerNumber - 1].classList.add('active');
                }
            }

            async function geocode_address(position, marker) {
                try {
                    const plainPosition = position.lat ? {
                        lat: typeof position.lat === 'function' ? position.lat() : position.lat,
                        lng: typeof position.lng === 'function' ? position.lng() : position.lng
                    } : position;
                    
                    const url = \`https://maps.googleapis.com/maps/api/geocode/json?latlng=\${plainPosition.lat},\${plainPosition.lng}&result_type=street_address&key=AIzaSyCpKLgIGARppYtXkaBsneFZVwG1f6oPNWo\`;
                    
                    const response = await fetch(url);
                    const data = await response.json();
                    
                    if (data.status === 'OK' && data.results && data.results.length > 0) {
                        console.log("results", data.results);
                        console.log("addressComponents", data.results[0].address_components);
                        if (data.results[0].hasOwnProperty("address_components")) {
                            const addressComponents = data.results[0].address_components;
                            const streetNumber = addressComponents.find(c => c.types.includes('street_number'))?.long_name || '';
                            const route = addressComponents.find(c => c.types.includes('route'))?.long_name || '';
                            const city = addressComponents.find(c => c.types.includes('locality'))?.long_name || '';
                            const state = addressComponents.find(c => c.types.includes('administrative_area_level_1'))?.short_name || '';
                            const zip = addressComponents.find(c => c.types.includes('postal_code'))?.long_name || '';

                            marker.address = \`\${streetNumber} \${route}, \${city}, \${state} \${zip}\`.trim();
                        } else {
                            marker.address = data.results[0].formatted_address;
                        }
                    } else {
                        console.log('Address not found');
                        marker.address = "Please use the Map Marker to select an Address.";
                    }
                } catch (error) {
                    console.log(\`Geocoding failed \${error}\`);
                    marker.address = "Please use the Map Marker to select an Address.";
                }
            }

            function showMarkerInfo(marker) {
                const lat = typeof marker.position.lat === 'function' ? marker.position.lat() : marker.position.lat;
                const lng = typeof marker.position.lng === 'function' ? marker.position.lng() : marker.position.lng;
                
                infoWindow.close();
                infoWindow.setContent(\`<strong>Sign Location #\${marker.markerNumber}</strong><br/>
                    Latitude: \${lat.toFixed(6)}<br/>
                    Longitude: \${lng.toFixed(6)}<br/>
                    \${marker.address || 'Getting address...'}\`);
                infoWindow.open(marker.map, marker);
            }

            function reverse_geocode(request) {
                geocoder
                    .geocode(request)
                    .then(async (result) => {
                        const { results } = result;
                        map.setCenter(results[0].geometry.location);
                        
                        if (draggableMarkers[globalMarkerNumber - 1]) {
                            const position = {
                                lat: results[0].geometry.location.lat(),
                                lng: results[0].geometry.location.lng()
                            };
                            draggableMarkers[globalMarkerNumber  - 1].position = position;
                            await geocode_address(position, draggableMarkers[globalMarkerNumber  - 1]);
                            updateAllMarkerData();
                            showMarkerInfo(draggableMarkers[0]);
                        }
                        return results;
                    })
                    .catch((e) => {
                        alert("Geocode was not successful: " + e);
                    });


            }

            function updateAllMarkerData() {
                const latitudes = [];
                const longitudes = [];
                const addresses = [];
                const mapUrls = [];
                let currentZoom = map.getZoom();

                draggableMarkers.forEach((marker, index) => {
                    if (marker && marker.position) {
                        const lat = typeof marker.position.lat === 'function' ? marker.position.lat() : marker.position.lat;
                        const lng = typeof marker.position.lng === 'function' ? marker.position.lng() : marker.position.lng;
                        
                        latitudes.push(lat);
                        longitudes.push(lng);
                        addresses.push(marker.address || 'Please use the Map Marker to select an Address.');
                        
                        // Generate static map URL for this marker
                        currentZoom = Math.max(18, currentZoom);
                        const staticMapUrl = \`https://maps.googleapis.com/maps/api/staticmap?center=\${lat},\${lng}&zoom=\${currentZoom}&size=800x800&markers=color:red|label:\${index + 1}|\${lat},\${lng}&key=AIzaSyCpKLgIGARppYtXkaBsneFZVwG1f6oPNWo\`;
                        mapUrls.push(staticMapUrl);
                    }
                });
                let message = {
                    type: 'mapUpdate',
                    data: {
                        latitudes: latitudes,
                        longitudes: longitudes,
                        addresses: addresses,
                        mapUrls: mapUrls,
                        zoom: currentZoom
                    }
                };
                console.log("window message: ", message);

                // Send data to parent
                window.parent.postMessage(message, '*');
            }
        }

        window.addEventListener('load', initMap);
    <\/script>
</body>
</html>`;

    return iframe;
}

function createDisplayTextarea(input) {
    input.hide();

    const textarea = document.createElement('textarea');
    textarea.id = input.attr('id') + '_display';
    textarea.name = input.attr('name') + '_display';
    textarea.value = "Please use the Map Marker to select an Address.";
    textarea.text = "Please use the Map Marker to select an Address.";
    textarea.readOnly = true;
    textarea.rows = 4;

    textarea.style.cssText = input[0].style.cssText;
    textarea.style.resize = 'none';
    textarea.style.display = 'block';

    $(textarea).insertAfter(input);

    input.on('change input', function () {
        textarea.value = this.value;
    });

    return textarea;
}

function parseValues(input, defaults) {
    if (!input || input.trim() === "") return defaults;
    const values = input.split("~")
        .map(val => parseFloat(val.trim()))
        .filter(val => !isNaN(val) && val !== 0);
    return values.length > 0 ? values : defaults;
}

function parseAddresses(input, defaults) {
    console.log("[DOG]", input);
    if (!input || input.trim() === "") return defaults;
    const addresses = input.split("~")
        .map(val => val.trim())
        .filter(val => val !== "" && val !== "0");
    return addresses.length > 0 ? addresses : defaults;
}

$(document).on('ready', async function () {

    // want to wait for all 3 of these inputs to exist
    try {

        const [latInput, lngInput, zoomInput, addressInput, proofButton, requestButton] = await Promise.all([
            waitForElement('input[name="new_latitude"]'),
            waitForElement('input[name="new_longitude"]'),
            waitForElement('input[name="new_zoom"]'),
            waitForElement('input[name="new_address"]'),
            waitForElement("#buttons\\.view_proof"),
            waitForElement("#buttons\\.request_quote"),
        ]);

        const addressTextarea = createDisplayTextarea(addressInput);

        let initLats = parseValues(latInput.val(), [38.9777]);
        let initLngs = parseValues(lngInput.val(), [-76.5521]);
        let initZoom = parseFloat(zoomInput.val()) || 16;
        let initAddresses = parseAddresses(addressInput.attr('value'), ["Please use the Map Marker to select an Address."]);

        const iframe = createMapIframe(initLats, initLngs, initZoom, initAddresses);
        $("#blurb-and-image").after(iframe);

        // means of filtering for qty input for all pricing options that have it
        $(".estimate-item-container").find("#qtyspec_label")
            .parent().children().filter("[required]").on('change', function () {
                const quantity = parseInt($(this).val()) || 1;
                const iframe = document.getElementById('map-iframe');
                if (iframe && iframe.contentWindow) {
                    iframe.contentWindow.postMessage({
                        type: 'quantityChange',
                        quantity: quantity
                    }, '*');
                } else {
                    console.log("Iframe or contentWindow not available");
                }
            });

        window.addEventListener('message', async function (event) {
            console.log('Message received:', event.data);

            if (event.data.type === 'mapUpdate') {
                const data = event.data.data;
                console.log(data);
                console.log("Addresses: ", data.addresses.join('~'));

                if (data.addresses.join('~') != "Please use the Map Marker to select an Address." && data.addresses.join('~') != "") {
                    $("#buttons\\.request_quote")
                        .text("Continue")
                        .html("Continue")
                        .parent().prop("disabled", false);
                    $("#buttons\\.view_proof")
                        .text("Continue")
                        .html("Continue")
                        .parent().prop("disabled", false);

                    $('input[name*="latitude"]').change();
                }

                $('input[name*="latitude"]').val(data.latitudes.join('~'));
                $('input[name*="longitude"]').val(data.longitudes.join('~'));
                $('input[name*="zoom"]').val(data.zoom < 15 ? data.zoom : 15);
                // $('input[name="new_address"]').val(data.addresses.join('~')).change();
                $('input[name="address"]').val(data.addresses.join('~'));

                $('textarea[name="new_address_display"]').val(data.addresses.join('~'));
                $('input[name*="mapurl"]').val(data.mapUrls.join('~'));
            }
        });

        $("input[name='new_latitude']")
            .prop("readonly", true).attr("type", "text");
        $("input[name='new_longitude']")
            .prop("readonly", true).attr("type", "text");
        $("input[name='new_zoom']")
            .prop("readonly", true).attr("type", "text");
        $("textarea[name='new_address'], input[name='new_address']")
            .prop("readonly", true).attr("type", "text");
        $("input[name='new_mapurl']")
            .prop("readonly", true).attr("type", "text");

        $("td[class*='tr_zoom']")
            .parent().prop("hidden", true);
        $("td[class*='tr_mapurl']")
            .parent().prop("hidden", true);
        $("#total_block").prop("hidden", true);
        $("#estimate-item-container").find(".qtyspec_label")
            .parent().children().filter("[required]").parent().parent().prop("hidden", true);

        console.log($("#buttons\\.request_quote").text())
        $("#buttons\\.request_quote")
            .text("Please adjust the map marker.")
            .parent()
            .prop("disabled", true);
        $("#buttons\\.view_proof")
            .text("Please adjust the map marker.")
            .parent()
            .prop("disabled", true);

    } catch (error) {
        console.error('Map init failed:', error);
    };

    // remove after updating pricing options

    $("#estimate-item-container").find(".qtyspec_label")
        .parent().children().filter("[required]").parent().parent().prop("hidden", true);
    $("#total_block").prop("hidden", true);

    if (typeof Estimator !== 'undefined') {
        Estimator.prototype.toggle_continue = function () {
            var contBtn = this.get_continue_buttons();
            var hasErrorBlock = this.has_error_msg();
            var hasInlineErrors = $('.please-select:visible').length > 0;

            if (hasErrorBlock || hasInlineErrors || !($("#buttons\\.request_quote")
                    .text() == "Continue")) {
                contBtn
                    .prop('disabled', 'disabled')
                    .css({ 'cursor': 'not-allowed', 'opacity': '0.6' });
            } else {
                contBtn
                    .prop('disabled', false)
                    .css({ 'cursor': 'pointer', 'opacity': '1.0' });
            }
        };
    }
});
</script>


{/* <script>
Jake Boyd 9-28-25 **HYATT SPECIFIC**
This section will stop the user from being able to alter the quantities of signage items in their 'cart' on the basket view page

If element #basket_view.items_header is present on the page and within a table with class items-table there is a table row containing a
a td element with text containing (Signage)'set all text inputs within table to have pointer-events: none; and a light gray background color.
    $(document).ready(function() {
        if (
            $('#basket_view\\.items_header').length &&
            $('table.items-table').find('td:contains("(Signage)")').length
        ) {
            $('table.items-table')
                    .find('input[type="text"]')
                    .css('pointer-events', 'none')
                    .css('background-color', '#f0f0f0');
        }
    });

</script> */}

<script>
{/* 
Jake Boyd 9-28-25 **HYATT SPECIFIC**
This section limits the user to 1 item in their cart if they are ordering signage by disabling all add to cart buttons.
If the user has a signage item in their cart and is on the catalog page - a message will display informing them that they must proceed to checkout.

If element #catalog.pagebanner is present on the page and there is an element with class 'basket-text' containing '(Signage)'
then disable all buttons with id #submit_catalog_add AND before .responsive_tabs-shell in the DOM add >>
<div class="error">Only 1 signage item can be ordered at a time - please proceed to checkout.</div>
*/}
    $(document).ready(function() {
        // Centralized check/update function
        function updateSignageState() {
            var onCatalogPage = $('#catalog\\.pagebanner').length > 0;
            var hasSignage = $('div.basket-list-item').find('.basket-text:contains("(Signage)")').length > 0;
    
            if (onCatalogPage && hasSignage) {
                console.log('Found cart with signage');
                // disable any add-to-cart buttons with this id (may be multiple)
                $('[id="submit_catalog_add"]').prop('disabled', true);
                // insert a single message only once
                if ($('.signage-error').length === 0) {
                    $('<div class="error signage-error">Only 1 signage item can be ordered at a time - please proceed to checkout.</div>')
                        .insertBefore('.responsive_tabs-shell');
                }
            } else {
                // remove message and re-enable buttons if no signage
                if ($('.signage-error').length) { $('.signage-error').remove(); }
                $('[id="submit_catalog_add"]').prop('disabled', false);
                console.log('No signage in cart');
            }
        }
    
        // Try immediately in case the cart is already present
        updateSignageState();
    
        // Observe DOM for changes (cart may be injected after ready)
        var observer = new MutationObserver(function(mutations) {
            // small debounce: call update once per batch of mutations
            updateSignageState();
        });
    
        // Watch for additions anywhere in the body (subtree) so dynamically inserted cart is caught
        observer.observe(document.body, { childList: true, subtree: true });
    
        // Safety: disconnect observer after 30s to avoid long-running observer
        setTimeout(function() {
            try { observer.disconnect(); } catch (e) { /* ignore */ }
        }, 30000);
    
        // Fallback polling for environments where MutationObserver may not fire immediately
        var pollTimeout = 0;
        var pollInterval = setInterval(function() {
            pollTimeout += 100;
            updateSignageState();
            if ($('div.basket-list-item').length || pollTimeout >= 5000) {
                clearInterval(pollInterval);
            }
        }, 100);
    });

</script>

<script>
{/* 
Jake Boyd 9-28-25 **HYATT SPECIFIC**
If the user has a signage item in their cart and is on the bill page - the billing price table will be hidden and a message will display
informing them: 'You will be contacted by a Signage Project Manager to discuss installation and shipping.'

If #billing-pricetable is present on the page and within a table with id bill-pricetable there is a table row containing a td with text '(Signage)'
then hide the entire #bill-pricetable and replace the text within #bill\.copy1 with 'You will be contacted by a Signage Project Manager to discuss installation and shipping.' 
*/}
    $(document).ready(function() {
        if (
            $('#billing-pricetable').length &&
            $('#billing-pricetable').find('td:contains("(Signage)")').length
        ) {
            $('#billing-pricetable').hide();
            $('#bill\\.copy1').html('<h2>You will be contacted by a Signage Project Manager to discuss installation and shipping.</h2>');
        }
    });
</script>

<script>
{/* 
Rob Carberry 10/03/2025
Fill bill_code3 with the item longname found on the shipping page.  That happens to come from the item longname.
This also handles showing and hiding the Ship To fields as well as making them mandatory or not. 
*/}

{/* This handles the ship to fields being mandatory when visible and not when hidden. */}
$(function () {
    const $table = $("#shipaddr-info");
    const $submitBtn = $("#submit_review_order");

    function rowHasRedStar($row) {
        return $row.find("td.label label i").filter(function () {
        return $(this).text().trim() === "*";
        }).length > 0;
    }

    function updateRequired() {
        const visible = $table.is(":visible");

        $table.find("tr.ship-address").each(function () {
        const $row = $(this);
        if (rowHasRedStar($row)) {
            $row.find('td.input input[type="text"]')
            .prop("required", visible)
            .attr("aria-required", visible ? "true" : "false");
        }
        });

        checkMandatoryFields(); // refresh button state
    }

    function checkMandatoryFields() {
        let allFilled = true;

        $table.find("tr.ship-address").each(function () {
        const $row = $(this);
        if (rowHasRedStar($row)) {
            $row.find('td.input input[type="text"][required]').each(function () {
            if (!$(this).val().trim()) {
                allFilled = false;
            }
            });
        }
        });

        $submitBtn.prop("disabled", !allFilled);
    }

    // Initial run
    updateRequired();

    // Watch for table visibility changes
    const target = $table.get(0);
    if (target) {
        const observer = new MutationObserver(updateRequired);
        observer.observe(target, { attributes: true, attributeFilter: ["style", "class"] });
    }

    // Check on every keystroke/change
    $table.on("input change", 'input[type="text"]', checkMandatoryFields);

    // Allow manual trigger after show/hide
    $table.on("forceUpdateRequired", updateRequired);
});
{/* ---------------------------- */}

    $(document).ready(function() {
        // Copies the items longname set in price options to bill_code3 to then be used as the job header name in epms. 
        var text = $("#shipping-pricetable tbody tr:eq(1) td:first").text().replace("(Signage)", "").trim();
        if (text) {  // only run if not empty
            $('input[type="text"][name="bill_code3"]').val(text).change();
            console.log("bill_code3 set to:", text);
        } else {
            console.log("No text found in 2nd row, 1st column — input not changed.");
        }

        // Qty read only.  Hides the input text box and replaces it with plain text in the <TD>
        $(function () {
            // For shipping-pricetable
            if ($('#shipping-pricetable tbody td input[type=text]').length) {
                $('#shipping-pricetable tbody td input[type=text]').each(function () {
                        $(this).hide(); // or .prop('disabled', true) if you don’t want it submitted
                        $(this).before(document.createTextNode(this.value));
                        // $(this).closest('table').show();
                });
                $('table#shipaddr-info').hide()
            }else{
                $('table#shipaddr-info').show()

            }

            // For item_form.cgi form
            if ($('form[action="item_form.cgi"] table.items-table.true-table').length) {
                $('form[action="item_form.cgi"] table.items-table.true-table tbody td input[type=text]').each(function () {
                        $(this).hide(); // or .prop('disabled', true)
                        $(this).before(document.createTextNode(this.value));
                        // $(this).closest('table').show();
                });
            }
        });
        // css hides the tables for item and qty.  This shows it after replacing the qty input with text so it can't be altered.
        if ($('table#shipping-pricetable').length) {$('table#shipping-pricetable').show()};
        if ($('form[action="item_form.cgi"] table.items-table.true-table').length) {$('table.items-table.true-table').show()};
    });
</script>
