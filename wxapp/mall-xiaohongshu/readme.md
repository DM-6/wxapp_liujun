# “小红书”——给你安利几个小程序的“坑”

标签（空格分隔）： 微信小程序

---

![可爱](https://github.com/DM-6/wxapp_liujun/blob/master/image/timg.jpg)

## 写在前面
　　小程序发布至今已有一年多时间，很多人都已经在小程序道路上狂奔。最近我也开始了学习小程序，学了一段时间后，想看看自己学到了多少，于是边学习边开始了我的第一个小程序。相信很多人都用过小红书吧，我可是被它安利了很多好东西呢，所以想着就仿写一个小红书吧。下面我就给大家“安利”几个我在写的过程中的“坑”。
　　因为用的时间不多，功能有很多没有完善，页面写的不是很好看，请各位将就着看吧。╮(╯▽╰)╭
　　
## 准备工作
1. 开发环境：WXML(HTML),WXSS(CSS),Javascript
2. 开发工具：[vscode](https://code.visualstudio.com/Download)，[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
3. 辅助工具： 
* [Markman](http://www.getmarkman.com/)：图标标注工具，可用于取色、测量。
* [Easy-Mock](https://www.easy-mock.com/)：可以伪造假数据，在js中引用就好了。[点这里](https://www.easy-mock.com/project/5b1e17a0d4a14a3247a6cd6b)可以查看我的项目数据。
* [Markdown](https://www.zybuluo.com/mdeditor)：在线编辑器
* [GifCam](https://gifcam.en.softonic.com/)：Gif录制工具　
* [微信小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/)
* [Iconfont-阿里巴巴矢量图标库](http://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.de12df413&cid=1312)：各种需要的小图标都有哦

## 遇到的几个问题

### 1、首页导航栏左右滑动
效果图：
![navBar](https://github.com/DM-6/wxapp_liujun/blob/master/image/navbar.gif)
　　这部分，是通过微信小程序的[scroll-view](https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html)组件来完成的。代码如下：
```wxml
<scroll-view class="navBar-box" scroll-x="true" style="white-space: nowrap; display:flex ">
    <view class="cate-list {{curIndex==index?'on':''}}" wx:for="{{category}}" wx:key="{{item.id}}" data-id="{{item.id}}" data-index="{{index}}" bindtap="switchCategory">
        {{item.name}}
    </view>
</scroll-view>
```
　　scroll-x="true"是设置其水平方向滑动，如果要设置垂直方向滑动，则使用scroll-y="true"。这里要注意的是，导航列表的每一项一定要设置宽度，其所有项的总宽度要小于scroll-view的宽度，否则列表项会垂直排列。因为导航列表项的个数比较多，这里使用了`wx:for`循环将列表项循环出来。这样减少了很多代码量，真是个好东西φ(゜▽゜*)♪
　　
一些使用scroll-view的注意事项：
> 
* 请勿在 scroll-view 中使用 textarea、map、canvas、video 组件
* scroll-into-view 的优先级高于 scroll-top
* 在滚动 scroll-view 时会阻止页面回弹，所以在 scroll-view 中滚动，是无法触发 onPullDownRefresh
* 若要使用下拉刷新，请使用页面的滚动，而不是 scroll-view ，这样也能通过点击顶部状态栏回到页面顶部

### 2、首页文章列表随着点击导航栏列表改变
效果图：
![index](https://github.com/DM-6/wxapp_liujun/blob/master/image/index.gif)
　　这部分，是通过微信小程序的[swiper](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html)组件来完成的。代码如下：
```wxml
<swiper class="notes" current="{{toView}}">
      <swiper-item class="category" wx:for="{{detail}}"
      wx:key="{{item.id}}">
        <scroll-view class="cate-box" id="{{item.id}}" scroll-y>
          <view class="note" wx:for="{{item.notes}}" wx:for-item="notes" wx:key="{{index}}">
            <view class="note-info">
              <navigator url="../index/note-info/note-info" >
                <view class="home-note-img">
                  <image src="{{notes.note_image}}"/>
                </view>
                <span>{{notes.title}}</span>
              </navigator>
            </view> 
            <view class="note-handle">
              <navigator class="writer" url="../index/note-writer/note-writer">
                <image class="photo-img" src="{{notes.writer_img}}"/>
                <span class="name">{{notes.writer}}</span>
              </navigator>
              <view class="like">
                <image class="like-icon" src="/images/like.png"/>
                <span>{{notes.like}}</span>
              </view>
            </view>
          </view>
        </scroll-view>
      </swiper-item>
  </swiper>
```
　　使用swiper组件，将所有文章列表包起来，每个swiper-item表示不同的列表模块。之前在导航栏各列表项绑定了不同的值，在点击导航时触发`switchCategory`事件，swiper-item根据导航点击的不同值，展示相对应的item文章列表。在这里我使用了Easy-Mock将页面的数据放在里面，然后用`wx:request`请求数据就行了。
```JavaScript
// 请求数据
wx.request({
  url: 'https://www.easy-mock.com/mock/5b1e17a0d4a14a3247a6cd6b/',
  success: (res) => {
    this.setData({
      detail: res.data.data
    })
  }
})  
```
　　通过`wx:for`循环，将每个文章页内容获取过来。在swiper-item里面使用scroll-view，使得页面可以滚动。
![scroll-view](https://github.com/DM-6/wxapp_liujun/blob/master/image/scroll-view.gif)
　　内容超出一屏的时候，文章列表右边就会出现滚动条，这样也太丑了吧。那如何能让这个滚动条不出现呢，那就是让它隐藏掉。通过在全局样式中设置scroll隐藏,这样就好看多了。
```wxss
::-webkit-scrollbar{  
  height: 0;
  width: 0;
  color: transparent;
}
```
　　
### 3、搜索页面的历史记录
![search](https://github.com/DM-6/wxapp_liujun/blob/master/image/search.gif)
　　在搜索框中输入要搜索的内容后，输入的内容会增加到历史记录里面。这里我用`wx：for`循环historyRecord，index值区分不同的搜索内容，recordItem是要输出在历史记录的值。代码如下：
```wxml
<view class="search-history">
    <text class="history-record">历史记录</text>
    <view class="search-history-item" wx:for="{{historyRecord}}" wx:key="{{index}}">
        <text>{{item.recordItem}}</text>
    </view>
</view>
```
　　因为文章的详情页还没有写，所以输入搜索内容后弹出的相似内容后，按enter键触发bindconfirm事件直接跳回了搜索页面，之前输入的搜索内容就会增加到历史记录里面。
```JavaScript
bindconfirm: function(e){
  var recordItem = e.detail.value;
  this.saveHistory({
    id: 0,
    recordItem
  })
  wx.navigateTo({
    url: '../searchbar/searchbar',
  })
  this.setData({
    searchContext:''
  })
},
```
　　
### 4、收货地址的添加
![添加地址](https://github.com/DM-6/wxapp_liujun/blob/master/image/adress.gif)
　　使用微信小程序提供的表单组件，很快就将添加地址的页面做好了。值得一提的就是[picker](https://developers.weixin.qq.com/miniprogram/dev/component/picker.html)。
　　
`picker`：从底部弹起的滚动选择器，现支持五种选择器，通过mode来区分，分别是普通选择器，多列选择器，时间选择器，日期选择器，省市区选择器，默认是普通选择器。它的一些属性，可点击查看[picker](https://developers.weixin.qq.com/miniprogram/dev/component/picker.html)。

　　但是这块地方，表单验证及添加地址信息提交到地址列表中，有让我一阵子头疼。
　　首先就是表单验证，当你提交表单时触发`formSubmit`事件，对表单进行验证。代码如下：
```JavaScript
formSubmit: function(e){
    var warn = "";
    var that = this;
    var flag = false;
    if(!e.detail.value.name){
      warn = "请填写收件人！";
    } else if(!e.detail.value.tel){
      warn = "请填写手机号码！";
    } else if(!(/^1(3|4|5|7|8)\d{9}$/.test(e.detail.value.tel))){
      warn = "手机号码格式不正确！";
    } else if(!e.detail.value.adress){
      warn = "请选择地区！";
    } else if(!e.detail.value.doorAdress){
      warn = "请填写详细地址！";
    } else if(!e.detail.value.IDcard){
      warn = "请填写身份证号码";
    } else if(!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/).test(e.detail.value.IDcard)){
      warn = "身份证号码格式不正确"
    } else{
      flag=true;
        // 存储到全局变量adressInfo
        app.globalData.adressInfo.push(e.detail.value);
        wx.navigateTo({
          url: '/pages/my/adress/adress'
        })
    }
    if(flag==false){
        wx.showModal({
        title: '提示',
        content:warn
      })
    } 
  },
```
　　 添加地址信息提交到地址列表中，这部分要怎么解决呢？我一开始的思路是，将添加的地址信息存在本地，然后在地址列表那获取添加的地址信息。这样就不得不提下[wx.setStorage( )](https://developers.weixin.qq.com/miniprogram/dev/api/data.html#wxsetstorageobject)和[wx.getStorage( )](https://developers.weixin.qq.com/miniprogram/dev/api/data.html#wxgetstorageobject)这两个方法了。
> `wx.setStorage()`：将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。
> `wx.getStorage()`：从本地缓存中异步获取指定 key 对应的内容。

　　wx:getStorage是从本地缓存中异步获取指定 key 对应的内容。Key指定了，所以再添加的地址就会覆盖原来的key对应的内容，从而得不到保存地址的效果，只有一条数据。
```JavaScript
//添加地址信息到本地缓存   add-adress.js
submitdate: function (event) {
var adressInfo = event.detail.value;
  wx.setStorage({
    key: 'adressInfo',
    data: adressInfo,
    success: function (res){
      wx.navigateTo({
        url: '/pages/my/adress/adress'
      })
    }
  })
},
//地址列表里获取缓存在本地的地址信息  adress.js  
var that=this;     
wx.getStorage({
  key:'adressInfo',
  success:function(res){
    console.log(res);
    var adressInfo=[];
    adressInfo.push(res.data);
    that.setData({
      adressInfo
    })
  }
})
```
　　于是呢，就去请教了几位大佬，看有什么方法可以解决这个问题。经过讨论，得出了解决办法，将添加的地址信息push到全局上去，将会然后在从全局里面获取，这样就不会将之前的数据覆盖。而且这样处理，代码量大大的减少了。
代码如下：
```JavaScript
// 定义globalData对应的全局变量   app.js
globalData: {
    userInfo: null,
    adressInfo:[]
}
// 提交地址信息，调用定义的变量  add-adress.js
submitdate: function (event) {
    app.globalData.adressInfo.push(event.detail.value);
    wx.navigateTo({
        url: '/pages/my/adress/adress'
    })
    console.log(app.globalData.adressInfo);
},
//获取地址信息,调用定义的变量   adress.js
var that=this;     
that.setData({
  adressInfo:app.globalData.adressInfo
})
```
注意：需要在调用全局变量的文件里，开始的时候初始化`app`这个对象
```JavaScript
const app = getApp();
```

#### 5、Easy-Mock数据接口的引入问题
　　使用Easy-Mock伪造数据时，要按照规范书写，我在这里踩的"坑"就是：数据属性名，不能包含“-”（比如：note-image）。这样虽然数据接口能够创建，但是引入的时候就会报错，引入的数据为空。数据属性名可以用“_”（比如：note_image)。
![错误](https://github.com/DM-6/wxapp_liujun/blob/master/image/errorEasy-mock.png)

## 总结
　　以上便是我觉得比较容易掉坑，比较难的地方。还没有完成的功能，后续我会慢慢完善。对于小程序这方面，完全还是新手，给跟我一样的新手的一个建议，除了看[微信小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/)之外，也可以多看一看开源的小程序项目源码，遇到问题，可以看看别人是怎么解决的。
　　本文为个人原创，如果你想对我的项目想要了解更多，可以查看我的[项目源码](https://github.com/DM-6/wxapp_liujun/tree/master/wxapp/mall-xiaohongshu)。希望这篇文章对你有帮助，欢迎大家点赞收藏~~
![like](https://github.com/DM-6/wxapp_liujun/blob/master/image/like.jpg)　　
　　本文如果有不好的地方，或者更好的方法，欢迎大佬们指出，一起学习。
　　
　　wx：lj13684809399    
　　                                                  







