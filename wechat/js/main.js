
var key = "g0jmgfENiiETRN96vrGvyrZaIZGkEgg8";
$(document).ready(function() {
  $.init();

  $("#start_time").picker({
  	toolbarTemplate: '<header class="bar bar-nav start_time_header">\
		  <button class="button button-link pull-right close-picker">确定</button>\
		  <h1 class="title">请提前一小时预约</h1>\
		  </header>',
		cols: [
	    {
	      textAlign: 'center',
	      values: ['今天', '明天', '后天']
	      //如果你希望显示文案和实际值不同，可以在这里加一个displayValues: [.....]
	    },
	    {
	      textAlign: 'center',
	      values: ['1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时', '9时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时', '24时']
	    },
	    {
	      textAlign: 'center',
	      values: ['1分', '2分', '3分', '4分', '5分', '6分', '7分', '8分', '9分', '10分', '11分', '12分', '13分', '14分', '15分', '16分', '17分', '18分', '19分', '20分', '21分', '22分', '23分', '24分',
	      				'25分', '26分', '27分', '28分', '29分', '30分', '31分', '32分', '33分', '34分', '35分', '36分', '37分', '38分', '39分', '40分', '41分', '42分', '43分', '44分', '45分', '46分', '47分', '48分',
	      				'49分', '50分', '51分', '52分', '53分', '54分', '55分', '56分', '57分', '58分', '59分', '60分']
	    }
	  ]
  });

  $(".people_number .button").click(function(event) {
  	$(".people_number .button").removeClass("active");
  	$(this).addClass("active");

  	$("#single_money").val($(this).attr("data-money"));
  	$("#people_number").val($(this).attr("data-people"));
  	$("#total_money").val(parseInt($(this).attr("data-money")) * parseInt($(this).attr("data-people")))
  });

  $(document).on('click','.pay_confirm_cantainer .cancel_order a', function () {
    $.confirm('订单取消后将不能恢复<br>请确认', function () {
    });
  });

  $(document).on('click','.send_order_cantainer .cancel_order a', function () {
    $.confirm('订单取消后将不能恢复<br>请确认', function () {
    });
  });

  $(document).on('click','.order_detail_cantainer .cancel_order a', function () {
    $.confirm('订单取消后将不能恢复<br>请确认', function () {
    });
  });

  $(document).on('click','.my_order_cantainer .cancel_order a', function () {
    $.confirm('订单取消后资金会在1-7个工作日内返还至<br>您的账户，是否要取消订单？', function () {
    });
  });

});

this.add_number = function(elem , elem_display){
	$(elem).val(parseInt($(elem).val()) + 1);

	if (elem_display != "") {
		$(elem_display).val("￥" + parseInt($("#single_money").val()) * (parseInt($(elem).val())) );
	}
}

this.minu_number = function(elem , elem_display){
	$(elem).val(parseInt($(elem).val()) - 1);

	if (elem_display != "") {
		$(elem_display).val("￥" + parseInt($("#single_money").val()) * (parseInt($(elem).val())) );	
	}
}

/*
	页面初始化ajax调用
*/
this.ajax_load = function(url,method,params,method_name){

	/*
	$.ajax({
		url: url,
		type: method,
		dataType: 'json',
		data: params,
		beforeSend:function(){
			$.mobile.loadingMessageTextVisible = true;  
    	$.mobile.loadingMessageTheme = 'a';  
      $.mobile.showPageLoadingMsg(); 
		},
		success:function(data){
			var function_name = eval(method_name);
			new function_name(data);
		},
		complete: function(){
			$.mobile.loading("hide");
		}
	});
	
	var data = "";
	var function_name = eval(method_name);
	new function_name(data);
	*/
}

this.index_load = function(data){

	for(var i = 0; i<5; i++){
		var index_item_html = new StringBuffer();

		index_item_html.append('<div class="ln2_item">');
	  index_item_html.append('  <div class="ln2_item_title">华北地区</div>');
	  index_item_html.append('  <div class="ln2_item_content">');
	  index_item_html.append('    <ul>');
	  index_item_html.append('      <li>');
	  index_item_html.append('        <a href="#">北京</a>');
	  index_item_html.append('      </li>');
	  index_item_html.append('      <li>');
	  index_item_html.append('        <a href="#">天津</a>');
	  index_item_html.append('      </li>');
	  index_item_html.append('      <li>');
	  index_item_html.append('        <a href="#">河北</a>');
	  index_item_html.append('      </li>');
	  index_item_html.append('      <li>');
	  index_item_html.append('        <a href="#">山东</a>');
	  index_item_html.append('      </li>');
	  index_item_html.append('      <li>');
	  index_item_html.append('        <a href="#">山西</a>');
	  index_item_html.append('      </li>');
	  index_item_html.append('    </ul>');
	  index_item_html.append('  </div>');
	  index_item_html.append('</div>');

	  $(".index_container .cantainer_ln2").append(index_item_html.toString());

	}

}

function StringBuffer() {
  this.__strings__ = new Array();
};

StringBuffer.prototype.append = function (str) {
    this.__strings__.push(str);
    return this;
};

StringBuffer.prototype.toString = function () {
    return this.__strings__.join("");
};





