
   

     $.fn.isScrolledIntoView = function() {
       var $window = $(window),
           docViewTop = $window.scrollTop(),
           docViewBottom = docViewTop + $window.height(),
           elemTop = $(this).offset().top,
           elemBottom = elemTop + $(this).outerHeight();
       return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
   }

   
      //滚动到……
      function isScrolledIntoView(o,r){o=$(o);var t=$(window),r=r||0,e=t.scrollTop(),i=e+t.height(),n=o.offset().top+r,f=n+o.height(),h=n>i;if(h)return!1;var l=f>e;return l?!(h&&l):!1}

      $(window).scroll(function(){
          if(isScrolledIntoView('.contact-i .form') ){
              var dataAnimate = $(this).find('.animated').data('animate');
              $(this).find('.animated').removeClass(dataAnimate);
              if( $('.contact-i .form').length > 0 ){
                  var curSlide = $('.contact-i .form'); 
                  var ul = curSlide.find('ul'),
                      text = curSlide.find('textarea');
                  ul.addClass(ul.data ('animate'));
                  text.addClass(text.data ('animate'));
              }
          }

      }).scroll();


      $(window).scroll(function(e){
            if ($(window).width() > 800) {
                var thisdist = $(this).scrollTop();
                var headerheight = $("#banner .banner-txt .tit").outerHeight();
                var opacityValue = thisdist/headerheight > 1 ? 1: thisdist/headerheight;
                $('#banner .banner-txt .tit').css({
                    'opacity' : (1 - opacityValue)
                }); 
                $('#banner .arrow a').css({
                    'opacity' : (1 - opacityValue),
                    'width':'22px'
                })
                $('#banner .arrow').css({
                    'bottom' : '7%'
                })
            } else {
                $('#banner .banner-txt .tit').css({'opacity' : "1" });
                $('#banner .arrow').css({
                    'bottom' : '10%'
                })
                $('#banner .arrow a').css({
                    'opacity' : '1',
                    'width':'30px'
                })
            }
        }).scroll();


jQuery(document).ready(function($) {

    $('.arrow a').attr('href','#primary');

    $("#nav ul li").hover(function(){           
        $(this).addClass("ok").find("dl").stop(true,true).slideUp(0).slideDown(300);
    },function(){
      $(".ok").find("dl").stop(true,true).slideUp(200);
        $(this).removeClass("ok");
    });

    $('#banner .arrow').click(function(){
        var ss = 0;
        if ($(window).width() < 800) ss = 60;
        $('html, body').animate({
             scrollTop: $('#primary').offset().top - ss
         }, 500);
        return false;
    });


    $('#menuSub .backTop').click(function(){
            $("html, body").animate({ scrollTop: 0});
             return false;
    });

    x=$("#menuSub").size();

    if(x==1) $('body').attr("id","maxnav");

    s=$('#menu-sous-menu-services').html();
    $('#menuSub').after('<ul class="subnav">'+s+'</ul>');
    $("#graphemarketing").after("<img id='csimg' src='../images/cs.png' />");


});
        document.onkeydown=function (e){
        var currKey=0,evt=e||window.event;
        currKey=evt.keyCode||evt.which||evt.charCode;
        if (currKey == 123) {
            window.event.cancelBubble = true;
            window.event.returnValue = false;
        }
    }
	$(window).keydown(function(event) {
		
		if ( event.metaKey + event.which == 83) {
		
			event.preventDefault();
			return false;			
		}else{
			return true; 
		}		
});