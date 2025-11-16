Page({
  data: {
    user: {
      avatar: "",
      name: "",
      handle: "",
      location: "",
      followers: 0,
      following: 0,
    },
  },

  onLoad() {
    // TODO: 之后可以在这里从云数据库加载真实用户数据
  },

  onBack() {
    wx.navigateBack({
      fail: () => {
        wx.switchTab({ url: "/pages/profile/profile" })
      },
    })
  },

  onSetting() {
    wx.showToast({ title: "打开设置", icon: "none" })
  },

  onTapFollowers() {
    wx.showToast({ title: "查看粉丝", icon: "none" })
  },

  onTapFollowing() {
    wx.showToast({ title: "查看关注", icon: "none" })
  },

  onTapSocial(e) {
    const { type } = e.currentTarget.dataset
    wx.showToast({ title: type || "social", icon: "none" })
  },

  onAdd() {
    wx.showToast({ title: "新增内容", icon: "none" })
  },
})

