// pages/mall/mall.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{}
  },
  
  entrySearch(e) {
    wx.navigateTo({
      url: '../index/searchbar/searchbar',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '小红书',
    })
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b1e94172742e721eaa1a58f/data/',
      success: (res) => {
        // console.log(res.data);
        this.setData({
          detail: res.data.data
        })
        console.log(this.data.detail)
      }
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

// {
//   "good_img":"https://img.xiaohongshu.com/items/c1a0056ba9ba17b30446a0e040dc9e30@800w_90Q_1x_2o.jpg",
//   "title": "便携香水加香一天",
//   "desc"："IAA.国际香氛--【香奈儿第四代调香师】 女士香水持久淡香小样正品高端果味香水",
//   "current_price":"￥89",
//   "original_price":"￥138",
//   "sign_img":"https://img.xiaohongshu.com/seller/0d1b063d887360fc5a3779bd6784a453"
// },
// {
//   "good_img":"https://img.xiaohongshu.com/items/77a33ea904f78bf2b88ea6f098917c64@800w_90Q_1x_2o.jpg",
//   "title": "室内扩香加湿器",
//   "desc"："IAA.国际香氛--香熏机家居扩香机室内熏香加湿器 月光精灵 香氛机",
//   "current_price":"￥499",
//   "original_price":"￥138",
//   "sign_img":"https://img.xiaohongshu.com/seller/0d1b063d887360fc5a3779bd6784a453"
// }

//     "good_img":"https://img.xiaohongshu.com/items/c1a0056ba9ba17b30446a0e040dc9e30@800w_90Q_1x_2o.jpg",
//     "title":"便携香水加香一天",
//     "desc":"IAA.国际香氛",
//     "current_price":"￥89",
//     "original_price":"￥138",
//     "sign_img":"https://img.xiaohongshu.com/seller/0d1b063d887360fc5a3779bd6784a453"