/*--------------去掉滚动轮 在一个页面上切换----------------*/

$(function () {


    //切换导航
    $("#menu li:odd").click(function () {
        setTimeout(function () {
            $(".logo-b").css({
                "display": "block"
            });
            $(".logo-w").css({
                "display": "none"
            });
            $("#menu li").css({
                "color": "#1d90cc"
            });
            $("#menu>li>span").css({
                "backgroundColor": "#1d90cc"
            });
        }, 600);
    })
    $("#menu li:even").click(function () {
        setTimeout(function () {
            $(".logo-w").css({
                "display": "block"
            });
            $(".logo-b").css({
                "display": "none"
            });
            $("#menu li").css({
                "color": "#fff"
            })
            $("#menu>li>span").css({
                "backgroundColor": "#fff"
            });
        }, 600);
    })
    $("#menu li:eq(7)").click(function () {
        setTimeout(function () {
            $(".logo-w").css({
                "display": "block"
            });
            $(".logo-b").css({
                "display": "none"
            });
            $("#menu li").css({
                "color": "#fff"
            })
            $("#menu>li>span").css({
                "backgroundColor": "#fff"
            });
        }, 600);
    })


    // 获取屏幕的宽度
    var pageWidth = $(window).width() + 17;
    var pageHeight = $(window).height();
    console.log(pageHeight)
    console.log(pageHeight)
    $("#allBox").css({
        "width": pageWidth,
        "height": pageHeight,
        "overflow": "hidden"
    })

    //设置body的背景图片 
    $("body").css({
        "backgroundImage": "url(Cloud-images/images/xk8.jpg)"
    })
    //点击导航切换页面
    var index = 0;
    $("#menu>li").click(function () {
        index = $(this).index();
        var top = -pageHeight * index;
        $(".eachBox").animate({
            "top": top + "px"
        }, 700)
        $("#circle>li:eq(" + index + ")")
            .addClass("currentCircle")
            .siblings().removeClass("currentCircle");
        //切换导航下边的下划线
        $("#menu span:eq(" + index + ")").animate({
            "width": "100%"
        }).parent().siblings().children().animate({
            "width": 0
        });
    })

    //点击小圈圈切换页面
    $("#circle>li").click(function () {
        var index = $(this).index();
        var top = -pageHeight * index;
        console.log(top)
        $(".eachBox").animate({
            "top": top + "px"
        }, 700)

        $("#circle>li:eq(" + index + ")")
            .addClass("currentCircle")
            .siblings().removeClass("currentCircle");
        //切换导航下边的下划线
        $("#menu span:eq(" + index + ")").animate({
            "width": "100%"
        }).parent().siblings().children().animate({
            "width": 0
        });
    })

    //设置每一个盒子的宽度
    $(".box0").height(pageHeight);
    $(".box1").height(pageHeight - 120);
    $(".box2").height(pageHeight - 150);
    $(".box3").height(pageHeight - 150);
    $(".box4").height(pageHeight - 150);
    $(".box5").height(pageHeight - 100);
    $(".box6").height(pageHeight - 150);
    $(".box7").height(pageHeight - 150);
    $(".box8").height(pageHeight - 150);

    //logo  翻转
    function logo() {
        var date = new Date();
        var ms = date.getMilliseconds();
        var s = date.getSeconds() + ms / 1000;
        $(".logo-w>img").css("transform", "rotateY(" + s * 80 + "deg)")
        $(".logo-b>img").css("transform", "rotateY(" + s * 80 + "deg)")
    }

    setInterval(logo, 1);
})

