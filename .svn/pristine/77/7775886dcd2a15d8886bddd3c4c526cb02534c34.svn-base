/**
 * Created by Administrator on 2016/8/3 0003.
 */


$(function () {


    // 固定导航栏开始
    var flag = true;
    var flagMsg = true;

    $(window).scroll(function () {
        if ($(window).scrollTop() > $("#home").height()) {
            $("#nav").addClass("fixed").css("zIndex", "9");
            $("#home").css("marginBottom", $("#nav").height());
        } else {
            $("#nav").removeClass("fixed").css("zIndex", "9");
            $("#home").css("marginBottom", 0);
        }

        if ($(window).scrollTop() >= 1300 && flag) {
            // 粉丝数开始
            flag = false;
            flowmerNum($(".flowmer-num1"), 17474);
            flowmerNum($(".flowmer-num2"), 6930);
            flowmerNum($(".flowmer-num3"), 1584);
            // 粉丝数结束
        }

        //form部分划入
        if ($(window).scrollTop() >= $("#block4").offset().top - 45 && flagMsg) {
            flagMsg = false;

        }
    });

    // 导航栏导航开始
    $(window).load(function () {
        var arrTitle = [
            $("#block1").offset().top - 45,
            $("#block2").offset().top - 45,
            $("#block3").offset().top - 45,
            $("#block4").offset().top - 45
        ];
        console.log(arrTitle);

        $(".menu").each(function (index, element) {
            $(element).click(function () {
                $("body,html").animate({
                    "scrollTop": arrTitle[index]
                });
            });
        });

        // logo滚动到顶部
        $("#navLogo").click(function () {
            $("body,html").animate({
                "scrollTop": 0
            });
        })
    })

    // 固定导航栏结束导航栏导航结束


    // 遮罩部分开始
    var winWidth = $(window).width();
    $(".block2")
        .css({
            "width": winWidth + "px",
            "overflow": "hidden",
        });
    $(".mask").width(winWidth + 100);


    $(".mask img")
        .width((winWidth) / 4)

        .mouseenter(function () {

            $(this)
                .stop(false, true)
                .animate({"opacity": 0}, 800, function () {
                    //背景变换完成后执行
                    var thisH2 = $(this).parent().children("h2");
                    var thisDiv = $(this).parent().children(".mask-icon");
                    var maskH2Width = thisH2.width();
                    thisH2.css("marginLeft", -maskH2Width / 2 + "px");
                    thisH2.css("opacity", 0);
                    thisDiv.css("opacity", 0);
                    thisH2.stop(false, true).animate({"top": "160px", "opacity": 1}, 500);
                    thisDiv.stop(false, true).animate({"top": "40px", "opacity": 1}, 500);

                })
                .siblings()
                .stop(false, true)
                .animate({"opacity": 1}, 500);
        });
    $(".mask img").mouseleave(function () {

        $(this)
            .stop(false, true)
            .animate({"opacity": 1}, 300);
        $(".mask h2").stop(false, true)
            .animate({"top": "245px", "opacity": 0}, 300);
        $(".mask .mask-icon").stop(false, true)
            .animate({"top": "-100px", "opacity": 0}, 300);


    });
    $(".mask li")
        .width((winWidth) / 4)
        .height($(".mask img").height())
        .addClass("box-shadow");

    // 遮罩部分结束


    // 轮播图
    var pic = 0;
    // 克隆第一张图
    var lie = $(".screen>ul>li").eq(0).clone(false, true);
    $(".screen>ul").append(lie);

    //自动轮播
    setInterval(function () {

        $(".screen>ul").stop(false, true);

        if (pic === $(".screen>ul>li").length - 1) {
            $(".screen>ul").css("left", 0);
            pic = 0;
        }
        pic++;
        $(".screen>ul").animate({
            "left": "-=1350px"
        });
    }, 4000);


    // 显示隐藏箭头
    $("#wheel").mouseenter(function () {
        $("#arr").css("display", "block");
    })
        .mouseleave(function () {
            $("#arr").css("display", "none");
        });
    //右箭头点击事件

    $("#arr #right").click(function () {
        $(".screen>ul").stop(false, true);
        if (pic === $(".screen>ul>li").length - 1) {
            $(".screen>ul").css("left", 0);
            pic = 0;
        }
        pic++;
        $(".screen>ul").animate({
            "left": "-=1350px"
        });
    });
    //左箭头事件
    $("#arr #left").click(function () {
        $(".screen>ul").stop(false, true);
        if (pic === 0) {
            pic = $(".screen>ul>li").length - 1;
            $(".screen>ul").css("left", -1350 * pic);
        }
        pic--;
        $(".screen>ul").animate({
            "left": "+=1350px"
        });
    });
    // 轮播图结束

    // 返回顶部

    var timer = null;
    var target = 0;
    $("#returnTop").mouseenter(function () {
        clearInterval(timer);
        timer = setInterval(function () {
            $("#returnTop")[0].style.backgroundPositionY = target-- +"px";
        }, 20)
    })
        .mouseleave(function () {
        clearInterval(timer);
        target=0
        $("#returnTop")[0].style.backgroundPositionY = target +"px";
    })
        .click(function () {
            $("body,html").animate({
                "scrollTop": 0
            },"slow");
        })


});


// 数字缓增函数
function flowmerNum(obj, num) {
    var leader = 0;
    obj.timer = setInterval(function () {
        var step = (num - leader) / 50;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        obj.text("" + leader);
        if (leader == num) {
            clearInterval(obj.timer);
        }
    }, 10)
}


