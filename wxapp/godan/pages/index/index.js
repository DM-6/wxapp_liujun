//index.js
//获取应用实例
// 引入util模块， require 是COMMONJS规范
const util = require('../../utils/util.js')

const app = getApp()
const musicUrl = app.globalData.musicBase;

Page({
  data: {
    musicList: [],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    this.getList('down');
    // wx.request()
    // util.$get('http://data.ratp.fr/api/datasets/1.0/search/?q=paris',
    //  {})
    // .then(res => {
    //   console.log(res);
    // })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onPullDownRefresh() {
    // console.log('pulldown');
    this.getList('down');
  },
  getList(type) {
    // id 是关键, 加载新的一页时, 上一页最后id 再去服务器上
    // 发送请求
    type === 'down' ? this.setData({ id: 0}): null;
    util.$get(`${musicUrl}/api/channel/music/more`, {id: this.data.id}).then(res => {
      // console.log(res);
      this.processData(type, res.data.data);
    })
  },
  processData(type, list) {
    if (type === 'up') {
      this.setData({
        musicList: [
          ...this.data.musicList,
          ...list
        ],
        id: list[list.length-1].id
      })
    } else if (type === 'down') {
      this.setData({
        musicList: list
      })
      wx.stopPullDownRefresh();
    }
  },
  onReachBottom () {
    this.getList('up');
  }
})
