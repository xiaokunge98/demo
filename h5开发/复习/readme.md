###

复习
一、DOM 关于位置和尺寸的 api。
1、parentNode
a：直接父级

2、offsetParent
a：有点类似于 css 中包含块（css 中的概念）的概念
b：offsetLeft 和 offsetTop 都是参照于 offsetParent 的内边距界
c：规则（html 和 body 之间的 margin 被清除）
①：本身定位为 fixed，不管你父级有没有定位
火狐的 offsetParent-->body
非火狐的 offsetParent-->null
②：非 fixed
父级没有定位
offsetParent-->body
父级有定位
offsetParent-->父级本身

二、js 的兼容性问题
1、ev||event
2、offsetParent
3、事件绑定（事件流的机制；事件委托）

4、鼠标滚轮事件
a：非火狐：onmousewheel（DOM0）
ev.wheelDelta
上：正
下：负
b：火狐：DOMMouseScroll（DOM2）
ev.detail
上：负
下：正
c：取消默认时间
①：DOM0：return false
②：DOM2：ev.preventDefault() //判断是否存在
5、视口尺寸的获取

三、绝对位置和相对位置
1、绝对位置：到 body 的距离（HTML 和 body 之间的 margin 被清除）
a：原生实现：while 循环不断去累加
①：body 的 offsetParent-->null
②：body 的 offsetLeft-->0
③：body 的 offsetTop-->0
2、相对位置：到视口的距离
a：绝对位置的实现上减去滚动条滚动的距离（滚动条滚动时元素滚动的距离）
①：document.documentElenment.scrollLeft||document.body.scrollLeft
②：原生实现的缺点：没有办法兼容 border 和 margin

四、getBoundClientRect（兼容性强）
1、返回值：对象
a：对象：{
width：boder-box 的宽
height：border-box 的高

<!-- 元素border-box的左上角的相对位置 -->

top： y：
left： x：

<!-- 元素border-box的右下角的相对位置 -->

bottom：
right：

}

五、clientWidth/Height 和 offsetWidth/Height
1、clientWidth/Height：可视区 padding-box
2、offsetWidth/Height：border-box

六、怎么获取视口的尺寸
1、document.documentElement.clientWidth

七、曲线运动
1、三角函数图像：怎么将三角函数的图像运用到 js 中

八、结合 canvas 实现气泡效果
