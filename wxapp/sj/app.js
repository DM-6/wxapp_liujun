// //app.js
// // 应用启动  先启动onLaunch
// // APP -> Page
// // 全局的，应用级别的一些行为，添加全局的数据
// import db from './assets/db.js';
// App({
//   onLaunch: function () {
//     Object.assign(this.globalData,db);
//     //ajax请求
//     // wx.request({
//     //   url: 'https://resources.ninghao.net/wxapp-case/db.json',
//     //   success:(response) => {
//     //     // console.log(response);
//     //     Object.assign(this.globaDate,response.data)
//     //     console.log(this.globaDate);
//     //   },
//     //   fail:(error) => {
//     //     console.log(error);
//     //   }
//     // })
//   },
//   globalData: {

//   }
// })

App({
  globalData: {

  },
  onLaunch() {
    wx.request({
      url: 'https://resources.ninghao.net/wxapp-case/db.json',
      success: (response) => {
        Object.assign(this.globalData, response.data)

        const currentPages = getCurrentPages()
        if (currentPages.length !== 0) {
          currentPages[currentPages.length - 1].onLoad()
        }
      }
    })
  }
})