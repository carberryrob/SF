<div class="footer_row3">
<div><img style="opacity: 100%;" src="con/White-PoweredBySF-2023-260.png" alt="Online Storefront Powered by Strategic Factory" class="img-fluid mt-3"></div>
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


$(document).ready(function () {
	/*********Billing Table************/
	/*$("table#billing-pricetable").find("td.input.right.totalinpcol").attr("colspan", "1");
	$('<td colspan="1" class="newtotalcol right">').insertBefore($("table#billing-pricetable").find("td.input.right.totalinpcol"));
	$('td.newtotalcol.right').html($("td.input.right.updatetotalcol").html());
	$("td.input.right.updatetotalcol").html("");
	$("table#billing-pricetable").find("td.input.right.totalinpcol").removeClass("right").addClass("left");
	*/
	/***********************************/
	if ($("tr.form-sublabel.negativeprice:contains('Budget')").length > 0) {
		var styles = {"font-weight" : "Bold", "text-align": "right", "font-style": "italic"};

		//$("tr.form-sublabel.negativeprice td:contains('Budget')").css('font-weight', 'bold');
		$("tr.form-sublabel.negativeprice td:contains('Budget')").css(styles);
		var voucher = $("tr.form-sublabel.negativeprice:contains('Budget')");
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

	$( "#requestor-info" ).hide();
	$('div.pagetitle:contains("Requestor Information:")').hide();


	//var sm = getQueryVariable('ship_method', $("#pageurl").text())
	//console.log('************** ship_method' + ':' + sm);
	//sm = getQueryVariable('login_name_last', $("#pageurl").text())
	//	console.log('************** login_name_last' + ':' + sm);
	
	// Get all pairs ****** var sm = getQuery( '', $("#pageurl").text())
	
	$(".note:contains('Non-taxable items marked with')").hide();
	if($('form[action="accept_bill.cgi"]').length >= 1) {
		var sm = getQuery( 'ship_method', $("#pageurl").text())
		//console.log('ship_method' + ':' + sm);
		////var sel = $('select#service_code').val(sm).change();
		$('select#service_code option').each(function() {
			//console.log($(this).val());
			if ($(this).val() == sm) {
				$(this).prop('selected', true);
				//console.log($(this).text());
				$('<span>' + $(this).text().replaceAll(' - -', ' - $0.00') + '</span>').insertBefore($(this).parent());
				$(this).parent().hide();
			}else{
				$(this).remove();
			}
		});
	}
	
	if($('form[action="bill.cgi"]').length >= 1) {
		
		var shipArray = [{"element":$("select#ship_office").attr('id'), "value":$("select#ship_office").val()}];
		$("table#shipaddr-info").find("input[type='text']").each(function() {
			shipArray.push({"element": $(this).attr('id'), "value": $(this).val()});
			//console.log( $(this).attr("id") + " : " + $(this).val() );
		});
		////$('select#ship_office').val('4 - Other...').change();
		//console.log( shipArray );
		/*$.each( shipArray, function( i, obj ) {
			//console.log(obj.element + " : " + obj.value + " : " + i);
			//$("#" + obj.element).val(obj.value);
			if (i == 0) {
				$("#" + obj.element).val(obj.value).change();
			}else{
				$("#" + obj.element).val(obj.value);
			}
		});*/
		//$('select#ship_office').change();
	}
});
</script>
