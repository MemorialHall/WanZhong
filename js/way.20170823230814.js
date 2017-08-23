(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-32').attr('src', (dpi>1) ? 'images/lu-you-xian-lu-tu-938.jpg' : 'images/lu-you-xian-lu-tu-469.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-34').mouseenter(function() { $.loadImages((window.devicePixelRatio > 1) ? 'images/lu-you-xian-lu-tu-3200.jpg' : 'images/lu-you-xian-lu-tu-1600.jpg', function() { }) });
$('.js-34').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-34-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = (window.devicePixelRatio > 1) ? 'images/lu-you-xian-lu-tu-3200.jpg' : 'images/lu-you-xian-lu-tu-1600.jpg'; } } });
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-27')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-28')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-29')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-30')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-31')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-33')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});