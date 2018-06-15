// pages/mall/mall.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{},
    goods:[
      {
        good_img:"https://img.xiaohongshu.com/items/c1a0056ba9ba17b30446a0e040dc9e30@800w_90Q_1x_2o.jpg",
        title: "便携香水加香一天",
        desc:"IAA.国际香氛--【香奈儿第四代调香师】 女士香水持久淡香小样正品高端果味香水",
        current_price:"￥89",
        original_price:"￥138",
        sign_img:"https://img.xiaohongshu.com/seller/0d1b063d887360fc5a3779bd6784a453"
      },
      {
        good_img:"https://img.xiaohongshu.com/items/77a33ea904f78bf2b88ea6f098917c64@800w_90Q_1x_2o.jpg",
        title: "室内扩香加湿器",
        desc:"IAA.国际香氛--香熏机家居扩香机室内熏香加湿器 月光精灵 香氛机",
        current_price:"￥499",
        original_price:"￥638",
        sign_img:"https://img.xiaohongshu.com/seller/0d1b063d887360fc5a3779bd6784a453"
      },
      {
        good_img:"https://img.xiaohongshu.com/items/6746d4addb04e36d58954977801984c8@800w_90Q_1x_2o.jpg",
        title: "时尚简约香满屋",
        desc:"IAA.国际香氛--室内天然无火香薰藤条 心悦 藤条香薰",
        current_price:"￥89",
        sign_img:"https://img.xiaohongshu.com/seller/0d1b063d887360fc5a3779bd6784a453"
      },
      {
        good_img:"https://ci.xiaohongshu.com/e78206dc-3d04-4112-abac-7d8dc61626b1@r_750w_750h_ss1.jpg",
        title: "Mac子弹头试色",
        desc:"Mac子弹头--最显白的Mac子弹头口红 ruby woo",
        current_price:"￥238",
        sign_img:"https://img.xiaohongshu.com/seller/0d1b063d887360fc5a3779bd6784a453"
      },
      {
        good_img:"https://img.xiaohongshu.com/items/c1a0056ba9ba17b30446a0e040dc9e30@800w_90Q_1x_2o.jpg",
        title: "便携香水加香一天",
        desc:"IAA.国际香氛--【香奈儿第四代调香师】 女士香水持久淡香小样正品高端果味香水",
        current_price:"￥89",
        original_price:"￥138",
        sign_img:"https://img.xiaohongshu.com/seller/0d1b063d887360fc5a3779bd6784a453"
      },
      {
        good_img:"https://img.xiaohongshu.com/items/77a33ea904f78bf2b88ea6f098917c64@800w_90Q_1x_2o.jpg",
        title: "室内扩香加湿器",
        desc:"IAA.国际香氛--香熏机家居扩香机室内熏香加湿器 月光精灵 香氛机",
        current_price:"￥499",
        original_price:"￥638",
        sign_img:"https://img.xiaohongshu.com/seller/0d1b063d887360fc5a3779bd6784a453"
      }
    ]
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
    wx.request({               //请求数据
      // url: 'https://www.easy-mock.com/mock/5b1e17a0d4a14a3247a6cd6b/data',
      success: (res) => {
        this.setData({
          goods: res.data.data
        })
        console.log(this.data.goods)
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
//   "desc":"IAA.国际香氛--【香奈儿第四代调香师】 女士香水持久淡香小样正品高端果味香水",
//   "current_price":"￥89",
//   "original_price":"￥138",
//   "sign_img":"https://img.xiaohongshu.com/seller/0d1b063d887360fc5a3779bd6784a453"
// },
// {
//   "good_img":"https://img.xiaohongshu.com/items/77a33ea904f78bf2b88ea6f098917c64@800w_90Q_1x_2o.jpg",
//   "title": "室内扩香加湿器",
//   "desc":"IAA.国际香氛--香熏机家居扩香机室内熏香加湿器 月光精灵 香氛机",
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