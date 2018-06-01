// // es6 模块化语法 module
// // js 变量或常量，它的类型由值决定
// // var a = 1;
// // a = "str";
// // const b = 123;
// const testDrive = () => {
//     // wx 代表要使用来自微信内置的api
//     // 原生的api 大部分的小程序是html5 
//     // webview 网页 开发效率高   nativeview：Android iOS 
//     // 性能上比原生的慢一些
//     wx.showToast({
//         title:'暂不支持'
//     })
// }
// export default testDrive


// // 模块化封装   testDrive

const testDrive = () => {
    wx.showToast({
      title: '暂不支持'
    })
  }
  
  export default testDrive