/*-------------------各个页面的效果-----------------------*/
$(function () {
    //天使跟随鼠标
    $(function () {
        var Ttimer = null;
        //找人
        var pic = document.getElementById("pic")
        //鼠标点击图片跟随
        document.onmousemove = function (event) {
            clearInterval(Ttimer);
            //获取鼠标的位置
            var event = event || window.event;
            var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
            var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;

            //图片渐渐的跟随
            Ttimer = setInterval(function () {
                clearInterval(Ttimer)
                var leaderX = pic.offsetLeft;
                var leaderY = pic.offsetTop;
                var targetX = pageX //- pic.offsetWidth / 2;
                var targetY = pageY //- pic.offsetHeight / 2;
                var stepX = (targetX - leaderX) / 10;
                var stepY = (targetY - leaderY) / 10;
                stepX = stepX > 0 ? Math.ceil(stepX) : Math.floor(stepX);
                stepY = stepY > 0 ? Math.ceil(stepY) : Math.floor(stepY);
                leaderX = leaderX + stepX;
                leaderY = leaderY + stepY;
                pic.style.left = leaderX + "px";

                pic.style.top = leaderY + "px";
                if (targetX === leaderX && targetY === leaderY) {
                    clearInterval(Ttimer)
                }
            }, 1)
        }
    })





    var jtimer = null;

    //设置轮播图
    var img = document.getElementById("img");
    var imgWidth = img.offsetWidth;
    var ul = document.getElementById("list");
    var ullis = ul.children;
    var ol = document.getElementById("ollist");
    var arrow = document.getElementById("arrow");
    var right = document.getElementById("right");
    var timer = null;

    //动态的创建ol
    for (var i = 0; i < ullis.length; i++) {
        var li = document.createElement("li");
        li.innerText = i + 1;
        ol.appendChild(li);
    }
    ol.children[0].className = "current";
    var ollis = ol.children;

    var cloneli = ullis[0].cloneNode(true);
    ul.appendChild(cloneli);

    //鼠标经过按钮 按钮排他  显示当前的
    for (var i = 0; i < ollis.length; i++) {
        ollis[i].index = i;
        ollis[i].onmouseover = function () {
            for (var j = 0; j < ollis.length; j++) {
                ollis[j].className = "";
            }
            this.className = "current";
            var target = -this.index * imgWidth;
            animate(ul, {"left": target});
            pic = square = this.index;
        }
    }
    //鼠标经过盒子  箭头显示
    img.onmouseover = function () {
        arrow.style.display = "block";
        clearInterval(jtimer);
    }
    img.onmouseout = function () {
        arrow.style.display = "none"
        jtimer = setInterval(right.onclick, 1000)
    };
    //鼠标点击显示下一张
    var pic = 0;
    var square = 0;
    right.onclick = function () {
        if (pic === ullis.length - 1) {
            pic = 0;
            ul.style.left = 0;
        }
        pic++;
        var target = -pic * imgWidth;
        animate(ul, {"left": target})

        if (square < ollis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        for (var i = 0; i < ollis.length; i++) {
            ollis[i].className = "";
        }
        ollis[square].className = "current";
    }

    left.onclick = function () {
        if (pic === 0) {
            pic = ullis.length - 1;
            ul.style.left = -imgWidth * (ullis.length - 1) + "px";
        }
        pic--;
        var target = -pic * imgWidth;
        animate(ul, {"left": target})

        if (square > 0) {
            square--;

        } else {
            square = ollis.length - 1;
        }
        for (var i = 0; i < ollis.length; i++) {
            ollis[i].className = "";
        }
        ollis[square].className = "current";
    }
    setTimeout(function () {
        jtimer = setInterval(right.onclick, 1000);
    }, 5000);

    /* ------------------------------首页------------------*/
    $("#dowebok").animate({
        "left": 0,
        "top": "300px"
    }, 1000)

    $("#menu>li:eq(0)").click(function () {
        $("#dowebok").animate({
            "left": 0,
            "top": "300px",
            "opacity": 1
        }, 1000)
    });
    

    $("#circle>li:eq(0)").click(function () {
        $("#menu>li:eq(0)").click();
    });

    $("#menu>li:eq(0)").siblings().click(function () {
        $("#dowebok").animate({"left": "-900px", "top": "900px", "opacity": "0"}, 1);
    })

    $("#circle>li:eq(0)").siblings().click(function () {
        $("#dowebok").animate({"left": "-900px", "top": "900px", "opacity": "0"}, 1);
    })

    /*--------------------------------最新动态--------------------------*/
    //最新动态滑入
    $("#menu>li:eq(1)").click(function () {
        $(".titleBox").animate({
            "opacity": 1,
            "top": "110px"
        }, 1000, function () {
            $("#firstBox1").animate({
                "left": "100px"
            }, 1000);

            $("#newsBox1").animate({
                "right": "100px"
            }, 1000);
        });
    });
    $("#circle>li:eq(1)").click(function () {
        $("#menu>li:eq(1)").click();
    });
    $("#menu>li:eq(1)").siblings().click(function () {
        $(".titleBox").animate({
            "opacity": 0,
            "top": "200px"
        }, 1, function () {
            $("#firstBox1").animate({
                "left": "-480px"
            }, 1);

            $("#newsBox1").animate({
                "right": "-700px"
            }, 1);
        });
    });
    $("#circle>li:eq(1)").siblings().click(function () {
        $(".titleBox").animate({
            "opacity": 0,
            "top": "200px"
        }, 1, function () {
            $("#firstBox1").animate({
                "left": "-480px"
            }, 1);

            $("#newsBox1").animate({
                "right": "-700px"
            }, 1);
        });
    })


    /* ------------------------------产品中心------------------------*/
    $(".titleBox2").animate({"top": 0, "opacity": 1,}, 1000, function () {
        $(".ul-list1>li:eq(0)").animate({"top": 0, "opacity": 1}, 500, "linear", function () {
            $(".ul-list1>li:eq(1)").animate({"top": 0, "opacity": 1}, 500, "linear", function () {
                $(".ul-list1>li:eq(2)").animate({"top": 0, "opacity": 1}, 500, "linear", function () {
                    $(".ul-list1>li:eq(3)").animate({"top": 0, "opacity": 1}, 500, "linear", function () {
                        $("#section-3>.wp>.promore").fadeIn(1000);
                    })
                })
            })
        })
    });


    $("#menu>li:eq(2)").click(function () {
        $(".titleBox2").animate({"top": 0, "opacity": 1,}, 1000, function () {
            $(".ul-list1>li:eq(0)").animate({"top": 0, "opacity": 1}, 500, "linear", function () {
                $(".ul-list1>li:eq(1)").animate({"top": 0, "opacity": 1}, 500, "linear", function () {
                    $(".ul-list1>li:eq(2)").animate({"top": 0, "opacity": 1}, 500, "linear", function () {
                        $(".ul-list1>li:eq(3)").animate({"top": 0, "opacity": 1}, 500, "linear", function () {
                            $("#section-3>.wp>.promore").fadeIn(1000);
                        })
                    })
                })
            })
        });
    })
    $("#circle>li:eq(2)").click(function () {
        $("#menu>li:eq(2)").click();
    });

    $("#menu>li:eq(2)").siblings().click(function () {
        $(".titleBox2").animate({"top": 100, "opacity": 0}, 1, function () {
            $(".ul-list1>li:eq(0)").animate({"top": "300px", "opacity": 0}, 1, "linear", function () {
                $(".ul-list1>li:eq(1)").animate({"top": "300px", "opacity": 0}, 1, "linear", function () {
                    $(".ul-list1>li:eq(2)").animate({"top": "300px", "opacity": 0}, 1, "linear", function () {
                        $(".ul-list1>li:eq(3)").animate({"top": "300px", "opacity": 0}, 1, "linear", function () {
                            $("#section-3>.wp>.promore").fadeOut(1000);
                        })
                    })
                })
            })
        })
    })
    $("#circle>li:eq(2)").siblings().click(function () {
        $(".titleBox2").animate({"top": 100, "opacity": 0}, 1, function () {
            $(".ul-list1>li:eq(0)").animate({"top": "300px", "opacity": 0}, 1, "linear", function () {
                $(".ul-list1>li:eq(1)").animate({"top": "300px", "opacity": 0}, 1, "linear", function () {
                    $(".ul-list1>li:eq(2)").animate({"top": "300px", "opacity": 0}, 1, "linear", function () {
                        $(".ul-list1>li:eq(3)").animate({"top": "300px", "opacity": 0}, 1, "linear", function () {
                            $("#section-3>.wp>.promore").fadeOut(1000);
                        })
                    })
                })
            })
        })
    });

    /*----第一个图片-----*/
    function boxTime2() {
        var date = new Date();
        var ms = date.getMilliseconds();
        var s = date.getSeconds() + ms / 1000;
        $(".ul-list1>li:eq(0)>.pic").css("transform", "rotateY(" + s * 500 + "deg)")
    }

    var box2timer2 = null;
    $(".ul-list1>li:eq(0)>.pic").mouseenter(function () {
        clearInterval(box2timer2);
        box2timer2 = setInterval(boxTime2, 10);
    })
    $(".ul-list1>li:eq(0)>.pic").mouseleave(function () {
        clearInterval(box2timer2);
        $(".ul-list1>li:eq(0)>.pic").css("transform", "rotateY(0deg)")
    })

    /*----第二个图片----*/
    function boxTime3() {
        var date = new Date();
        var ms = date.getMilliseconds();
        var s = date.getSeconds() + ms / 1000;
        $(".ul-list1>li:eq(1)>.pic").css("transform", "rotateY(" + s * 500 + "deg)")
    }

    var box2timer3 = null;
    $(".ul-list1>li:eq(1)>.pic").mouseenter(function () {
        clearInterval(box2timer3);
        box2timer3 = setInterval(boxTime3, 10)
    })
    $(".ul-list1>li:eq(1)>.pic").mouseleave(function () {
        clearInterval(box2timer3);
        $(".ul-list1>li:eq(1)>.pic").css("transform", "rotateY(0deg)")
    })

    /*----第三个图片----*/
    function boxTime4() {
        var date = new Date();
        var ms = date.getMilliseconds();
        var s = date.getSeconds() + ms / 1000;
        $(".ul-list1>li:eq(2)>.pic").css("transform", "rotateY(" + s * 500 + "deg)")
    }

    var box2timer4 = null;
    $(".ul-list1>li:eq(2)>.pic").mouseenter(function () {
        clearInterval(box2timer4);
        box2timer4 = setInterval(boxTime4, 10)
    })
    $(".ul-list1>li:eq(2)>.pic").mouseleave(function () {
        clearInterval(box2timer4);
        $(".ul-list1>li:eq(2)>.pic").css("transform", "rotateY(0deg)")
    })

    /*----第四个图片----*/
    function boxTime5() {
        var date = new Date();
        var ms = date.getMilliseconds();
        var s = date.getSeconds() + ms / 1000;
        $(".ul-list1>li:eq(3)>.pic").css("transform", "rotateY(" + s * 500 + "deg)")
    }

    var box2timer5 = null;
    $(".ul-list1>li:eq(3)>.pic").mouseenter(function () {
        clearInterval(box2timer5);
        box2timer5 = setInterval(boxTime5, 10)
    })
    $(".ul-list1>li:eq(3)>.pic").mouseleave(function () {
        clearInterval(box2timer5);
        $(".ul-list1>li:eq(3)>.pic").css("transform", "rotateY(0deg)")
    })

    /* --------------------------------技术服务----------------------------*/
    $(".titleBox3").animate({"top": 0, "opacity": 1})
    $("#menu>li:eq(3)").click(function () {
        $(".titleBox3").animate({"top": 0, "opacity": 1}, 600, function () {
            $(".ul-list2>li:eq(0)").animate({"top": 0, "opacity": 1}, 600, function () {
                $(".ul-list2>li:eq(1)").animate({"top": 0, "opacity": 1}, 600, function () {
                    $(".ul-list2>li:eq(2)").animate({"top": 0, "opacity": 1}, 600)
                });
            });
        });
    });
    $("#circle>li:eq(3)").click(function () {
        $("#menu>li:eq(3)").click();
    });
    $("#menu>li:eq(3)").siblings().click(function () {
        $(".titleBox3").animate({"top": "-100px", "opacity": 0}, 0, function () {
            $(".ul-list2>li:eq(0)").animate({"top": "-300px", "opacity": 0}, 1, function () {
                $(".ul-list2>li:eq(1)").animate({"top": "-300px", "opacity": 0}, 1, function () {
                    $(".ul-list2>li:eq(2)").animate({"top": "-300px", "opacity": 0}, 1)
                });
            });
        });
    });
    $("#circle>li:eq(3)").siblings().click(function () {
        $(".titleBox3").animate({"top": "-100px", "opacity": 0}, 0, function () {
            $(".ul-list2>li:eq(0)").animate({"top": "-300px", "opacity": 0}, 1, function () {
                $(".ul-list2>li:eq(1)").animate({"top": "-300px", "opacity": 0}, 1, function () {
                    $(".ul-list2>li:eq(2)").animate({"top": "-300px", "opacity": 0}, 1)
                });
            });
        });
    });

    /*------第一个图片----*/
    function sevbox1() {
        var date = new Date();
        var ms = date.getMilliseconds();
        var s = date.getSeconds() + ms / 1000;
        $(".ul-list2>li:eq(0)>.pic").css("transform", "rotate(" + s * 600 + "deg)");
    }

    var sevtimer = null;
    $(".ul-list2>li:eq(0)>.pic").mouseenter(function () {
        clearInterval(sevtimer);
        sevtimer = setInterval(sevbox1, 1)
    })
    $(".ul-list2>li:eq(0)>.pic").mouseleave(function () {
        clearInterval(sevtimer);
        $(".ul-list2>li:eq(0)>.pic").css("transform", "rotate(0deg)")
    })

    /*------第二个图片----*/
    function sevbox2() {
        var date = new Date();
        var ms = date.getMilliseconds();
        var s = date.getSeconds() + ms / 1000;
        $(".ul-list2>li:eq(1)>.pic").css("transform", "rotateZ(" + s * 600 + "deg)");
    }

    var sevtimer1 = null;
    $(".ul-list2>li:eq(1)>.pic").mouseenter(function () {
        clearInterval(sevtimer1);
        sevtimer1 = setInterval(sevbox2, 1)
    })
    $(".ul-list2>li:eq(1)>.pic").mouseleave(function () {
        clearInterval(sevtimer1);
        $(".ul-list2>li:eq(1)>.pic").css("transform", "rotate(0deg)")
    })

    /*------第三个图片----*/
    function sevbox3() {
        var date = new Date();
        var ms = date.getMilliseconds();
        var s = date.getSeconds() + ms / 1000;
        $(".ul-list2>li:eq(2)>.pic").css("transform", "rotate(" + s * 600 + "deg)");
    }

    var sevtimer2 = null;
    $(".ul-list2>li:eq(2)>.pic").mouseenter(function () {
        clearInterval(sevtimer2);
        sevtimer2 = setInterval(sevbox3, 1)
    })
    $(".ul-list2>li:eq(2)>.pic").mouseleave(function () {
        clearInterval(sevtimer2);
        $(".ul-list2>li:eq(2)>.pic").css("transform", "rotate(0deg)")
    })


    /*-----------------------------九州学院-----------------------*/
    $("#menu>li:eq(4)").click(function () {
        $(".titleBox4").animate({
            "opacity": 1,
            "top": "110px"
        }, 1000, function () {
            $(".ul-list3").fadeIn(2000);
        });
        //下边的more
        $(".moreBox4").fadeIn(3000);
    });
    $("#circle>li:eq(4)").click(function () {
        $("#menu>li:eq(4)").click();
    });
    $("#menu>li:eq(4)").siblings().click(function () {
        $(".titleBox4").animate({
            "opacity": 0,
            "top": "200px"
        }, 1000, function () {
            $(".ul-list3").css("display", "none");
        });
        $(".moreBox4").fadeOut("fast");
    });
    $("#circle>li:eq(4)").siblings().click(function () {
        $(".titleBox4").animate({
            "opacity": 0,
            "top": "200px"
        }, 1000, function () {
            $(".ul-list3").css("display", "none");
        });
        $(".moreBox4").fadeOut("fast");
    });

    //鼠标放上 图片旋转
    //s1--------------------------------
    function time91() {
        var date = new Date();
        var ms = date.getMilliseconds();
        var s = date.getSeconds() + ms / 1000;
        $(".s1").css("transform", "rotateY(" + s * 500 + "deg)");
    }

    var timer91 = [];
    $(".s1").mouseenter(function () {
        timer91.push(setInterval(time91, 10));
    })
    $(".s1").mouseleave(function () {
        setTimeout(function () {
            $(".s1").css("transform", "rotateY(0deg)");
            for (var i = 0; i < timer91.length; i++) {
                var obj = timer91[i];
                clearInterval(obj);
            }
        }, 500);
    })

    //s2--------------------------------
    function time92() {
        var date = new Date();
        var ms = date.getMilliseconds();
        var s = date.getSeconds() + ms / 1000;
        $(".s2").css("transform", "rotateY(" + s * 500 + "deg)");
    }

    var timer92 = [];
    $(".s2").mouseenter(function () {
        timer92.push(setInterval(time92, 10));
    })
    $(".s2").mouseleave(function () {
        setTimeout(function () {
            $(".s2").css("transform", "rotateY(0deg)");
            for (var i = 0; i < timer92.length; i++) {
                var obj = timer92[i];
                clearInterval(obj);
            }
        }, 500);
    })

    //s3--------------------------------
    function time93() {
        var date = new Date();
        var ms = date.getMilliseconds();
        var s = date.getSeconds() + ms / 1000;
        $(".s3").css("transform", "rotateY(" + s * 500 + "deg)");
    }

    var timer93 = [];
    $(".s3").mouseenter(function () {
        timer93.push(setInterval(time93, 10));
    })
    $(".s3").mouseleave(function () {
        setTimeout(function () {
            $(".s3").css("transform", "rotateY(0deg)");
            for (var i = 0; i < timer93.length; i++) {
                var obj = timer93[i];
                clearInterval(obj);
            }
        }, 500);
    })
    //s4--------------------------------
    function time94() {
        var date = new Date();
        var ms = date.getMilliseconds();
        var s = date.getSeconds() + ms / 1000;
        $(".s4").css("transform", "rotateY(" + s * 500 + "deg)");
    }

    var timer94 = [];
    $(".s4").mouseenter(function () {
        timer94.push(setInterval(time94, 10));
    })
    $(".s4").mouseleave(function () {
        setTimeout(function () {
            $(".s4").css("transform", "rotateY(0deg)");
            for (var i = 0; i < timer94.length; i++) {
                var obj = timer94[i];
                clearInterval(obj);
            }
        }, 500);
    })
    //s5--------------------------------
    function time95() {
        var date = new Date();
        var ms = date.getMilliseconds();
        var s = date.getSeconds() + ms / 1000;
        $(".s5").css("transform", "rotateY(" + s * 500 + "deg)");
    }

    var timer95 = [];
    $(".s5").mouseenter(function () {
        timer95.push(setInterval(time95, 10));
    })
    $(".s5").mouseleave(function () {
        setTimeout(function () {
            $(".s5").css("transform", "rotateY(0deg)");
            for (var i = 0; i < timer95.length; i++) {
                var obj = timer95[i];
                clearInterval(obj);
            }
        }, 500);
    })

    /*--------------------------客户案例----------------------*/
    //点击导航 动画
    $("#menu>li:eq(5)").click(function () {
        //客户案例下来
        $(".box5 .i-tit1").animate({
            "opacity": 1,
            "top": "90px"
        }, 1000, function () {
            $(".ul-tab1").animate({
                "opacity": 1,
                "top": "150px"
            }, 1000);
        });
        //图片下来
        $(".li0").animate({
            "opacity": 1,
            "top": "200px"
        }, 500, function () {
            $(".li1").animate({
                "opacity": 1,
                "top": "200px"
            }, 500, function () {
                $(".li2").animate({
                    "opacity": 1,
                    "top": "200px"
                }, 500);
            });
        });
        $(".li3").animate({
            "opacity": 1,
            "top": "420px"
        }, 1000, function () {
            $(".li4").animate({
                "opacity": 1,
                "top": "420px"
            }, 1000);
            $(".li5").animate({
                "opacity": 1,
                "top": "420px"
            }, 1500);
        });


    })
    $("#circle>li:eq(5)").click(function () {
        $("#menu>li:eq(5)").click();
    });
    $("#menu>li:eq(5)").siblings().click(function () {
        $(".box5 .i-tit1").animate({
            "opacity": 0,
            "top": "-50px"
        }, 1000, function () {
            $(".ul-tab1").animate({
                "opacity": 0,
                "top": "50px"
            }, 1);
        });

        //图片隐藏
        $(".li0").animate({
            "opacity": 0,
            "top": "50px"
        }, 1, function () {
            $(".li1").animate({
                "opacity": 0,
                "top": "50px"
            }, 1, function () {
                $(".li2").animate({
                    "opacity": 0,
                    "top": "50px"
                }, 1);
            });
        });
        $(".li3").animate({
            "opacity": 0,
            "top": "100px"
        }, 1, function () {
            $(".li4").animate({
                "opacity": 0,
                "top": "100px"
            }, 1);
            $(".li5").animate({
                "opacity": 0,
                "top": "100px"
            }, 1);
        });
    });

    $("#circle>li:eq(5)").siblings().click(function () {
        $(".box5 .i-tit1").animate({
            "opacity": 0,
            "top": "-50px"
        }, 1000, function () {
            $(".ul-tab1").animate({
                "opacity": 0,
                "top": "50px"
            }, 1);
        });

        //图片隐藏
        $(".li0").animate({
            "opacity": 0,
            "top": "50px"
        }, 1, function () {
            $(".li1").animate({
                "opacity": 0,
                "top": "50px"
            }, 1, function () {
                $(".li2").animate({
                    "opacity": 0,
                    "top": "50px"
                }, 1);
            });
        });
        $(".li3").animate({
            "opacity": 0,
            "top": "100px"
        }, 1, function () {
            $(".li4").animate({
                "opacity": 0,
                "top": "100px"
            }, 1);
            $(".li5").animate({
                "opacity": 0,
                "top": "100px"
            }, 1);
        });
    });


    // //鼠标放上去的时候遮罩 显示
    $(".ul-list4>ul>li").mouseenter(function () {
        $(this).find(".txt").stop(false, true).animate({
            "opacity": 1
        }, 500);
    })
    $(".ul-list4>ul>li").mouseleave(function () {
        $(this).find(".txt").stop(false, true).animate({
            "opacity": 0
        }, 200);
    })
    //鼠标经过显示遮罩
    // $(".ul-list4  li").mouseenter(function () {
    //     $(this).find(".txt").stop().animate({"top":0},500)
    // })
    // $(".ul-list4  li").mouseleave(function () {
    //     $(this).find(".txt").stop().animate({"top":200},500)
    // })

    //点击 典型案例和客户评价 切换页面
    $(".box5 .hover").click(function () {
        $(".dx").show(300);
        $(".dn").hide(300);
        $(this).css("backgroundColor","#e24e35")
            .siblings()
            .css("backgroundColor","#CCCCCC");
    })
    $(".box5 .hover1").click(function () {
        $(".dn").show(300);
        $(".dx").hide(300);
        $(this).css("backgroundColor","#e24e35")
            .siblings()
            .css("backgroundColor","#CCCCCC");
    })

    /*-------------------合作伙伴------------------------*/
    //鼠标放上去切换图片
    var src = null;
    $(".link-h>ul>li").mouseenter(function () {
        var index = $(this).index();
        src = $(this).find("img").attr("src");
        $(this).find("img").attr("src", "Cloud-images/images/" + index + ".jpg");
    })
    $(".link-h>ul>li").mouseleave(function () {
        $(this).find("img").attr("src", src);
    })

    //渐入效果
    $("#menu>li:eq(6)").click(function () {
        $(".titleBox6").animate({
            "opacity": 1,
            "top": "110px"
        }, 1000, function () {
            $(".link-h").fadeIn(2000);
        });
        //更多
        $(".moreBox6").fadeIn(4000);
    });
    $("#circle>li:eq(6)").click(function () {
        $("#menu>li:eq(6)").click();
    });
    $("#menu>li:eq(6)").siblings().click(function () {
        $(".titleBox6").animate({
            "opacity": 0,
            "top": "200px"
        }, 1000, function () {
            $(".link-h").css("display", "none");
        });
        $(".moreBox6").fadeOut(1);
    });
    $("#circle>li:eq(6)").siblings().click(function () {
        $(".titleBox6").animate({
            "opacity": 0,
            "top": "200px"
        }, 1000, function () {
            $(".link-h").css("display", "none");
        });
        $(".moreBox6").fadeOut(1);
    });


    /*----------------------------关于我们-----------------------*/
    $(".titleBox7").animate({"top": 0, "opacity": 1}, 800);
    $(".aboutBox>.pic").animate({"top": 0, "opacity": 1}, 1000);
    $(".aboutBox>.txt").animate({"top": 0, "opacity": 1}, 1000);

    $("#menu>li:eq(7)").click(function () {
        $(".titleBox7").animate({"top": 0}, 1000);
        $(".aboutBox>.pic").animate({"top": 0, "opacity": 1}, 2000);
        $(".aboutBox>.txt").animate({"top": 0, "opacity": 1}, 1000);
    });
    $("#circle>li:eq(7)").click(function () {
        $("#menu>li:eq(7)").click();
    });
    $("#menu>li:eq(7)").siblings().click(function () {
        $(".titleBox7").animate({"top": -100}, 1);
        $(".aboutBox>.pic").animate({"top": -500, "opacity": 0}, 1);
        $(".aboutBox>.txt").animate({"top": 500, "opacity": 0}, 1);
    });
    $("#circle>li:eq(7)").siblings().click(function () {
        $(".titleBox7").animate({"top": -100}, 1);
        $(".aboutBox>.pic").animate({"top": -500, "opacity": 0}, 1);
        $(".aboutBox>.txt").animate({"top": 500, "opacity": 0}, 1);
    });
    

    /*---------------------联系我们-------------------------------*/
    $(".titleBox8").animate({"top": 0, "opacity": 1}, 1000);
    $(".ul-add>li:eq(0)").animate({"left": 0, "opacity": 1}, 1000);
    $(".ul-add>li:eq(1)").animate({"right": 0, "opacity": 1}, 1000);
    $(".ul-add>li:eq(2)").animate({"right": 0, "opacity": 1}, 1000);

    $("#menu>li:eq(8)").click(function () {
        $(".titleBox8").animate({"top": 0, "opacity": 1}, 1000);
        $(".ul-add>li:eq(0)").animate({"left": 0, "opacity": 1}, 1000);
        $(".ul-add>li:eq(1)").animate({"right": 0, "opacity": 1}, 1000);
        $(".ul-add>li:eq(2)").animate({"right": 0, "opacity": 1}, 1000);
    })

    $("#circle>li:eq(8)").click(function () {
        $("#menu>li:eq(8)").click();
    });

    $("#menu>li:eq(8)").siblings().click(function () {
        $(".titleBox8").animate({"top": 100, "opacity": 0}, 1000);
        $(".ul-add>li:eq(0)").animate({"left": -200, "opacity": 0}, 1);
        $(".ul-add>li:eq(1)").animate({"right": -200, "opacity": 0}, 1);
        $(".ul-add>li:eq(2)").animate({"right": -200, "opacity": 0}, 1);
    })
    $("#circle>li:eq(8)").siblings().click(function () {
        $(".titleBox8").animate({"top": 100, "opacity": 0}, 1000);
        $(".ul-add>li:eq(0)").animate({"left": -200, "opacity": 0}, 1);
        $(".ul-add>li:eq(1)").animate({"right": -200, "opacity": 0}, 1);
        $(".ul-add>li:eq(2)").animate({"right": -200, "opacity": 0}, 1);
    });
})

