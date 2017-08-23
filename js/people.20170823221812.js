(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js-15').hasAttr('src')) { a='src'; } $('.js-15').attr(a, (dpi>1) ? 'images/ding-ru-chang-378.jpg' : 'images/ding-ru-chang-189.jpg');
var a='data-src'; if($('.js-16').hasAttr('src')) { a='src'; } $('.js-16').attr(a, (dpi>1) ? 'images/song-qing-400.jpg' : 'images/song-qing-200.jpg');
var a='data-src'; if($('.js-17').hasAttr('src')) { a='src'; } $('.js-17').attr(a, (dpi>1) ? 'images/deng-shi-chang-560.jpg' : 'images/deng-shi-chang-280.jpg');
var a='data-src'; if($('.js-18').hasAttr('src')) { a='src'; } $('.js-18').attr(a, (dpi>1) ? 'images/lin-yong-sheng-280.jpg' : 'images/lin-yong-sheng-140.jpg');
var a='data-src'; if($('.js-19').hasAttr('src')) { a='src'; } $('.js-19').attr(a, (dpi>1) ? 'images/xu-bang-dao-260.jpg' : 'images/xu-bang-dao-130.jpg');
var a='data-src'; if($('.js-20').hasAttr('src')) { a='src'; } $('.js-20').attr(a, (dpi>1) ? 'images/lu-shun-da-tu-sha-534.jpg' : 'images/lu-shun-da-tu-sha-267.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-15').unveil(50);
$('.js-21 source').unveil(50);
$('.js-16').unveil(50);
$('.js-22 source').unveil(50);
$('.js-17').unveil(50);
$('.js-23 source').unveil(50);
$('.js-18').unveil(50);
$('.js-24 source').unveil(50);
$('.js-19').unveil(50);
$('.js-25 source').unveil(50);
$('.js-20').unveil(50);
$('.js-26 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-10')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-11')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-12')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-13')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-14')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-15')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});