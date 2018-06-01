// pages/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startDate: '2018-05-25',
    endPickerStart:'2018-05-25'
  },
  bindDateChange(e) {
    const type = e.currentTarget.dataset.type;
    console.log(type)
    if(type == 'startPicker') {
      this.setData({
        startDate: e.detail.value,
        endPickerStart: e.detail.value
      })
    }else {
      this.setData({
        endDate: e.detail.value,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
