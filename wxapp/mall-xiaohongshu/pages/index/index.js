// pages/kinds/kinds.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [       // 导航栏内容数据
      { name: '推荐', id: 'tuijian' },
      { name: '附近', id: 'fujin' },
      { name: '视频', id: 'shipin' },
      { name: '时尚', id: 'shishang' },
      { name: '护肤', id: 'hufu' },
      { name: '彩妆', id: 'caizhuang' },
      { name: '美食', id: 'meishi' },
      { name: '旅行', id: 'lvxing' },
      { name: '影视', id: 'yingshi' },
      { name: '读书', id: 'dushu' },
      { name: '明星', id: 'mingxing' },
      { name: '健身', id: 'jianshen' },
      { name: '家居', id: 'jiaju' },
      { name: '音乐', id: 'yinyue' },
      { name: '宠物', id: 'chongwu' },
      { name: '婚礼', id: 'hunli' },
      { name: '母婴', id: 'muying' },
      { name: '萌娃', id: 'mengwa' },
      { name: '数码', id: 'shuma' },
      { name: '男士穿搭', id: 'nanshichuanda' },
    ],
    curIndex: 0,
    detail: [],
    toView: 'tuijian',
    scroll: true
  },
  switchCategory(e) {
    this.setData({
      curIndex: e.currentTarget.dataset.index?e.currentTarget.dataset.index:0,
      toView: e.currentTarget.dataset.index,
    })
  },
  // 搜索点击事件
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
    // 请求数据
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b1e17a0d4a14a3247a6cd6b/',
      success: (res) => {
        this.setData({
          detail: res.data.data
        })
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

