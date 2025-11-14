# Solonest 云开发配置指南

## 🎯 当前状态

✅ 已开通云开发  
✅ 已创建云函数目录  
✅ 已配置项目支持云开发  

---

## 📋 配置步骤

### 1. 获取云开发环境 ID

1. 在微信开发者工具中，点击顶部菜单 **"云开发"**
2. 进入云开发控制台
3. 查看 **环境 ID**（例如：`solonest-xxx`）
4. 复制环境 ID

### 2. 更新 app.js 中的环境 ID

打开 `miniprogram/app.js`，找到第 18 行：

```javascript
wx.cloud.init({
  env: 'solonest-prod', // ⚠️ 替换为你的云开发环境 ID
  traceUser: true,
})
```

将 `'solonest-prod'` 替换为你的实际环境 ID。

### 3. 重新编译项目

在微信开发者工具中点击 **"编译"** 按钮，页面应该正常显示了。

---

## 🗄️ 数据库设计

### 创建集合（Collections）

在云开发控制台 → 数据库 → 创建以下集合：

#### 1. users（用户集合）

```json
{
  "_id": "user_xxx",
  "_openid": "微信 openid（自动生成）",
  "nickname": "张三",
  "avatar": "cloud://xxx.png",
  "location": "上海",
  "onlineStatus": "在线",
  "canProvide": ["UI设计", "品牌设计"],
  "canProvideTags": ["UI设计", "UX设计"],
  "currentProjects": ["项目A", "项目B"],
  "collaborationPreference": "偏好远程合作...",
  "hobbies": [
    { "icon": "✈️", "label": "旅行", "bgColor": "#B3E5FC" }
  ],
  "skills": ["UI Design", "Communication"],
  "photos": ["cloud://xxx1.png", "cloud://xxx2.png"],
  "workExperience": "曾在多家互联网公司...",
  "workExperienceTags": ["产品设计", "用户研究"],
  "additionalMaterials": ["cloud://xxx.png"],
  "followingCount": 154,
  "followersCount": 892,
  "createTime": "2024-01-01T00:00:00.000Z",
  "updateTime": "2024-01-01T00:00:00.000Z"
}
```

#### 2. needs（需求集合）

```json
{
  "_id": "need_xxx",
  "userId": "user_xxx",
  "userInfo": {
    "nickname": "张三",
    "avatar": "cloud://xxx.png"
  },
  "title": "寻找前端开发合作伙伴",
  "description": "我正在做一个...",
  "linkedProject": "项目A",
  "location": "上海",
  "tags": ["前端开发", "React"],
  "status": "open",
  "viewCount": 100,
  "createTime": "2024-01-01T00:00:00.000Z"
}
```

#### 3. follows（关注关系集合）

```json
{
  "_id": "follow_xxx",
  "fromUserId": "user_xxx",
  "toUserId": "user_yyy",
  "createTime": "2024-01-01T00:00:00.000Z"
}
```

#### 4. messages（聊天消息集合）

```json
{
  "_id": "message_xxx",
  "fromUserId": "user_xxx",
  "toUserId": "user_yyy",
  "content": "你好，我对你的需求很感兴趣",
  "type": "text",
  "isRead": false,
  "createTime": "2024-01-01T00:00:00.000Z"
}
```

#### 5. reviews（评价集合）

```json
{
  "_id": "review_xxx",
  "fromUserId": "user_xxx",
  "toUserId": "user_yyy",
  "score": 8.5,
  "dimensions": {
    "communication": 9,
    "authenticity": 8,
    "fulfillment": 8
  },
  "comment": "合作愉快，沟通顺畅",
  "createTime": "2024-01-01T00:00:00.000Z"
}
```

#### 6. notifications（通知集合）

```json
{
  "_id": "notification_xxx",
  "userId": "user_xxx",
  "type": "follow",
  "content": "张三关注了你",
  "relatedId": "user_yyy",
  "isRead": false,
  "createTime": "2024-01-01T00:00:00.000Z"
}
```

---

## 🔐 数据库权限设置

### 推荐权限配置

在云开发控制台 → 数据库 → 集合权限设置：

| 集合 | 读权限 | 写权限 |
|------|--------|--------|
| users | 所有用户可读 | 仅创建者可写 |
| needs | 所有用户可读 | 仅创建者可写 |
| follows | 仅创建者可读写 | 仅创建者可写 |
| messages | 仅创建者可读写 | 仅创建者可写 |
| reviews | 所有用户可读 | 仅创建者可写 |
| notifications | 仅创建者可读写 | 仅创建者可写 |

---

## 📦 云存储配置

### 存储目录结构

```
cloud://
├── avatars/          # 用户头像
├── photos/           # 用户照片
├── materials/        # 补充资料
└── temp/             # 临时文件
```

### 上传图片示例

```javascript
// 选择图片
wx.chooseImage({
  count: 1,
  success: res => {
    const filePath = res.tempFilePaths[0];
    
    // 上传到云存储
    wx.cloud.uploadFile({
      cloudPath: `avatars/${Date.now()}.png`,
      filePath: filePath,
      success: uploadRes => {
        console.log('上传成功', uploadRes.fileID);
        // 保存 fileID 到数据库
      }
    });
  }
});
```

---

## ⚡ 下一步

1. ✅ 在微信开发者工具中点击 **"编译"**，确认页面正常显示
2. 📝 在云开发控制台创建数据库集合
3. 🔧 开始实现云函数（用户登录、数据获取等）

---

**需要帮助？** 告诉我你遇到的问题！

