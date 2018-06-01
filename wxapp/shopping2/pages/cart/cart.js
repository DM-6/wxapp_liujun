// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList: false,
    carts: [],
    totalPrice: 0,
    selectAllStatus: true
  },

  selectAll() {
    let selectAllStatus = this.data.selectAllStatus;
    let carts = this.data.carts;
    selectAllStatus = !selectAllStatus;
    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus,
      carts
    });
    this.getTotalPrice();
  },
  addCount(e) {
    let index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num++;
    carts[index].num = num;
    this.setData({
      carts
    })
    this.getTotalPrice();
  },
  minusCount(e) {
    let index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    if (num <= 1) return false;
    num--;
    carts[index].num = num;
    this.setData({
      carts
    })
    this.getTotalPrice();
  },
  /**
   * 总价的计算方法
   */
  getTotalPrice() {
    let carts = this.data.carts;
    let total = 0;
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].selected) {
        total += carts[i].num * carts[i].price;
      }

      this.setData({
        totalPrice: total.toFixed(2)
      })
    }
  },
  selectList(e) {
    const index = e.currentTarget.dataset.index
    // console.log(index)
    const carts = this.data.carts
    let selected = carts[index].selected
    carts[index].selected = !selected
    for(let i =0;i<carts.length;i++){
      if (!carts[i].selected) {
        // 在商品列表中取消一项就取消全选状态
        this.setData({
          selectAllStatus: false
        })
      }else{
        this.setData({
          selectAllStatus: true
        })
      }
    }

    // console.log(carts[index].selected)
    this.setData({
      carts,
    })
    this.getTotalPrice()
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
    this.setData({
      carts: [{
          id: 1,
          title: '新鲜芹菜 半斤',
          image: '/image/s5.png',
          num: 4,
          price: 0.01,
          selected: true
        },
        {
          id: 2,
          title: '素米 500g',
          image: '/image/s6.png',
          num: 1,
          price: 0.03,
          selected: true
        }
      ],
      hasList: true
    })
    this.getTotalPrice();
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