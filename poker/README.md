# 德州扑克双端原型（网页版）

单文件互动原型，涵盖 PRD 定义的 13 个界面。

## 使用

双击 `index.html` 即可用浏览器打开，无需任何安装或服务器。

## 画面清单

| 分组 | 画面 | 互动 |
| :--- | :--- | :--- |
| 核心牌局 | Web 牌桌主界面 | ✅ 下注滑杆 + 最小加注校验 |
| | 摊牌与多边池分层派彩 | ✅ 逐层展开主池／边池 |
| | 单挑桌行动顺位反转 | ✅ 翻前／翻后切换 |
| | WAP 牌桌 | — |
| | WAP 加注面板 | ✅ 长按 0.8 秒全下 |
| | WAP 关键状态三连 | — |
| 特色机制与信任 | 发多次牌 Run It Twice | ✅ 确认弹窗 → 双 Board 结算 |
| | EV Cashout 折现与界面隔离 | ✅ 胜率滑杆触发 60% 门槛 |
| | 牌局详情：抽水明细与可证明公平 | ✅ 一键验证发牌 |
| 效率·状态·后台 | Web 多桌管理 | — |
| | 行动倒计时与时间银行 | — |
| | 运营后台风控处置中枢 | — |
| 竞品对标 | 四大竞品交互对标矩阵 | — |

## 技术说明

- 纯静态单文件，无构建、无依赖、无后端
- 字体走 Google Fonts CDN（Space Grotesk / IBM Plex Mono），离线时回退系统字体
- 互动逻辑为原生 JS，含轻量 DOM diff，拖动滑杆不会中断
- 顶部可缩放（适应 / ±），画面尺寸标注于标题旁
- 切换画面时 URL 带 hash，可直接分享到指定画面，例如 `index.html#EVCashout`

## 部署

任何静态托管皆可，例如 GitHub Pages：

```bash
git init && git add . && git commit -m "德州扑克双端原型"
git branch -M main
git remote add origin <你的仓库地址>
git push -u origin main
```

推送后在仓库 Settings → Pages 选择 `main` 分支根目录即可。

## 源文件

画板源码位于 `../原型图源文件/`：

- `*.dc.html` — 设计画布源文件（可重新生成 Artifact 版本）
- `standalone/*.html` — 各画面独立静态 HTML（供 html.to.design 导入 Figma）
