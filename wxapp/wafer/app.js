//app.js
App({
  onLaunch: function () {
    wx.getStorage({
      key: 'user-info',
      success: (res) => {
        // console.log(res.data);
        // (this.globalData.userInfo)
        this.globalData.userInfo = res.data
      }
    })
  },
  globalData: {
    userInfo: null
  }
})