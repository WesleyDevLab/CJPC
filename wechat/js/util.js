//获取url的参数
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
 }

/** localStorage */
function setLocalStorage(key, value) {
    window.localStorage.setItem(key, encodeURIComponent(value));
}
function getLocalStorage(key) {
    return window.localStorage.getItem(key) ? decodeURIComponent(window.localStorage.getItem(key)) : null;
}
function clearLocalStorage(key) {
    window.localStorage.removeItem(key);
}

//获取表单数据
function getFormParam($form) {
    var inputs = $form.find("input");
    var paramObj = {};
    inputs.each(function (index, input) {
        paramObj[input.name] = input.value.replace(/<[^>]+>/g, "");
    })
    console.log(paramObj);
    return paramObj;
}

