// pages/add-adress/add-adress.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressValue: 0,   //地址下标
    addressRange: ["北京市","江西省", "湖南省", "上海市","湖北省","浙江省", "福建省", "重庆市"],
  },
  // 地区选择
  bindaddressChange:function(e){
    this.setData({
      addressValue: e.detail.value
    })
  },
  // 存储表单到本地
  submitdate: function (event) {
      app.globalData.adressInfo.push(event.detail.value);
      // var adressInfo = event.detail.value;
      // wx.setStorage({
      //   key: 'adressInfo',
      //   data: adressInfo,
      //   success: function (res){
      //     wx.navigateTo({
      //       url: '/pages/my/adress/adress'
      //     })
      //   }
      // })
      wx.navigateTo({
        url: '/pages/my/adress/adress'
      })
      console.log(app.globalData.adressInfo);
    },

  // // 提交表单
  // formSubmit: function(e){
  //   var warn = "";
  //   var that = this;
  //   var flag = false;
  //   if(!e.detail.value.name){
  //     warn = "请填写收件人！";
  //   } else if(!e.detail.value.tel){
  //     warn = "请填写手机号码！";
  //   } else if(!(/^1(3|4|5|7|8)\d{9}$/.test(e.detail.value.tel))){
  //     warn = "手机号码格式不正确！";
  //   } else if(!e.detail.value.address){
  //     warn = "请选择地区！";
  //   } else if(!e.detail.value.doorAdress){
  //     warn = "请填写详细地址！";
  //   } else if(!e.detail.value.IDcard){
  //     warn = "请填写身份证号码";
  //   } else if(!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/).test(e.detail.value.IDcard)){
  //     warn = "身份证号码格式不正确"
  //   } else{
  //     flag=true;
  //       wx.redirectTo({
  //       url: '../adress/adress ? tel='+e.detail.value.tel+"&address="+that.data.addressRange[e.detail.value.address]+"&doorAddress="+e.detail.value.doorAddress+"&name="+e.detail.value.name+"&flag="+flag+"&addressvalue="+e.detail.value.address
  //       //后面跟的是需要传递到下一个页面的参数
  //       })
  //     if(flag==false){
  //         wx.showModal({
  //         title: '提示',
  //         content:warn
  //       })
  //     }  
  //   }
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '添加地址',
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