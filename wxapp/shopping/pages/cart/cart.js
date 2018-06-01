// pages/cart/cart.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hasList:false,
    carts:[],
    totalPrice: 0,
    seclectAllStatus: true
  },

  onShow: function () {
    this.setData({
      carts:[
        { id: 1, title: '新鲜芹菜 半斤', image: '/images/s5.png', num: 4, price: 0.01, selected: true },
        { id: 2, title: '素米 500g', image: '/images/s6.png', num: 1, price: 0.03, selected: true }
      ],
      hasList: true
    })
    this.getTotalPrice();
  },

  minusCount(e){
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    if(num<=1)return false;
    num--;
    carts[index].num = num
    this.setData({
      carts
    })
    this.getTotalPrice();
  },
  addCount(e){
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num++;
    carts[index].num=num
    this.setData({
      carts
    })
    this.getTotalPrice();
  },
  selectList(e){
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    const selected = carts[index].selected;
    carts[index].selected=!selected;
    this.setData({
      carts
    });
    this.getTotalPrice();
  },
  // 总价计算方法
  getTotalPrice(){
    let carts = this.data.carts;
    let total = 0;
    let vtotal=0;
    for (let i = 0, Len = carts.length; i < Len; i++) {
      vtotal += carts[i].num * carts[i].price;
      if (carts[i].selected)
        total += carts[i].num * carts[i].price;
      }
      
      this.setData({
          totalPrice: total.toFixed(2)
      })
      if (total.toFixed(2)==0){
        this.setData({
          seclectAllStatus: false
        })
      }
      if (vtotal == total){
        console.log('可以全选了');
        this.setData({
          seclectAllStatus: true
        })
      }else{
        this.setData({
          seclectAllStatus: false
        })
      }
    },

  selectAll (e){
    let carts = this.data.carts;
    let seclectAllStatus = this.data.seclectAllStatus;
    seclectAllStatus=!seclectAllStatus;
    for (let i = 0, Len = carts.length; i<Len;i++) {
      carts[i].selected = seclectAllStatus;
    }
    this.setData({
      carts,
      seclectAllStatus
    })
    this.getTotalPrice();
  }
})