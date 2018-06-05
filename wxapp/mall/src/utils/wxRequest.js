// 统一小程序wx.request请求
import wepy from 'wepy'
// 函数 url, params, get post
// 函数 （封装）  函数不同，URL不同  params参数， 请求方法get/post
// @params json    query 传查询参数      method 方法
const wxRequest = async(params = {}, url) => {
    // wx.request
    let data = params.query || {}
    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: {'Content-Type': 'application/json'}
    });
    return res
}

module.exports = {
    wxRequest
}