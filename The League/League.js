<div class="footer_row3">
<div><img style="opacity: 100%;" src="con/White-PoweredBySF.png" alt="Online Storefront Powered by Strategic Factory" class="img-fluid mt-3"></div>
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
	$('head').append('<link rel="shortcut icon" href="https://static.wixstatic.com/media/c521a5_d07d5b8a1ef045d495887b4a12d04394%7Emv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/c521a5_d07d5b8a1ef045d495887b4a12d04394%7Emv2.png" type="image/png">');
	$( "link[href^='css/header.css']" ).removeAttr( "media" );
	$( "#header_logo img.no_mobile" ).wrap( '<a style="display: inline-block;" href="index.cgi">' );
	$( "#header_logo img.no_desktop" ).wrap( '<a style="display: inline-block;" href="index.cgi">' );
	$(".note:contains('Non-taxable items marked with *')").hide();
	var nostar = $('td.numcol.pricecol:contains("*")').text().replace("*", "");
	$('td.numcol.pricecol:contains("*")').text(nostar);
	if($('input[name="corp_tag"]').val() == 'Internal') {
		$("#saleblurb").hide();
	}
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
	//$( "#shipmeth-info" ).hide();
	if( $(".item_count").text() > 0) {
		$("button#submit_cancel").has("span:contains('Cancel Order')").show();
	} else{
		$("button#submit_cancel").has("span:contains('Cancel Order')").hide();
	}



    // Set Shipping....
	if($('form[action="accept_bill.cgi"]').length >= 1 || $('form[action="review_bill.cgi"]').length >= 1) {
        
        var sm = getQuery( 'ship_method', $("#pageurl").text())
		// console.log('ship_method' + ':' + sm + 'sm exist = ' + sm);

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
                else{
                    $(this).remove();
                }
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
                    else{
                        $(this).remove();
                    }
                });
            }
         
        }
		$('select#service_code option').each(function() {
            console.log($(this).val() + " | " + $(this).is(':selected'));
			//console.log($(this).val() == 'standard_delivery' && $(this).is(':selected'));
			if ($(this).val() == 'standard_delivery' && $(this).is(':selected')) {
				$("span:contains('Please contact Breanna Durst')").show();
				// return false;
			}else{
				$("span:contains('Please contact Breanna Durst')").hide();
				// return true;
			}
		});
	}
	
	// if($('form[action="bill.cgi"]').length >= 1) {
		//$('select#ship_office').change();
		
		/*var shipArray = [{"element":$("select#ship_office").attr('id'), "value":$("select#ship_office").val()}];
		$("table#shipaddr-info").find("input[type='text']").each(function() {
			shipArray.push({"element": $(this).attr('id'), "value": $(this).val()});
			//console.log( $(this).attr("id") + " : " + $(this).val() );
		});
		var Sel2 = $('select#ship_office:contains("2 - ")').val();
		console.log(Sel2);
		$('select#ship_office').val(Sel2).change();
		//console.log( shipArray );
		$.each( shipArray, function( i, obj ) {
			if (i == 0) {
				$("#" + obj.element).val(obj.value).change();
			}else{
				$("#" + obj.element).val(obj.value);
			}
		});*/
	// }
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
