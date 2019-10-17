let html = document.querySelector("#htmlBox");  
let style = document.querySelector("#style");
let string = `/* 你好，我叫葛飞
* 自己写的一个小玩意，
* 谢谢观赏；
* 先把背景调整一下吧，看的有点丑。
**/
body {
    background: #3777c7;
}
/*
* 加个过渡显的好看一点
*/
* {
    transition: all .45s linear;
}
/* 把这个区域变的好看一点吧 */
.htmlWrapper {
    margin: 10px 30px;
    border: 1px solid #fff;
    color: #ffffff;
    width: 45%;
    height: 90vh;
    overflow: auto;
    padding: 0 20px;
    word-break: break-all;
    /* 加个3d效果吧*/
    transform: rotateY(10deg) translateZ(-100px);
}
/*
* 展示实力的时候到了
* 太极图开始走起
**/
/*绘制一个圆*/
.talcal {
    width: 300px;
    height: 300px;
    box-shadow: 0 0 10px rgba(255,255,255,.5);
    border-radius: 50%;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*绘制两个珍珠奶茶*/
.talcal::before {
    content: '';
    display: block;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    
}
.talcal::after {
    content: '';
    display: block;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 28%, rgba(255,255,255,1) 28%, rgba(255,255,255,1) 100%);
}
/*在做个效果吧，显的太单调*/
@keyframes heart {
    0%{
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg)
    }
}
/*让太极动起来吧*/
.talcal {
     animation: heart 1.5s linear infinite reverse;
}
/*结束了，加油*/
`
let string2 = ""  //缓存显示的结果
let n = 0;
let stop = () => {
    setTimeout(() => {
        // string2 += string[n] === '\n' ? '<br>': string[n]
        if(string[n] === '\n') {
            // 等于回车就替换成br
            string2 += '<br>'
        }else if(string[n] === ' ') {
            // 等于空格就替换成nbsp
            string2 += '&nbsp;'
        }else {
            string2 += string[n]
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        html.scrollTo(0,9999999)
        if(n < string.length-1) {
            n += 1;
            stop();     // 递归重新调用
        }
    },30)
}
stop();