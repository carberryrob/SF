<div class="footer_row3">
<div><img style="opacity: 50%;" src="con/260-2e2e2e-PoweredBySF.png" alt="Online Storefront Powered by Strategic Factory" class="img-fluid mt-3"></div>
	<p class="footer_cr">
		Strategic Factory<br>
		11195 Dolfield Boulevard<br>
		Owings Mills, Maryland 21117<br>
		(443) 548-3500<br>
		<a href="mailto:sfportalorders@strategicfactory.com">sfportalorders@strategicfactory.com</a>
	</p>
</div>

<script>


function getQueryVariable(variable, qstr) {
	var query = qstr.substring(0);
	query = query.split('?');
	query = query[1];
	//console.log(query);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		console.log(decodeURIComponent(pair[0]) + ":" + decodeURIComponent(pair[1]).replaceAll("+"," "));
		if (decodeURIComponent(pair[0]) == variable) {
			return decodeURIComponent(pair[1]).replaceAll("+"," ");
		}
	}
	console.log('Query variable %s not found', variable);
}

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
	$('head').append('<link rel="icon" href="https://cviewllc.com/wp-content/uploads/2017/12/cropped-CVC_Favicon-32x32.png" sizes="32x32">');
	$( "link[href^='css/header.css']" ).removeAttr( "media" );
	$( "#header_logo img.no_mobile" ).wrap( '<a style="display: inline-block;" href="index.cgi">' );
	$( "#header_logo img.no_desktop" ).wrap( '<a style="display: inline-block;" href="index.cgi">' );
	$(".note:contains('Non-taxable items marked with *')").hide();
	$('.responsive_tabs a:contains("Merchandise Suggestions")').addClass("suggestion");
	$('.responsive_tabs a:contains("Managers Request")').addClass("suggestion");

	if ($("tr.form-sublabel.negativeprice:contains('Clearview Cash')").length > 0) {
		var styles = {"font-weight" : "500", "text-align": "right", "font-style": "italic"};

		//$("tr.form-sublabel.negativeprice td:contains('Clearview Cash')").css('font-weight', 'bold');
		$("tr.form-sublabel.negativeprice td:contains('Clearview Cash')").css(styles);
		var voucher = $("tr.form-sublabel.negativeprice:contains('Clearview Cash')");
		var ttl = $(voucher).siblings('tr:contains("Total Price:")');
		if ($(ttl).length > 0) {$(voucher).insertBefore($(ttl));}
	}
	$("table#billing-pricetable").find("td , th").each(function() {
		
		//$(this).css("text-align", "right");
		$(this).filter(":contains('*')").each(function() {
			var nostar = '';
			var nostar = $(this).html().replace("*", "");
			$(this).html(nostar);
		});
	});


	//$( '<div class="top_blurb"><span>FREE SHIPPING ON ORDERS OVER $100</span></div>').prependTo("#header-wrapper")
	
	
	//if($('form[action="item_form.cgi"]').length > 0) {
	//	$("button#submit_continue").last().hide();
	//}
	//$(".stretchy_cols.responsive-item.image-row").wrap( '<div class="stretchy_cols_div">' );

    $(".error:contains('Choose a shipping method')").hide();

	
	if($(window).width() >= 1025) {
		$( "#desklogo" ).insertBefore(".header-links");
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
		//$('.maincol').addClass("right");
		//$('.form-sublabel').addClass("right");
	
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
				$(this).prepend(menuknob);
				cnt = cnt + 1;
			});
			$('.cart_item').parents('table').css('text-align', 'center');
			//var buttonbar = $('button#button_addproducts').parent();
			//$('<span style="display: block; font-size: small; margin-left: 205px; padding-bottom: 10px;">Shipping & taxes calculated at checkout</span>').prependTo(buttonbar);
		}
	}
});
$(document).ready(function () {
	$("label:contains('FAQ-HOLDER')").parentsUntil( ".stretchy_cols" ).children().hide();
	//$( "#shipmeth-info" ).hide();
	//$( "#searchfield_input" ).parent().hide();
	//$( "#basket-list-title" ).parent().hide();

	if($('form[action="profile.cgi"]').length === 0) {
		if( $(".item_count").text() > 0) {
			$("button#submit_cancel").show();
		} else{
			$("button#submit_cancel").hide();
		}
	}
	
	// if($('form[action="accept_bill.cgi"]').length >= 1 || $('form[action="review_bill.cgi"]').length >= 1) {
	// 	var sm = getQuery( 'ship_method', $("#pageurl").text())
	// 	//console.log('ship_method' + ':' + sm);
	// 	////var sel = $('select#service_code').val(sm).change();
	// 	$('select#service_code option').each(function() {
	// 		//console.log($(this).val());
	// 		if ($(this).val() == sm) {
	// 			////$(this).prop('selected', true);
	// 			//console.log($(this).text());
	// 			$('<span id="shipmeth">' + $(this).text().replaceAll(' - -', '    $0.00') + '</span>').insertBefore($(this).parent());
	// 			//console.log($("#shipmeth").html());
	// 			var shiptxt = $("#shipmeth").html().replaceAll('UPS - Ground (Invoiced when shipped)    $0.00', '<span style="float: left;">UPS - Ground</span><br><span>(Invoiced when shipped)    $0.00</span>');
	// 			//console.log(shiptxt);
	// 			$("#shipmeth").html(shiptxt);
	// 			$(this).parent().hide();
	// 		}else{
	// 			// $(this).remove();
	// 		}
	// 	});
	// }

    


    // Set Shipping....
	if($('form[action="accept_bill.cgi"]').length >= 1 || $('form[action="review_bill.cgi"]').length >= 1) {
        
        var sm = getQuery( 'ship_method', $("#pageurl").text())
		console.log('ship_method' + ':' + sm + 'sm exist = ' + sm);

		////var sel = $('select#service_code').val(sm).change();
        if (sm != null) {
            //console.log('sm != null')
            $('select#service_code option').each(function() {
                if ($(this).val() == sm) {
                    console.log($(this).text());
                    $('<span id="shipmeth">' + $(this).text().replaceAll(' - -', ' $0.00') + '</span>').insertBefore($(this).parent());
                    // var shiptxt = $("#shipmeth").html().replaceAll('UPS - Ground $0.00', '<span style="float: left;">UPS - Ground</span><br><span> $0.00</span>');
                    var shiptxt = $("#shipmeth").html().replaceAll('UPS - Ground (Invoiced when shipped) $0.00', '<span style="float: left;">UPS - Ground</span><br><span>(Invoiced when shipped) $0.00</span>');
                    $("#shipmeth").html(shiptxt);
                    $(this).attr('selected', 'selected');
                    $(this).prop('selected', true);
                    sessionStorage.setItem("ship_method_save", sm);
                    $(this).parent().hide();
                    // $('select#service_code option').change();
                }
                else{
                    $(this).remove();
                }
                //$('select#service_code option').change();
            });
        }else{
            var sm = sessionStorage.getItem("ship_method_save");
            if(sm != null){
                console.log("sessionStorage: " + sm);
                $('select#service_code option').each(function() {
                    if ($(this).val() == sm) {
                        $('<span id="shipmeth">' + $(this).text().replaceAll(' - -', ' $0.00') + '</span>').insertBefore($(this).parent());
                        var shiptxt = $("#shipmeth").html().replaceAll('UPS - Ground (Invoiced when shipped) $0.00', '<span style="float: left;">UPS - Ground</span><br><span>(Invoiced when shipped) $0.00</span>');
                        $("#shipmeth").html(shiptxt);
                        $(this).attr('selected', 'selected');
                        $(this).prop('selected', true);
                        sessionStorage.setItem("ship_method_save", sm);
                        $(this).parent().hide();
                        // $('select#service_code option').change();
                    }
                    else{
                        $(this).remove();
                    }
                });
            }
        }
	}

	if($('form[action="bill.cgi"]').length >= 1) {
		var shipArray = [{"element":$("select#ship_office").attr('id'), "value":$("select#ship_office").val()}];
		$("table#shipaddr-info").find("input[type='text']").each(function() {
			shipArray.push({"element": $(this).attr('id'), "value": $(this).val()});
			// console.log( $(this).attr("id") + " : " + $(this).val() );
		});
		//********** Handle Will Call *******************
		if ($('input#pickup-element').prop('checked')) {
			$("span#willcalltxt").show();
			$("#pickup_select").val("0").change();
		}
		$('input#pickup-element').change(function(){
			if ($(this).prop('checked')) {
				$("span#willcalltxt").show();
				$("#pickup_select").val("0").change();
			}
		});
		$('input#ship-element').change(function(){
			if ($(this).prop('checked')) {
				$("span#willcalltxt").hide();
			}
		});
		//********** End Handle Will Call *******************
	}
});
</script>
<script>
//********** Enable/Disable "Submit Order" button based on approval *****************************************************
$(document).ready(function () {
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
		//console.log($("select[name='bill_code10']").val());
	});

	//********** Move approval yes/no to just above "Submit Order"*******************
	$("tr:contains('I have verified and approve this order:')").appendTo($("p.approve_order").parents("tr").parent());
	//*******************************************************************************
});
//***********************************************************************************************************************
</script>
