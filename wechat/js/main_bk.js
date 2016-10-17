

$(document).ready(function() {
	$.extend($.validator.messages, {
    required: "必选字段",
    remote: "请修正该字段",
    email: "请输入正确格式的电子邮件",
    url: "请输入合法的网址",
    date: "请输入合法的日期",
    dateISO: "请输入合法的日期 (ISO).",
    number: "请输入合法的数字",
    digits: "只能输入整数",
    creditcard: "请输入合法的信用卡号",
    equalTo: "请再次输入相同的值",
    accept: "请输入拥有合法后缀名的字符串",
    maxlength: $.validator.format("请输入一个长度最多是 {0} 的字符串"),
    minlength: $.validator.format("请输入一个长度最少是 {0} 的字符串"),
    rangelength: $.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
    range: $.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
    max: $.validator.format("请输入一个最大为 {0} 的值"),
    min: $.validator.format("请输入一个最小为 {0} 的值")
	});
});

this.getLocation = function(){
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  }else{x.innerHTML="Geolocation is not supported by this browser.";}
}
this.showPosition = function(position){
  x.innerHTML="Latitude: " + position.coords.latitude +
  "<br />Longitude: " + position.coords.longitude;
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

/*
	表单提交ajax调用
*/
this.login_form_submit = function(){
  $("#login_form").validate({
    doNotHideMessage: true,
    errorClass: "error",
    errorElement: "label",
    rules: {
      user_name:{
        required:true
      },
      password:{
        required:true
      }
    },
    messages: {

    }
  });
  
  if($('#login_form').valid()){
    
    $('#login_form').ajaxSubmit({
      dataType: "json",
      type: "POST",
      beforeSubmit: function(){
        $.mobile.loading( "show" );
			},
      success: function (data) {
        //$(".body_overlay").hide(500);
        if (data.result == false) {
          layer.msg(data.message);
        } else {
          layer.msg(data.message);
          location.href = action_base_dir + "/admin/adminList";
        }
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert("errorThrown:" + errorThrown);
      },
      complete: function(){
				$.mobile.loading("hide");
			}
    });
  }
};

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





