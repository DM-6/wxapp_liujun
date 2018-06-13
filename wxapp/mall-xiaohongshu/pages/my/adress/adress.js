// pages/adress/adress.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    adressInfo:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '地址列表',
    });
    var that=this;     //获取本地缓存
    // wx.getStorage({
    //   key:'adressInfo',
    //   success:function(res){
    //     console.log(res);
    //     var adressInfo=[];
    //     adressInfo.push(res.data);
    //     that.setData({
    //       adressInfo
    //     })
    //   }
    // })
  // this.data.adressInfo=app.globalData.adressInfo;
    that.setData({
      adressInfo:app.globalData.adressInfo
    })
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})