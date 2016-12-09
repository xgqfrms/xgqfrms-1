//eventList.js
var util = require('../../utils/util.js')
//获取应用实例
var app = getApp()
Page({
  data: {
    events: []
  },
  onLoad: function () {
    var that = this
    url = 'http://hw.mashupcloud.cn/mcloud/LIST/Event/'
    wx.request({
      url: url,
      data: {
        entity: 'Event',
        token: app.globalData.token
      },
      success: function(res) {
        console.log(res.data)
        //返回格式：["OK", [翻页数据], [实体列表]]
        //把事件列表保存到data中显示
        that.data.events = res.data[2]
      },
      fail: function() {
        console.log('fail to request')
      },
      complete: function() {
        console.log('request complete url='+url)
      }
    })
  },
  bindEventItemTap: function(obj) {
    console.log(obj.target)
    var id = obj.target.id
    var name = ''
    var time = ''
    for (var i=0; i<this.data.events.length; i++) {
      var event = this.data.events[i]
      if (event.id == id) {
        name = event.name
        time = event.time
        break
      }
    }
    wx.navigateTo({
      url: '../event/event?id='+id+'&name='+name+'&time='+time
    })
  }
})
