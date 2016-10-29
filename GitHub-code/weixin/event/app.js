//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    //mashupcloud的app认证
    this.auth()
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  auth: function() {
    var that = this;
    var url = 'http://hw.mashupcloud.cn/mcloud/developer/auth.do'
    wx.request({
      url: url,
      data: {
        appkey: 'SGjLIzFpgXDGvzcgGTPdAgJDqvioGmOq',
        appsecret: 'WtuvCMQWBjkGswuSxVWEBVzVeiGJXqgz'
      },
      success: function(res) {
        console.log(res.data)
        if (res.data[0] == 'OK') {
          var token = res.data[1]
          that.globalData.token = token
        }
      }
    })
  },
  globalData:{
    userInfo:null,
    token:''
  }
})