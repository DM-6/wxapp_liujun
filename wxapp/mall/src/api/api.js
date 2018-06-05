import { wxRequest } from '@/utils/wxRequest';
// 套路 -> 架构
const apiMall = 'https://sujiefs.com/'

// const wxJsCode2Session = (params) => wxRequest(params, apiMall + './api/wechat/jscode2session')
// const wxJsCode2Session = (params) => wxRequest(params, `${apiMall}/api/wechat/jscode2session`)
const wxJsCode2Session = (params) => {
    return wxRequest(params, `${apiMall}/api/wechat/jscode2session`)
}

export default {
    wxJsCode2Session
}