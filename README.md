# loon-rules

Loon rules and plugins.

## 小红书插件

### 1. 阻止上滑视频

允许从首页或搜索结果进入视频，但阻止视频详情页继续获取下一条视频。

**Raw 订阅链接**

```text
https://raw.githubusercontent.com/hsll233/loon-rules/main/XHS_Stop_Video_Swipe.plugin
```

**Loon 一键导入**

```text
loon://import?plugin=https%3A%2F%2Fraw.githubusercontent.com%2Fhsll233%2Floon-rules%2Fmain%2FXHS_Stop_Video_Swipe.plugin
```

### 2. 首页 / 推荐去视频

过滤 `/api/sns/v*/homefeed` 和 `/api/sns/v*/trending` 返回中的视频项目，让首页/推荐流不再显示视频。

**Raw 订阅链接**

```text
https://raw.githubusercontent.com/hsll233/loon-rules/main/XHS_Filter_Home_Videos.plugin
```

**Loon 一键导入**

```text
loon://import?plugin=https%3A%2F%2Fraw.githubusercontent.com%2Fhsll233%2Floon-rules%2Fmain%2FXHS_Filter_Home_Videos.plugin
```

## 使用要求

- Loon 已开启 MITM / HTTPS 解密。
- Loon CA 证书已安装，并在 iOS 的“证书信任设置”中开启完全信任。
- 更新插件后建议彻底关闭小红书后台，再重新打开测试。

两个插件可以独立订阅，也可以同时启用。
