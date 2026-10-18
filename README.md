# demo-jirafix

演示仓：故意埋了一个「一行 bug」的小仓库，用于演示 `jira-fix-workflow` 技能的完整修复流程（止步 PR-open，不合并）。

- bug 位置：`src/pricing.js` 的 `discountPrice`
- 现象：`npm test` 3 个用例全部失败
- 修复：一行改动

本仓库内容为演示用途，已脱敏，不含任何真实数据。
