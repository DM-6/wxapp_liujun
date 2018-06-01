## WePY
WePY:来自微信官方的小程序组件开发框架

vue react 在mvvm之上建立起来的组件开发。

scroll-view 是页面组件
  
vue 有经典的单文件组件

mpvue 做的比wepy好

核心：用vue的写法去写小程序

------

1. 为小程序开发提供了命令行开发环境
   npm 世界为小程序打开了
   先编译，再生成代码这种
   CSS stylus 
   小程序 wepy

-----  

一些命令：
- wepy init standard projname   初始化wepy项目
  node 项目  yarn | npm install 安装依赖
- wepy build --watch   开始stylus 一样，编译监听文件改变
  小程序目录在src/ 开发的
- wepy build --watch   实时的生成dist目录
  wepy 是用vue写法，帮助开发者生成小程序文件的框架脚本
  vue 优势，开发者会的多，小程序拥抱开发者

------

微信小程序与VUE写法的区别：
- .wxml, .js, .wxss,  在vue里面就是一个文件 .wpy
- style  -> .wxss文件   支持less(默认） stylus sass
- template  -> .wxml文件   可以引入第三方组件component
- js  ->  .js文件   不过，这里有很多vue 新概念

------

swiper 标签

wepy 全部的开发都在一个文件index.wpy   由es6提供的 
```
class index extends wepy.page{
    data = {
    	detail: {
    		object: []
    	}
    }
    computed = {
    	需要计算一下的属性 放在这里
        swiperObjects(){
       		return 值
       	｝
    }
    onload(){
    	this.loadList()
	}
    loadList(){
    	this.data.....
       this.$apply()
    }
}
```