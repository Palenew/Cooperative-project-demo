/**
 * Created by liuhuan on 2016/8/2.
 */
//把任意对象的任意数值属性 改变为任意的目标值
function animate(obj, json, fn) {//json {attr, target}  属性名 ： 属性值
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;//假设都到达了
        for (var k in json) {
            if (k == "opacity") {
                var leader = getStyle(obj, k) * 100//如果是NAN  给默认值
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
            } else if (k == "zIndex") {
                obj.style.zIndex = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0 //如果是NAN  给默认值
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader !== target) {
                flag = false;//告诉标记还没到达
            }
        }
        if (flag) {//如果标记都为true 说明到达了
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15);
}

function getStyle(obj, attr) {
    if (window.getComputedStyle) {//IE不能使用
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}