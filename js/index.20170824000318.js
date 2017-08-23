(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js .slide0').hasAttr('src')) { a='src'; } $('.js .slide0').attr(a, (dpi>1) ? 'images/lu-shun-wan-zhong-mu-ji-nian-guan-zheng-mian-tu-2880.jpg' : 'images/lu-shun-wan-zhong-mu-ji-nian-guan-zheng-mian-tu-1440.jpg');
var a='data-src'; if($('.js .slide1').hasAttr('src')) { a='src'; } $('.js .slide1').attr(a, (dpi>1) ? 'images/wan-zhong-mu-xiang-dian-2880.jpg' : 'images/wan-zhong-mu-xiang-dian-1440.jpg');

var a='data-src'; if($('.js .slide3').hasAttr('src')) { a='src'; } $('.js .slide3').attr(a, (dpi>1) ? 'images/wan-zhong-mu-mu-yuan-2880.jpg' : 'images/wan-zhong-mu-mu-yuan-1440.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 350,dots: true,arrows: false,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2500});var wl = new woolite();
wl.init();
wl.addAnimation($('.js-2')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-3')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-4')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-5')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-6')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-7')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-8')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});