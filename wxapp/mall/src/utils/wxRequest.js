// 统一小程序wx.request请求
import wepy from 'wepy';
import util from '@/utils/util';
import md5 from '@/utils/md5';
// 函数 url, params, get post
// 函数 （封装）  函数不同，URL不同  params参数， 请求方法get/post
// @params json    query 传查询参数      method 方法
const TIMESTAMP = util.getCurrentTime();     //返回当前的时间戳
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase());      //加密方法
const API_SECRET_KEY = 'www.mall.cycle.com';
// 前端-服务器端 要有验证
// TIMESTAMP,params  API_SECRET_KEY 后端也有
const wxRequest = async(params = {}, url) => {
    // wx.request
    let data = params.query || {};
    // 签名  加密 code 你有 md5 加密
    data.sign = SIGN;
    // 在请求的过程中，带上时间戳，是常用的作法
    data.time = TIMESTAMP;
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