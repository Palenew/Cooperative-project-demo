/**
 * Created by Administrator on 2016/8/3.
 */
$(function(){
    $(".content-one .join-us ul").animate({
        "height":"72px"
    },500);
    $(".content-one .join-us-l,.content-one .join-us-r").animate({
        "top":"10px",
        "opacity":1

    },1000);

    $(".content-one .page1 .page-pic img").animate({
            "top":"20",
            "opacity":1,

    },500);


    $(".service-list-1").animate({
        "left": 71,
        "top":-20
    },1000);
    $(".service-list-2").animate({
        "left": 384,
        "top":-20
    },1100);
    $(".service-list-3").animate({
        "left": 687,
        "top":-20
    },1200);
    $(".service-list-4").animate({
        "left": 990,
        "top":-20
    },1300);

    //�������ӡ��??
    $(".link-haitian").click(function(){

        $(".content-one .join-us-l,.join-us-r").fadeOut("fast",function(){
            $(".content-one .join-us-l,.join-us-r").fadeIn(500);
        })

        $(".content-one").animate({
            "opacity":0
            //"display":"none"

        },2,function(){
            //$(".content-one").slideDown();
            $(".content-one").animate({
                "opacity":1
            },1000)

        })

        //$("body,html").stop().animate({"scrollTop":$(".content-one").offset().top},1000)
        $("body,html").stop().animate({"scrollTop":$(".content-one").offset().top},1000)


    });
    //点击海天景观跳转页面
    $(".content .join-us-r").click(function(){
        $(".page1").slideUp();
        $(".box").slideDown()
    });

    //点击海天印象跳转
    $(".content .join-us-l").click(function(){
        $(".page1").fadeIn(1000);
        $(".box").fadeOut()
    });

    //轮播图
    var $key=0
    // 点击右侧按钮
    $(".right").click(function(event) {
        $(".box ul li").eq($key).stop().fadeOut();
        $key++;
        $key=$key%5
        $(".box ul li").eq($key).stop().fadeIn();
        $("ol li").eq($key).addClass("current").siblings().removeClass("current")

    });
    // 点击左侧按钮
    $(".left").click(function(event) {
        $(".box ul li").eq($key).stop().fadeOut();
        $key--;
        $key=$key%5
        $(".box ul li").eq($key).stop().fadeIn();
        $("ol li").eq($key).addClass("current").siblings().removeClass("current")

    });
    // 点击小方�?
    $("ol li").click(function(event) {
        $(".box ul li").eq($key).stop().fadeOut();
        $key=$(this).index()
        $("ol li").eq($key).addClass("current").siblings().removeClass("current")
        $(".box ul li").eq($key).stop().fadeIn();

    });
    // 启定时器
    var timer=setInterval(autoplay,3000)
    function autoplay(){
        $(".box ul li").eq($key).stop().fadeOut();
        $key++;
        $key=$key%5
        $(".box ul li").eq($key).stop().fadeIn();
        $("ol li").eq($key).addClass("current").siblings().removeClass("current")
    }

    // 鼠标经过盒子清除定时器
    $(".box").hover(function() {
        $(".left,.right").stop().show();
        clearInterval(timer)
        timer=null
    }, function() {
        $(".left,.right").stop().hide();
        clearInterval(timer)
        timer=setInterval(autoplay,3000)
    });

    //С���ֲ�ͼ����



//点击海天服务
    $(".link-service").click(function(){
        $("body,html").stop().animate({"scrollTop":$(".content-two").offset().top-20},1000);


        $(".service-list li").css({"left":0,"top":"20px"})
        //$(".service .page2").css({"display":"none"})

        $(".service-list-1").animate({
            "left": 71,
            //"left": 25%,
            "top":-20
        },1000);
        $(".service-list-2").animate({
            "left": 384,
            "top":-20
        },1100);
        $(".service-list-3").animate({
            "left": 687,
            "top":-20
        },1200);
        $(".service-list-4").animate({
            "left": 990,
            "top":-20
        },1300);

        $(".service .page2").hide().slideDown();


    });




    //鼠标经过显示隐藏div
    $(".service-list li").mouseenter(function(){
        $(this).children("div")
            .slideDown();
        //$(this).children("img").css({"height":154,"width":154});
    });
    $(".service-list li").mouseleave(function(){
        $(this).children("div").slideUp();
    });

    //winodw
    $(".window").mouseenter(function(){
        $(".window").stop().animate({
            "left":"1200px"
        },1000)
    });

    $(".window").mouseleave(function(){
        $(".window").stop().animate({
            "left":"1300px"
        },1000)
    });
    //���ӡ����Ļ����
    $(".window-impress").click(function(){
        $("body,html").stop().animate({"scrollTop":$(".content-one").offset().top},1000);
    });

    //���ӡ��??
    $(".window-service").click(function(){
        $("body,html").stop().animate({"scrollTop":$(".content-two").offset().top},1000);
    });

    //�����������.����չʾҳ����ת
    $(".service-content .join-us-r").click(function(){
        $(".content-two-l").fadeOut(1000);
        $(".content-two-r").fadeIn(1000);
    });

    $(".service-content .join-us-l").click(function(){
        $(".content-two-r").fadeOut();
        $(".content-two-l").fadeIn();
        //l��ʾ
        $(".service-list li").css({"left":0,"top":"20px"})
        //$(".service .page2").css({"display":"none"})

        $(".service-list-1").animate({
            "left": 71,
            //"left": 25%,
            "top":-20
        },1000);
        $(".service-list-2").animate({
            "left": 384,
            "top":-20
        },1100);
        $(".service-list-3").animate({
            "left": 687,
            "top":-20
        },1200);
        $(".service-list-4").animate({
            "left": 990,
            "top":-20
        },1300);

        $(".service .page2").hide().slideDown();

    });

    //��꾭������չʾ��ͼƬͻ��Ч�� ,��ʾ����
    $(".content-two-r ul li").each(function(index,ele){
        $(ele).mouseenter(function(){

            $(ele).children().stop().animate({
                "width":340,
                "height":220,
                "marginTop":-10,
                "marginLeft":-10
            },600);
            $(ele).append($(".currnt-div"));

            $(".currnt-div").stop().animate({
                "opacity":0.6,
                "width":340,
                "height":220,
                "marginTop":-10,
                "marginLeft":-10

            },600);


        });

        $(ele).mouseleave(function(){
            $(ele).children().stop().animate({
                "width":320,
                "height":200,
                "marginTop":0,
                "marginLeft":0
            },600);
        });


    });





})
