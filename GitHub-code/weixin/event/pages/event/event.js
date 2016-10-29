//event.js
//获取应用实例
var app = getApp()
Page({
  data:{
    options:{}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({options: options})
    console.log(options)
  },
  formSubmit: function(e) {
      //console.log(e.detail.value)
      var id = this.data.options.id
      var name = e.detail.value.name
      var time = e.detail.value.time
      console.log('submit id='+id+', name='+name+', time='+time+', token='+app.globalData.token)
      var url = ''
      if (id == undefined) {
          //添加
          url = 'http://hw.mashupcloud.cn/mcloud/ADD/Event/'
      }else{
          //修改
          url = 'http://hw.mashupcloud.cn/mcloud/EDIT/Event/'+id+'/'
      }
      //提交数据到后端
      wx.request({
          url: url,
          data: {
              token: app.globalData.token,
              entity:'Event',
              id: id,
              name: name,
              time: time
          },
          method: 'post',
          success:function(res) {
              console.log('ok')
              console.log(res.data)
              //返回事件列表页
              wx.navigateBack();
          },
          fail: function() {
              console.log('fail')
              //返回事件列表页
              wx.navigateBack();
          }
      });
  }
})