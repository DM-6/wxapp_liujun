//index.js
//获取应用实例
const app = getApp()

Page({
  // 数据 对应着 界面状态
  data: {
    // 默认的status是 1：全部 
    // 可通过setData改变 setData:2 未完成
    //                  setData:3 已完成
    status:1,
    // 界面状态，全部被data接管起来
    addShow: true,
    lists:[{
      title:'帮徐加元同学砍价',
      time:'十分钟前',
      status: '1'
    },
    {
      title:'邀请柔柔同学看电影',
      time:'刚刚',
      status: '0'
    }],
    addText:''
  },
  curLists: [],
  // 绑定事件    e:事件处理对象
  showStatus:function(e){
    // 文字？  如何得到事件元素上的属性？
    const status = e.currentTarget.dataset.status
    console.log(e,status);
    // 不再是dom编程，是针对界面状态的编程
    this.setData({
      status:status
    })
  },
  addTodoShow:function(e){
    this.setData({
      addShow: false
    })
  },
  addTodo:function(e){
    // 添加？
    // 输入框的内容
    const task = {
      title: this.data.addText,
      status: '0',
      date: '刚刚',
    }
    const temp = [...this.data.lists,task]
    this.setData({
      lists: temp,
      addShow: true
    })
    // ? 如何添加新的todo?
    // 结果：页面上立即多一条任务
    // 显示多少条 由lists 决定
    // lists push
    // 数据驱动界面，数据变，界面自动更新
    // MVVM M:Model(数据模型data) V:View(视图) VM(视图模型层)
  },
  addTodoHide:function(e){
    this.setData({
      addShow: true
    })
    // 看到界面，我们就知道要的数据
    // 看到交互，对数据操作
  },
  setInput:function(e){
    // console.log(e.detail.value);
    this.setData({
      addText: e.detail.value
    })
  },
  changeTodo:function(event){
    const index = event.currentTarget.dataset.item;
    const temp = this.data.lists;
    temp.forEach((item,i) => {
      // console.log(item,i);
      if(i == index){
        if(item.status == '0'){
          item.status = '1'
          // 提示
          wx.showToast({
            title: '已完成任务',
            icon: 'success',
            duration: 1000
          })
        } else{
          item.status = '0'
          wx.showToast({
            title: '任务打回重做',
            icon: 'success',
            duration: 1000
          })
        }
      }
    }),
    this.setData({
      lists: temp
    })
    // 当前点击条目的status success
    // 数据 来自lists 跟当前条目相关的这一条数据，将status值更新为1
    // index ?
  }
  //事件处理函数
})
