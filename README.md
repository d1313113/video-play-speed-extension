# 视频播放速度调整插件

[👉 English README 👈](./README_en.md)

> 本插件基于 [adambullmer/vue-cli-plugin-browser-extension](https://github.com/adambullmer/vue-cli-plugin-browser-extension) 开发。

## 初衷

目前郭先生😎的直播只能在 [GTV | Livestream](https://livestream.com/accounts/27235681) 上看，但非常不爽的是 Livestream 竟然不能像 YouTube 那样调整播放速度🙄。对于我这种 [996](https://github.com/996icu/996.ICU/blob/master/README_CN.md) 的码农而言，两倍速看视频是必须的，否则根本不够时间😔。

## 特性

* 最大支持 10 倍播放速度（看广告的时候可借此快速跳过😉）。
* 支持所有网站的视频播放，包括 Livestream 以及 YouTube。
* 支持页面内所有视频的播放速度调整（貌似没什么卵用🤣）。

## 展示

![GTV | Livestream](./screenshots/GTV.png)

![路德 | YouTube](./screenshots/lude.png)

![Vimeo](./screenshots/vimeo.png)

## 开发

### 拉取代码

```
$ git clone https://github.com/Pangu2020together/video-play-speed-extension.git
```

### 安装依赖

```
$ cd video-play-speed-extension
$ npm install
```

### 常用命令

```
$ npm run serve # 开发
$ npm run build # 编译生产包
$ npm run lint  # Lint + autofix
```

## TODOs

* 测试
* 引入 TypeScript 或 Flow

## 安全须知

* 战友们所发布的软件，包括但不限于插件、安装包等，未必都是安全的
* 即便是开源的，但所发布的内容也可以和开源的不一样（注入恶意代码）
* 开源不是「安全可靠」的代名词，除非你能审查每一行代码并自行编译
* 作为开发者，建议只在 VPN + 虚拟机环境下开发调试其他战友的「作品」

说那么多，貌似有点自我打脸，但无非也是想让战友们加强安全意识，保护好自己。  
若对本插件不放心，不妨自行搜索其他替代品，例如「[video speed extension](https://www.google.com/search?q=video%20speed%20extension)」。

## ✊✊✊ 一切都是刚刚开始 🙏🏻🙏🏻🙏🏻
