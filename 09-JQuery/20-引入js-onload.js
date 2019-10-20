//全部页面加载完自动执行
(function() {
  //jQuery操作
  $(window).load(function() {});
})();

//DOM操作-事件绑定
window.addEventListener("load", function() {});
//DOM操作
window.onload = function() {};

//当DOM树就绪后自动执行
$(document).ready(function() {});
//事件绑定
$(function() {});
