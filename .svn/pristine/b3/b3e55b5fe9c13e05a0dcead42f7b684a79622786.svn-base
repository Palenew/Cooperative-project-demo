/**
 * Created by Administrator on 2016/8/6.
 */
$(function () {
    var index = 0;
    var scrollTop = 0;
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var top = (windowHeight - $("#indexPage").height()) / 2;

    var lisLength = $("#windowclint .section").length;
    var strHtml = "";
    for (var i = 0; i < lisLength; i++) {
        strHtml += "<li></li>";
    }
    $(".indexPage").append(strHtml);
    $("#windowclint").width(windowWidth).height(windowHeight);
    $(".list .section").height(windowHeight);
    $("#indexPage").css("top", top);
    $(".indexPage li").css("opacity", "0.5");
    $(".indexPage li").eq(index).css("backgroundColor", "black")
        .siblings().css("backgroundColor", "red");
    $(".indexPage li").click(function () {
        scrollTop = -($(this).index()) * windowHeight;
        $(this).css("backgroundColor", "black")
            .siblings().css("backgroundColor", "red");
        index = $(this).index;
        $(".list").animate({
            "top": scrollTop
        }, 1000);
    });
    //鼠标滚动
    var times = 0;//鼠标滚动次数
    function handle(delta) {
        times++;
        if (times < 2) {
            if (delta < 0) {//向下滚
                if (index < lisLength - 1) {
                    index++;
                    scrollTop = -index * windowHeight;
                    $(".indexPage li").eq(index).css("backgroundColor", "black")
                        .siblings().css("backgroundColor", "red");
                    $(".list").animate({
                        "top": scrollTop
                    }, 1000, function () {
                        times = 0;
                    });
                }
            }
            else {//向上滚动
                if (index > 0) {
                    index--;
                    scrollTop = -index * windowHeight;
                    $(".indexPage li").eq(index).css("backgroundColor", "black")
                        .siblings().css("backgroundColor", "red");
                    $(".list").animate({
                        "top": scrollTop
                    }, 1000, function () {
                        times = 0;
                    });
                }
            }
        }
    }

    function wheel(event) {
        var delta = 0;
        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
        } else if (event.detail) {
            delta = -event.detail / 3;
        }
        if (delta)
            handle(delta);
    }

    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = wheel;
    //鼠标滚动

    $("#downArr").click(function () {
        index = 1;
        $(".list").animate({
            "top": -windowHeight
        }, 1000);
        $(".indexPage li").eq(index).css("backgroundColor", "black")
            .siblings().css("backgroundColor", "red");
    });

    //轮播图
    var timer = null;
    var screen = $("#screen");
    var ul = $("#slides");
    var ulLis = ul.children();
    var olLis = $("#paging").children();
    var next = $("#next");
    var prev = $("#prev");
    var pic = 0;
    var square = 0;
    ul.append(ulLis.eq(0).clone());
    $(".flexslider-index ol li").click(function () {
        var index = $(this).index();
        var ulLeft = -index * windowWidth;
        $(".flexslider-index ol a").removeClass("flex-active");
        $(this).children("a").addClass("flex-active");
        $(".slides").animate({"left": ulLeft}, 1000);
    });
    next.click(function () {
        if (pic === ulLis.length) {
            ul.css("left", 0);
            pic = 0;
        }
        pic++;
        var ulLeft = -pic * windowWidth;
        ul.animate({"left": ulLeft}, 1000);
        if (square < olLis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        $(".flexslider-index ol a").removeClass("flex-active");
        olLis.eq(square).children("a").addClass("flex-active");
    });
    prev.click(function () {
        if (pic === 0) {
            ul.css("left", -(ulLis.length) * windowWidth);
            pic = ulLis.length;
        }
        pic--;
        var ulLeft = -pic * windowWidth;
        ul.animate({"left": ulLeft}, 1000);

        if (square > 0) {
            square--;
        } else {
            square = olLis.length - 1;
        }
        $(".flexslider-index ol a").removeClass("flex-active");
        olLis.eq(square).children("a").addClass("flex-active");
    });
    screen.mouseover(function () {
     clearInterval(timer);
     });
     screen.mouseout(function () {
     timer = setInterval(playNext, 3000);
     });
     timer = setInterval(playNext, 3000);
     function playNext() {
     next.click();
     }

});