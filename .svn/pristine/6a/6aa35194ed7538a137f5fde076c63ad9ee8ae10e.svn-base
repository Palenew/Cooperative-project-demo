
$(window).load(function() {

	var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	    }
	};

	if( isMobile.any()){
		$('#canvas1,#canvas2').remove();
	}else{
		// 初始化画布1
		var victor = new Victor("container", "output");
		var theme = [
			["#d3d3d4", "#ebebec"]
		]
		var color = theme[0];
		victor(color).set();

		// 初始化画布2
		$('.canvas').particleground({
			dotColor: 'rgba(255,255,255,0.1)',
			lineColor: 'rgba(255,255,255,0.1)',
			maxSpeedX: 0.05,
			maxSpeedY: 0.05
		});
	}
	
})

$(document).ready(function($) {



	// 手机导航
	$('.menuBtn').append('<b></b><b></b><b></b>');
	$('.menuBtn').click(function(event) {
		$(this).toggleClass('open');
		var _winw = $(window).width();
		var _winh = $(window).height();
		if( $(this).hasClass('open') ){
			$('body').addClass('open');
			if( (_winw<=959)||(_winh<=570) ){
				$('#nav ul').stop().slideDown();
			}
		}else{
			$('body').removeClass('open');
			if( (_winw<=959)||(_winh<=570) ){
			// if( (_winw<=959)&&(_winh<=600) ){
				$('#nav ul').stop().slideUp();
			}
		}
	});

	// 服务内容-图标翻转
	$('.m-list2 li').hover(function(){
		$(this).find('.front').removeClass('rotateIn').addClass('rotateOut');
		$(this).find('.back').removeClass('rotateOut').addClass('rotateIn');
	},function(){
		$(this).find('.front').removeClass('rotateOut').addClass('rotateIn');
		$(this).find('.back').removeClass('rotateIn').addClass('rotateOut');
	});

	$('.m-list3 li').hover(function(){
		$(this).find('.front').removeClass('rotateIn').addClass('rotateOut');
		$(this).find('.back').removeClass('rotateOut').addClass('rotateIn');
	},function(){
		$(this).find('.front').removeClass('rotateOut').addClass('rotateIn');
		$(this).find('.back').removeClass('rotateIn').addClass('rotateOut');
	});

	// 选项卡
	$('.jsTab .hd li').click(function(){
		var _eq = $(this).index();
		var _tab = $(this).parents('.hd');
		var _con = $(this).parents('.jsTab').find('.bd').find('.js-tab-con');
		_tab.find('li').eq(_eq).addClass('on').siblings('li').removeClass('on');
		_con.eq(_eq).show().siblings('.js-tab-con').hide();
	});

});
