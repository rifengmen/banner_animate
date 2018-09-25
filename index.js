window.onload = function () {
    // 获取轮播点儿集合
    let dots = document.querySelectorAll(".dots span");
    // 获取图片集合
    let imgs = document.querySelectorAll(".imgs a");
    // 获取banner框
    let banner = document.querySelector(".banner");
    // 获取左向箭头
    let lbtn = document.querySelector(".left");
    // 获取右向箭头
    let rbtn = document.querySelector(".right");
    // 获取图框宽度
    let widths = parseInt(getComputedStyle(banner,null).width);
    // 设定轮播时间
    let val = 9500;
    // 初始化两个变量作为两个下标来使用
    let now = 0;
    let next = 0;
    // 声明一个变量作为时间函数使用
    let t;
    // 声明flag作为开关方式点击速度过快
    let flag = true;
    // 鼠标移入轮播点儿
    imgs[0].style.left = 0;
    dots[0].style.backgroundColor = "#fff";
    dots[0].style.border = "2px solid #ff6700";
    for (let i = 0; i < dots.length; i++) {
        dots[i].onmouseover = function () {
            for (let j = 0; j < imgs.length; j++) {
                imgs[j].style.left = widths+"px";
                dots[j].style.backgroundColor = "#757575";
                dots[j].style.border = "2px solid #fff";
            }
            imgs[i].style.left = 0;
            dots[i].style.backgroundColor = "#fff";
            dots[i].style.border = "2px solid #ff6700";
            next = i;
            now = i;
        }
    }
    // 自动轮播
    t = setInterval(move,val);
    function move() {
        next++;
        if (next === dots.length) {
            next = 0;
        }
        // flag = true;
        imgs[now].style.left = 0;
        imgs[next].style.left = widths+"px";
        animate(imgs[now],{left:-widths},function () {
            dots[now].style.backgroundColor = "#757575";
            dots[now].style.border = "2px solid #fff";
        });
        animate(imgs[next],{left:0},function () {
            for (let i = 0; i < imgs.length; i++) {
                dots[i].style.backgroundColor = "#757575";
                dots[i].style.border = "2px solid #fff";
            }
            dots[next].style.backgroundColor = "#fff";
            dots[next].style.border = "2px solid #ff6700";
        });
        // flag = true
        now = next;
    }
    // 鼠标移入时暂停
    banner.onmouseover = function () {
        clearInterval(t);
    };
    banner.onmouseout = function () {
        t = setInterval(move,val)
    };
    // 点击左右箭头轮播
    rbtn.onclick = function () {
        // if (!flag) {
        //     flag == false;
        //     return;
        // }
        move();
    };
    lbtn.onclick = function () {
        next--;
        if (next === -1) {
            next = imgs.length-1;
        }
        imgs[now].style.left = 0;
        imgs[next].style.left = -widths+"px";
        animate(imgs[now],{left:widths},function () {
            dots[now].style.backgroundColor = "#757575";
            dots[now].style.border = "2px solid #fff";
        });
        animate(imgs[next],{left:0},function () {
            for (let i = 0; i < imgs.length; i++) {
                dots[i].style.backgroundColor = "#757575";
                dots[i].style.border = "2px solid #fff";
            }
            dots[next].style.backgroundColor = "#fff";
            dots[next].style.border = "2px solid #ff6700";
        });
        now = next;
    };
    // 失去获得焦点
    window.onfocus = function () {
        clearInterval(t);
    };
    window.onblur = function () {
        t = setInterval(move,val)
    }








}