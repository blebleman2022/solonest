// 个人主页页面
Page({
  data: {
    userInfo: {
      avatar: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
      nickname: '张三',
      location: '上海',
      onlineStatus: '在线',
      tags: ['设计师', '乐观主义者', '咖啡爱好者', '科技爱好者'],
      followingCount: 154,
      followersCount: 892,
      hobbies: [
        { icon: '✈️', label: '旅行', bgColor: '#B3E5FC' },
        { icon: '📷', label: '摄影', bgColor: '#FFCC80' },
        { icon: '🎵', label: '音乐', bgColor: '#C8E6C9' },
        { icon: '🏃', label: '运动', bgColor: '#FFCCBC' },
      ],
      skills: ['UI Design', 'Communication', 'Data Analysis', 'Project Management'],
      photos: [
        'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
        'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
        'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
      ],
      canProvide: [
        'UI/UX 设计服务，专注移动端和 Web 应用',
        '品牌视觉设计',
        '用户体验咨询',
      ],
      canProvideTags: ['UI设计', 'UX设计', '品牌设计', '用户研究'],
      currentProjects: [
        '担任某科技创业公司首席设计师',
        '探索生成式 AI 艺术创作',
      ],
      collaborationPreference: '偏好远程合作，可接受短期项目合作和长期顾问角色。希望与有创新精神的团队合作。',
      workExperience: '曾在多家互联网公司担任设计师，拥有 5 年以上的产品设计经验。擅长从 0 到 1 的产品设计，参与过多个千万级用户产品的设计工作。',
      workExperienceTags: ['产品设计', '用户研究', '团队协作', '项目管理'],
      additionalMaterials: [
        'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
        'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
        'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
      ],
    },
  },

  onLoad() {
    // 页面加载时获取用户信息
    this.loadUserInfo();
  },

  // 加载用户信息
  loadUserInfo() {
    // TODO: 从云数据库获取用户信息
    console.log('加载用户信息');
    
    // 示例：从云数据库获取
    // const db = wx.cloud.database();
    // db.collection('users').doc('user_id').get({
    //   success: res => {
    //     this.setData({
    //       userInfo: res.data
    //     });
    //   }
    // });
  },

  // 举报
  onReport() {
    wx.showActionSheet({
      itemList: ['垃圾营销', '虚假资源', '骚扰', '违规内容', '其他'],
      success: (res) => {
        if (!res.cancel) {
          wx.showToast({
            title: '举报已提交',
            icon: 'success',
          });
        }
      },
    });
  },

  // 预览照片
  onPreviewPhoto(e) {
    const index = e.currentTarget.dataset.index;
    wx.previewImage({
      current: this.data.userInfo.photos[index],
      urls: this.data.userInfo.photos,
    });
  },

  // 预览补充资料
  onPreviewMaterial(e) {
    const index = e.currentTarget.dataset.index;
    wx.previewImage({
      current: this.data.userInfo.additionalMaterials[index],
      urls: this.data.userInfo.additionalMaterials,
    });
  },

  // 关注
  onFollow() {
    wx.showToast({
      title: '已关注',
      icon: 'success',
    });
    
    // TODO: 调用云函数或云数据库更新关注状态
    // wx.cloud.callFunction({
    //   name: 'followUser',
    //   data: {
    //     targetUserId: 'xxx'
    //   }
    // });
  },

  // 发起聊天
  onChat() {
    wx.showToast({
      title: '跳转到聊天页面',
      icon: 'none',
    });
    
    // TODO: 跳转到聊天页面
    // wx.navigateTo({
    //   url: '/pages/chat/chat?userId=xxx'
    // });
  },
});

