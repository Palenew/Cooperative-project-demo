/**
 * Created by asus on 2016/8/3.
 */

$(function(){
    //导航栏动画特效
    var timer=null;
    $(".ul-lists>.change").mouseenter(function(){
        $(this).children(".ul-lists-pubic").css("backgroundColor","red").stop(true,true).animate({"width":"70px"},1000);
        $(this).children(".ul-lists-show").slideDown(500);
    });
    $(".ul-lists>.change").mouseleave(function(){
        $(this).children(".ul-lists-pubic").stop(true,true).animate({"width":"0px"},1000);
        $(this).children(".ul-lists-show").slideUp(500);
    });
//轮播图特效
    var j=0;
    var i=0;
    $("#div1>#div1-ols>li").eq(0).addClass("current");

    timer=setInterval(function(){
        j++;
        if(j==5){
            $("#div1>#div1-uls").css("left","0px");
            j=1;
        }
        if(j>=4){
            $("#div1>#div1-ols>li").eq(0).addClass("current").siblings().removeClass("current");
        }
        var target=-$(window).width()*j;
        if(target!=0){
            $("#div1>#div1-uls").animate({"left":target},800);
            $("#div1>#div1-ols>li").eq(j).addClass("current").siblings().removeClass("current");
        }
    },2000);

    $("#div1>#div1-ols>li").mouseenter(function(){
        clearInterval(timer);
        $(this).eq(i).addClass("current").siblings().removeClass("current");
        var target=-$(this).index()*$(window).width();
        $("#div1>#div1-uls").animate({"left":target},800);
        if(j==5&&$(this).index()==0){
            $("#div1>#div1-uls").css("left","0px");
        }

        j=$(this).index();

    });
    $("#div1>#div1-ols>li").mouseleave(function(){
        timer=setInterval(function(){
            j++;
            if(j==5){
                $("#div1>#div1-uls").css("left","0px");
                j=1;
            }
            if(j>=4){
                $("#div1>#div1-ols>li").eq(0).addClass("current").siblings().removeClass("current");
            }
            var target=-$(window).width()*j;
            if(target!=0){
                $("#div1>#div1-uls").animate({"left":target},800);
                $("#div1>#div1-ols>li").eq(j).addClass("current").siblings().removeClass("current");
            }
        },2000);
    });
///客户风采区特效
    $("#mian-lists .main-ul-lists>li").mouseenter(function(){
        $(this).addClass("donghua")
    });
    $("#mian-lists .main-ul-lists>li").mouseleave(function(){
          var index =$(this).index();
        setTimeout(function(){
            $("#mian-lists .main-ul-lists>li").eq(index).removeClass("donghua")
        },3000)
    });
    var distestence;

    $(".showpic>ul>li").mouseenter(function(){

        distestence= $(this).children("h3").position();

        $(this).children("h3").stop().animate({"top":"80px","left":"100px","fontSize":"28px"},1000);

        $(this).children("p").stop().fadeIn(1000);
        $(this).children(".left").animate({"width":"407px"},1000).css("backgroundColor","black");
        $(this).children(".top").animate({"height":"102px"},1000).css("backgroundColor","black");
        $(this).children(".right").animate({"width":"407px","left":"15px"},1000).css("backgroundColor","black");
        $(this).children(".bottom").animate({"height":"100px","top":"140px"},1000).css("backgroundColor","black");
        $(this).stop().animate({"top":"-10px","left":"5px"})
    })

    $(".showpic>ul>li").mouseleave(function(){
        $(this).children("h3").stop().animate({"top":distestence.top+"px","left":distestence.left+"px","fontSize":"16px"},1000);
        $(this).children("p").stop().fadeOut(1000);
        $(this).stop().animate({"top":"0px","left":0})

        $(this).children(".left").animate({"width":"0px"},1000).css("backgroundColor","black");
        $(this).children(".top").animate({"height":"0px"},1000).css("backgroundColor","black");
        $(this).children(".right").animate({"width":"0px","left":"422px"},1000).css("backgroundColor","black");
        $(this).children(".bottom").animate({"height":"0px","top":"240px"},1000).css("backgroundColor","black");

    })
    $(".tfooter-ullist li").mouseenter(function(){
        $(this).children("span").animate({"opacity":"1"},1000)
    });
    $(".tfooter-ullist li").mouseleave(function(){
        $(this).children("span").animate({"opacity":"0"},1000)
    });
    $(document).scroll(function(){
        var scrollTop=$(this).scrollTop();
        console.log(scrollTop);
        if(scrollTop>1000){
            $(".tfooter-ullist>li").slideDown(5000)
        }else{
            $(".tfooter-ullist>li").slideUp(5000)
        }
    });
    $(".btn").click(function(){
        $(window).scrollTop(0);
    });


//随机产生一个div对象，并添加到window页面中
//    var flake=$("<div></div>").css({"position":"absolute","top":"-44px","width":"30px","color":"black","fontSize":"30px","fontWeight":"bold"}).html("选择天岳解决一切");
//    $(function(){
//        var documentHeight=$(document).height();
//        setInterval(function(){
//            var startPositonLeft=Math.random()*1920;
//            var endPositionTop=Math.random()*documentHeight;
//            var endPositionLeft=Math.random()*1920;
//            var durationFall=5000+Math.random()*3000;
//            $(flake.clone()).appendTo("body").css({
//                "left":startPositonLeft,
//            }).animate({
//                "top":endPositionTop,
//                "left":endPositionLeft,
//            },durationFall,function(){$(this).remove();});
//        },6000);
//    });
});


