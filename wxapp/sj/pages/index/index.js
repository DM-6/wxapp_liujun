// //index.js
// //获取应用实例
// import testDrive from '../../modules/test-drive'
// // console.log(testDrive)
// // 在Page里得到app
// const app = getApp()

// Page({
//   data: {
//     slides:[]

//     // {
//     //   id: 5,
//     //   header:'全新一代发现',
//     //   sub_header:'Discovery',
//     //   description:'全尺寸七座SUV，现已接受预订',
//     //   image:'https://resources.ninghao.net/landrover/discover-1.jpg'
//     // },{
//     // id: 3,
//     // header:'全新揽胜星脉',
//     // sub_header:'Rande Rover',
//     // description:'标新立异的前卫揽胜',
//     // image:'https://resources.ninghao.net/landrover/velar-1.jpg'
//     // }
//   },
//   onLoad(){
//     this.setData({
//       slides: app.globalData.slides
//     })
//   },
//   //事件处理函数
//   testDrive,
//   readMore(event){
//     const id = event.target.dataset.id;
//     wx.navigateTo({
//       url:`/pages/vehicies/show?id=${id}`
//     })
//   }
// })


import testDrive from '../../modules/test-drive'
const app = getApp()

Page({
  data: {
    slides: null,
    entities: null
  },
  testDrive,
  readMore(event) {
    wx.navigateTo({
      url: `/pages/vehicles/show?id=${ event.target.dataset.id }`
    })
  },
  onLoad() {
    this.setData({
      slides: app.globalData.slides,
      entities: app.globalData.vehicles
    })
  }
})