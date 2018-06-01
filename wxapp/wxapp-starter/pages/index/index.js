import {
  API_BASE
} from '../../config/api'

const app = getApp()

Page({
  data: {
    entities: [],
    isLoading: true,
    currentPage: 1,
    totalPages: 1,
    total: 0
  },
  onPullDownRefresh() {
    // console.log('下拉了');
    wx.request({
      url: API_BASE,
      success: (res) => {
        // console.log(res);
        this.setData({
          isLoading: false,
          entities: res.data.data.articles,
          currentPage: 1
        })
      }})
  },
  onLoad () {
    wx.request({
      url: API_BASE,
      success: (res) => {
        // console.log(res);
        this.setData({
          isLoading: false,
          entities: res.data.data.articles,
          currentPage: 1,
          totalPages: res.data.data.totalPages,
          total: res.data.data.total
        })
      }})
  },
  onReachBottom () {
    // console.log('到底了');
    // 请求下一页的数据
    // 最后一页
    // model? 
    // 解构json
    let { currentPage, totalPages, isLoading } = this.data
    console.log(currentPage, totalPages, isLoading);
    if ( currentPage >= totalPages || isLoading) {
      return;
    }
    currentPage += 1
    this.setData({
      isLoading: true
    })
    const url = `${API_BASE}/${currentPage}`;
    wx.request({
      url: API_BASE,
      success: (res) => {
        const entities = [
          ...this.data.entities,
          ...res.data.data.articles
        ];
        this.setData({
          entities,
          isLoading: false,
          currentPage
        })
      }
    })
    // this.data.currentPage
  }
})
