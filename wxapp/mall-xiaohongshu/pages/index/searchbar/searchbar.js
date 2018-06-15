Page({

    /**
     * 页面的初始数据
     */
    data: {
      historyRecord:[{
        id: '0',
        recordItem:' '
      }],
      hots:[{
        id:'01',
        text:'上海',
        hotStatus:132
      },{
        id:'02',
        text:'父亲节礼物',
        hotStatus:103
      },{
        id:'03',
        text:'cos',
        hotStatus:43
      },{
        id:'04',
        text:'vc水',
        hotStatus:38
      },{
        id:'05',
        text:'丸子头',
        hotStatus:45
      },{
        id:'06',
        text:'景甜',
        hotStatus:92
      },{
        id:'07',
        hotImg:'/images/hot.png',
        text:'来小红书看世界杯',
        hotStatus:156
      },{
        id:'08',
        text:'APP',
        hotStatus:85
      }],
      searchContext:'',
      haveSerachLike: false,
      searchLikeList: [],
      searchLikeAllList: [{
        text: '2018世界杯'
      }, {
        text: '世界杯赛程'
      }, {
        text: '世界杯狂欢色'
      }, {
        text: '为世界杯干杯'
      }, {
        text: '世界杯球迷上线'
      }, {
        text: '世界杯没有时差'
      },{
        text:'...'
      }]
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var hots = this.data.hots;
      var hots2 = hots.sort((x, y) => y.hotStatus - x.hotStatus);
      // reverse()方法会反转数组项的顺序
      // hots.reverse();
      console.log(hots2);
      this.setData({
        hots: hots2
      })
  
      wx.getStorage({
        key: 'historyRecord',
        success: (res) => {
          // success
          this.setData({
            historyRecord: res.data
          })
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
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
    
    },
    bindconfirm: function(e){
      console.log(e);
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
    changeSearch (e) {
      let value = e.detail.value
      if (value === '') {
        this.setData({
          haveSerachLike: false
        })
        return
      }
      let arr = this.data.searchLikeAllList.filter(item => item.text.indexOf(value) > -1)
      console.log(arr)
      this.setData({
        haveSerachLike: true,
        searchLikeList: arr,
      })
    },
    backTo () {
      wx.navigateBack({
        delta: 1
      })
    },
    deleteRecord: function(e){
      console.log(e);
      let filterArr = this.data.historyRecord.filter((item, index) => {
        return index !== e.target.dataset.index
      })
  
      this.setData({
        historyRecord: filterArr
      })
  
      wx.setStorage({
        key: 'historyRecord',
        data: filterArr
      })
    },
    saveHistory (param) {
      let arr = this.data.historyRecord
      arr.unshift(param)
      wx.setStorage({
        key: 'historyRecord',
        data: arr
      })
      this.setData({
        historyRecord: arr
      })
    }
  })