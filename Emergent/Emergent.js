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

function getQuery(key, queryString) {
	queryString = queryString.substring(0);
	queryString = queryString.split('?');
	queryString = queryString[1];
	
	const urlParams = new URLSearchParams(queryString);
	const
		keys = urlParams.keys(),
		values = urlParams.values(),
		entries = urlParams.entries();
	if (key.length > 0) {
		return urlParams.get(key)
	}else{
		for(const entry of entries) {
		  console.log(`${entry[0]}: ${entry[1]}`);
		}
	}
}

$(window).load(function () {
	$('head').append('<link rel="icon" href="https://www.emergentbiosolutions.com/wp-content/uploads/2022/01/ebsi-favicon.png" sizes="32x32">');
	$( "link[href^='css/header.css']" ).removeAttr( "media" );
	
	$( "#header_logo img.no_mobile" ).wrap( '<a style="display: inline-block;" href="index.cgi">' );
	$( "#header_logo img.no_desktop" ).wrap( '<a style="display: inline-block;" href="index.cgi">' );
	$(".note:contains('Non-taxable items marked with *')").hide();
		
	if ($("tr.form-sublabel.negativeprice:contains('Emergent Dollars')").length > 0) {
		$("tr.form-sublabel.negativeprice td:contains('Emergent Dollars')").css('font-weight', 'bold');
		var voucher = $("tr.form-sublabel.negativeprice:contains('Emergent Dollars')");
		var ttl = $(voucher).siblings('tr:contains("Total Price:")');
		if ($(ttl).length > 0) {$(voucher).insertBefore($(ttl));}
	}
	if ( $(".menu-knob").is(":hidden") ) {
		$(".responsive-longname").find("label").each(function() {
			var lbl = $(this).text().replace("(Hidden from Standard users)","");
			//console.log("* " + lbl);
			$(this).text(lbl);
		});
	}
	
	$("table#billing-pricetable").find("td , th").each(function() {
		
		$(this).css("text-align", "right");
		$(this).filter(":contains('*')").each(function() {
			var nostar = '';
			var nostar = $(this).html().replace("*", "");
			$(this).html(nostar);
		});
	});

    $(".error:contains('Choose a shipping method')").hide();

	if($(window).width() >= 1025) {
		var sgntab = $( "input[name='tab']" );
		if (sgntab.attr("type") == "hidden" && sgntab.attr("value") == "Signage") {
			$(".responsive-choose-info").css("min-height", "140px");
			$(".responsive-longname").css("min-height", "58px");
		}

		//$( "#desklogo" ).insertBefore(".header-links");
		$( "td#header_logo" ).css("display", "table-cell");
		$('table.items-table.true-table').children().find("th").each(function() {
			if($(this).text().length > 0 && $(this).attr("class") === undefined) {
				//console.log($(this).attr("class") + " | " + $(this).text());
				$(this).attr("class", "right");
				//console.log($(this).attr("class") + " | " + $(this).text());
			}			
		});
		$('table.items-table.true-table').children().find('td').each(function() {
			if($(this).text().length > 0 && $(this).attr("class") === undefined) {
				//console.log($(this).attr("class") + " | " + $(this).text());
				$(this).attr("class", "right");
				//console.log($(this).attr("class") + " | " + $(this).text());
			}			
		});
		

		if($('.pagetitle').text().toUpperCase() === 'IN YOUR CART') {
			var cnt = 1;
			$('span.menu-knob').parents('tr').each(function() {
				$( this ).attr('class', 'menu-knob_tr'+cnt);
				$('<td class="cart_item"></td>').insertBefore( this);
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
				$( this).prepend(previewcell);
				$( this).prepend(menuknob);
				cnt = cnt + 1;
			});
			$('.cart_item').parents('table').css('text-align', 'center');
		}
	}
});
$(document).ready(function () {
	// $( "#shipmeth-info" ).hide();

	// r $('tr:contains("Shipping")').hide();

	if($('form[action="profile.cgi"]').length === 0) {
		if( $(".item_count").text() > 0) {
			$("button#submit_cancel").show();
		} else{
			$("button#submit_cancel").hide();
		}
	}

     // Set Shipping....
	if($('form[action="accept_bill.cgi"]').length >= 1 || $('form[action="review_bill.cgi"]').length >= 1) {
          $('tr:contains("Shipping")').hide();
          var sm = getQuery( 'ship_method', $("#pageurl").text())
          var country = getQuery( 'ship_country', $("#pageurl").text())
		console.log('ship_method' + ':' + sm + ' - country = |' + country + '|');
          if (sm == '') {
               if (country == 'US' || country == 'United States') {
                    sm = 'ups-net30'
               }else{
                    sm = 'ups-ww-net30'
               }
          }

		////var sel = $('select#service_code').val(sm).change();
          if (sm != null) {
               console.log('sm != null')
               $('select#service_code option').each(function() {
                    if ($(this).val() == sm) {
                         // console.log($(this).text());
                         $('<span id="shipmeth">' + $(this).text().replaceAll(' - -', ' $0.00') + '</span>').insertBefore($(this).parent());
                         var shiptxt = $("#shipmeth").html().replaceAll('UPS - Ground $0.00', '<span style="float: left;">UPS - Ground</span><br><span> $0.00</span>');
                         $("#shipmeth").html(shiptxt);
                         $(this).attr('selected', 'selected');
                         $(this).prop('selected', true);
                         sessionStorage.setItem("ship_method_save", sm);
                         $(this).parent().hide();
                    }
                    // else{
                    //      $(this).remove();
                    // }
               });
          }else{
               var sm = sessionStorage.getItem("ship_method_save");
               if(sm != null){
                    // console.log(sm);
                    $('select#service_code option').each(function() {
                         if ($(this).val() == sm) {
                              $('<span id="shipmeth">' + $(this).text().replaceAll(' - -', ' $0.00') + '</span>').insertBefore($(this).parent());
                              var shiptxt = $("#shipmeth").html().replaceAll('UPS - Ground $0.00', '<span style="float: left;">UPS - Ground</span><br><span> $0.00</span>');
                              $("#shipmeth").html(shiptxt);
                              $(this).attr('selected', 'selected');
                              $(this).prop('selected', true);
                              sessionStorage.setItem("ship_method_save", sm);
                              $(this).parent().hide();
                         }
                         // else{
                         //      $(this).remove();
                         // }
                    });
               }
          
          }
     }
});
</script>

<script>
//********** Enable/Disable "Submit Order" button based on approval *****************************************************
$(document).ready(function () {
	if ($("select[name='bill_code10']").val() == "No") {
		$("button#submit_send_order").prop('disabled', 'disabled');
	}
	//console.log($("select[name='bill_code10']").val());
	$('form[action="accept_bill.cgi"]').change(function() {
		if ($("select[name='bill_code10']").val() == "No") {$("button#submit_send_order").prop('disabled', 'disabled');}
		if ($("select[name='bill_code10']").val() == "Yes") {$("button#submit_send_order").prop('disabled', false);}
		//console.log($("select[name='bill_code10']").val());
	});

	//********** Move approval yes/no to just above "Submit Order"*******************
	$("tr:contains('I have verified and approve this order:')").appendTo($("p.approve_order").parents("tr").parent());
	//*******************************************************************************
});
//***********************************************************************************************************************
</script>
