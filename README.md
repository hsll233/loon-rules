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

## G1 ACQ（Google One · Loon 非官方适配）

原项目：[crhywun/g1-acq](https://github.com/crhywun/g1-acq)。此文件仅将 Shadowrocket 模块入口改成 Loon 插件格式，核心响应改写与本地报告 JavaScript 仍引用原作者 `v7.5.0`，不包含原模块的全局 UDP 443 阻断。

**Raw 订阅地址**

```text
https://raw.githubusercontent.com/hsll233/loon-rules/main/G1-ACQ-Loon-v7.5.0.plugin
```

**Loon 一键导入**

```text
loon://import?plugin=https%3A%2F%2Fraw.githubusercontent.com%2Fhsll233%2Floon-rules%2Fmain%2FG1-ACQ-Loon-v7.5.0.plugin
```

在 Loon 中停用之前直接导入的 Shadowrocket 模块，启用此插件并开启 MITM（解密 `one.google.com`）；安装并信任 Loon 根证书后，重新连接，再在浏览器打开 `https://one.google.com/g1-sku-report`。正常时应显示“本机脚本已接管”。如出现 Google 官方 404，检查插件脚本是否已加载、MITM 和证书设置。此适配尚未在实机验证，也不能保证 App Store 接受任何候选优惠 SKU。
