//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: {},
    addShow: false,
    focus: false,
    addText: '',
    lists: []
  },
  onLoad () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
    wx.getStorage({
      key: 'lists',
      success: (res) =>{
        // success
        console.log(res);
        this.setData({
          'lists': res.data
        })
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e);
    this.setData({
      hasUserInfo: true,
      userInfo: e.detail.userInfo
    });
    // storage 核心配置或数据的存储
    wx.setStorage({
      key: 'user-info',
      data: e.detail.userInfo,
      success: function(res){
        console.log('保存成功');
      }
    })
  },
  addTodoHide (e) {
    this.setData({
      addShow: false,
      focus: false,
      addText: ''
    })
  },
  addTodo (e) {
    if (!this.data.addText.trim()) {
      return;
    }
    
    // item 都是一个对象 文字只是一部份
    var addT = {
      title: this.data.addText,
      status: '0',
      id: new Date().getTime()
    }
    const temp = [
      addT,
      ...this.data.lists
    ];
    this.setData({
      lists: temp
    })
    wx.setStorage({
      key: 'lists',
      data: temp
    });
    wx.showToast({
      title: '添加成功!',
      icon: 'success',
      duration: 1000
    })
    this.addTodoHide();
    // console.log(addT);

    // value 
    // list
    // setStorage
  },
  setInput (e) {
    this.setData({
      'addText': e.detail.value
    })
  }
})
