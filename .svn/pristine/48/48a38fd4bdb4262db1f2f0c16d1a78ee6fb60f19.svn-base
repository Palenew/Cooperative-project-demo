
$(window).load(function() {

	// 服务内容-合作伙伴
	function myfullBox(){
		if( $(window).width()>959 ){
			$('.m-history,.m-partner').height($('.canvas').height());
		}else{
			$('.m-history,.m-partner').height('auto');
		}
	}
	myfullBox();
	$(window).on('resize',function(){
		myfullBox();
	});

});

$(document).ready(function() {
	// 轮换图
	$('.m-about .slider').width($(window).width());
	$(window).on('resize',function(){
		$('.m-about .slider').width($(window).width());
	});
	$('.m-about .slider').slick({
		dots:true
		// adaptiveHeight:true
	});
	$('.m-about .slider').on('init', function(slick, currentSlide){
		if( $(window).width()>959 ){
			$('.m-about .slider').find('[ani*="animated"]').each(function(){
				var _this = $(this);
				var _class = $(this).attr('ani');
				_this.removeClass(_class).css('opacity',0);
			});
		}
	});
	$('.m-about .slider').on('afterChange', function(slick, currentSlide){
		if( $(window).width()>959 ){
			$('.m-about .slider').find('[ani*="animated"]').each(function(){
				var _this = $(this);
				var _class = $(this).attr('ani');
				_this.removeClass(_class).css('opacity',0);
			});
			var _eq = currentSlide.currentSlide;
			$('.m-about .slider .slick-active').find('[ani*="animated"]').each(function(){
				var _this = $(this);
				var _class = $(this).attr('ani');
				var _time = $(this).attr('ani-time');
				setTimeout(function(){
					_this.stop().addClass(_class).css('opacity',1);
				},_time);
			});
		}
	});

	// 全屏滚动padding值
	var _pt = '100px';
	function mypt(){
		if( ($(window).width()>959)&&($(window).height()>570) ){
			if( $(window).height()<=900 ){
				_pt = '80px';
			}else{
				_pt = '100px';
			}
		}else{
			_pt = '0';
		}
	}
	mypt();

	function myBg(){
		if( ($(window).width()>959)&&($(window).height()>570) ){
			$('.section .canvas').remove();
		}else{
			$('.canvas').prependTo('.section');
			$('#banner .canvas').remove();
		}
	}
	myBg();

	$(window).on('resize',function(){
		mypt();
		myBg();
	});

	// 全屏滚动
	$('#dowebok').fullpage({
		'paddingTop':_pt,
		onLeave: function(index, nextIndex, direction){
			// 动画
			if( $(window).width()>959 ){
				$('[ani*="animated"]').each(function(){
					var _this = $(this);
					var _class = $(this).attr('ani');
					_this.removeClass(_class).css('opacity',0);
				});
				$(".section").eq(nextIndex-1).find('[ani*="animated"]').each(function(){
					var _this = $(this);
					var _class = $(this).attr('ani');
					var _time = $(this).attr('ani-time');
					setTimeout(function(){
						_this.stop().addClass(_class).css('opacity',1);
					},_time);
				});
			}

			// 背景色切换
			switch (nextIndex){
				case 1:
					$('.canvas').css('background-color','transparent');
					break;
				case 2:
					$('.canvas').css('background-color','#3f3f3f');
					break;
				case 3:
					$('.canvas').css('background-color','#e2353e');
					break;
				case 4:
					$('.canvas').css('background-color','#f5f5f5');
					break;
				case 5:
					$('.canvas').css('background-color','#e2353e');
					break;
				default:
					$('.canvas').css('background-color','transparent');
					break;
			}
		}
    });

	$('#nav li').click(function(event) {
		if( ($(window).width()<=959)||($(window).height()<=570) ){
			var _id = $(this).attr('data-anchor');
			$('html,body').stop().animate({
				'scrollTop':$(_id).offset().top-52
			},500);
			$('body,.menuBtn').removeClass('open');
			$('#nav ul').stop().slideUp();
		}else{
			$('#nav ul').stop().slideDown();
			var _eq = $(this).index();
			switch (_eq){
				case 0:
					$.fn.fullpage.moveTo(2);
					break;
				case 1:
					$.fn.fullpage.moveTo(3);
					break;
				case 2:
					$.fn.fullpage.moveTo(1);
					break;
				case 3:
					$.fn.fullpage.moveTo(4);
					break;
				case 4:
					$.fn.fullpage.moveTo(5);
					break;
				default:
					$.fn.fullpage.moveTo(1);
					break;
			}
		}
	});
	function myNav(){
		if( ($(window).width()<=959)||($(window).height()<=570) ){
			$('body,.menuBtn').removeClass('open');
			if( $(window).width()<=767 ){
				$('#nav ul').stop().slideUp();
			}else{
				$('#nav ul').stop().slideDown();
			}
		}else{
			$('#nav ul').stop().slideDown();
		}
	}
	myNav();
	$(window).on('resize',function(){
		myNav();
	});

	$('.NextPage').click(function(){
		if( ($(window).width()<=959)||($(window).height()<=570) ){
			$('html,body').stop().animate({
				'scrollTop':$('#page1').offset().top-52
			},500);
		}else{
			$.fn.fullpage.moveSectionDown();
		}
	});
	
	function myfullpage(){
		if( ($(window).width()<=959)||($(window).height()<=570) ){
			$.fn.fullpage.destroy('all');
			$('#banner').height( $(window).height() );
		}else{
			$.fn.fullpage.reBuild();
		}
	}
	myfullpage();
	$(window).on('resize',function(){
		myfullpage();
	});


});
