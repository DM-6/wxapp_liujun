import { API_CREATE }
  from '../../config/api.js'

const app = getApp()

Page({
  data: {
    entity: {
      title: '',
      content: '',
      status: 'publish'
    },
    images: [
      {
        id: 1,
        path: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D72%2C72%2C0/sign=31308be09edda144da5c3ff2d48ae790/3b87e950352ac65c2ddf4980f2f2b21192138a6e.jpg'
      }, {
        id: 2,
        path: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D72%2C72%2C0/sign=c07e328600087bf47db904a994ee601e/a08b87d6277f9e2fdae310c51d30e924b999f32d.jpg'
      }, {
        id: 3,
        path: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D72%2C72%2C0/sign=26002fda9582d158bbd70af1e6372eea/9825bc315c6034a8a9d611b5c2134954092376ca.jpg'
      }, {
        id: 4,
        path: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D72%2C72%2C0/sign=011cd03ea18b87d65017f85f61351f0a/728da9773912b31b0251af268618367adab4e184.jpg'
      }, {
        id: 5,
        path: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D72%2C72%2C0/sign=54b0bf6f7bcf3bc7e8559eacb73d8d93/a71ea8d3fd1f4134a4b3461c2e1f95cad0c85ecf.jpg'
      }
    ],
    loading: false
  },
  onLoad () {
  },
  onChangeStatus (e) {
    this.setData({
      ['entity.status']: e.detail.value? 'publish': ''
    });
  },
  onInputTitle(e) {
    this.setData({
      ['entity.title']: e.detail.value
    });
  },
  onInputContent(e) {
    this.setData({
      ['entity.content']: e.detail.value
    });
  },
  onTapSubmitButton (e) {
    // disabled 状态 ui 组件很多状态 loading
    // 提交 ajax wx.request
    this.setData({
      loading: true
    });
    wx.request({
      // 将api 地址模块化， 有利于以后的维护
      url: API_CREATE,
      method: 'POST',
      data: {
        ...this.data.entity
      },
      success: (response) => {
        this.setData({
          entity: {
            title: '',
            content: '',
            status: 'publish'
          },
          loading: false
        });
        wx.navigateTo({
          url: `/pages/posts/show?id=${response.data.data.id}`
        })
      }
    })
  },
  onChooseImage (e) {
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: (response) => {
        // console.log(response);
        const path = response.tempFiles[0].path;
        const images = [{
          id: Math.ceil(Math.random()*100),
          path
        }, ...this.data.images];
        this.setData({
          images,
          length: images.length
        })
      }
    })
  },
  deleteImage: function(e){
    var that = this;
    var images = that.data.images;
    var index = e.currentTarget.dataset.index;
    wx.showModal({
      title: '提示',
      content: '删除图片？',
      sucess:function(res){
        if(res.confirm){
          console.log('确定');
          images.splice(index,1);
        } else if(res.cancel){
          console.log('取消');
          return false;
        }
        that.setData({
          images
        });
      }
    })
  }
})
