import goods from '../../api/goods'
const app = getApp()
Page({
  data: {
    num:1,
    has:true,
    goods:null,
    show:false,
    totalNum:0,
    scaleCart:false,
    selected:0
  },



  onLoad(options) {
    const id = options.id || 2;
    let curGoods;
    for (let i = 0, Len = goods.length; Len;i++){
      if(goods[i].id == id){
        curGoods = goods[i];
        break;
      }
    }
    setTimeout(()=>{
      this.setData({
        goods:curGoods
      })
    },1000)
  },



  addCount(){
    let num = ++this.data.num;
    this.setData({
      num
    })
  },
  addToCart() {
    const num = this.data.num;
    const total = this.data.totalNum;
    this.setData({
      show: true
    });
    setTimeout(() => {
      this.setData({
        show: false,
        scaleCart: true
      });
      setTimeout(() => {
        this.setData({
          scaleCart: false,
          hasCarts: true,
          totalNum: num + total
        })
      }, 200)
    }, 300)
  },

  select(e){
    let selected = e.currentTarget.dataset.index;
    console.log(selected)
    this.setData({
      selected
    })
  }
})
