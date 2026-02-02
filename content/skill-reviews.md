# OpenClaw Skills 体验评测

## 📅 今日Review

[Daily Review 2026-02-02](/daily-reviews/2026-02-02)


> 真实使用体验 • 持续更新 • **Review是核心内容**

## 📖 Review指南

- [Review框架规范](/review-framework) - 统一格式和标准
- [Review待办清单](/review-todo) - 追踪进度和计划

## 测试环境
- **OpenClaw版本**: 2026.1.29
- **Skills位置**: `~/.agent/skills/`
- **已安装**: 90+ 核心Skills + 1200+ 完整库

---

## 📊 已测试 Skills

### ✅ tldr - 简化版Man Pages

**简介**: 社区驱动的简化版命令行文档

**安装状态**: ✅ 已安装 `tldr@4.1.0`

```bash
npm install -g tldr
tldr --update  # 更新缓存
```

**评价**: ⭐⭐⭐
- 优点: 比man page简洁太多，节省大量时间
- 适用场景: 快速学习新命令
- 缺点: 
  - 需要定期更新缓存 (`tldr --update`)
  - 部分命令没有tldr page
  - 本地环境可能出现pages下载失败

**问题记录**:
- ⚠️ 缓存更新后仍显示 "Page not found"
- 💡 解决方案: 可能需要使用 `tldr -u` 或检查网络

**使用示例**:
```bash
tldr git-commit  # 简化的git commit帮助
tldr tar         # tar命令的简单说明
tldr -u          # 更新缓存
```

**实测截图**: (待补充)

---

### ✅ xkcd - 漫画获取

**简介**: 获取xkcd漫画，支持最新、随机、搜索

**安装状态**: ✅ 需要`uv` (已安装)

**评价**: ⭐⭐⭐⭐⭐
- 优点: 无需API key，开箱即用，官方API稳定，有趣
- 适用场景: 每日漫画、编程笑话、放松时刻
- 缺点: 需要uv环境

**实测结果**:
```
$ uv run scripts/xkcd.py --random
**xkcd #3170: Service Outage**
[图片链接]
🔗 https://xkcd.com/3170/
```

**经典漫画推荐**:
- #353 "Python" - import antigravity
- #303 "Compiling" - 编译时 swords 对决
- #386 "Duty Calls" - 网上有人错了

**使用示例**:
```bash
uv run scripts/xkcd.py              # 最新漫画
uv run scripts/xkcd.py --random     # 随机漫画
uv run scripts/xkcd.py 353          # 指定漫画
uv run scripts/xkcd.py --search python  # 搜索
```

---

### ✅ brave-search - 网页搜索

**简介**: 使用Brave Search API进行无头网页搜索

**前置条件**:
- 需要 `BRAVE_API_KEY`
- 免费额度: 足够个人使用

**设置方法**:
```bash
export BRAVE_API_KEY="your_api_key_here"
```

**评价**: ⭐⭐⭐⭐
- 优点: 轻量级、无需浏览器、结果清晰
- 适用场景: 文档搜索、事实查询
- 缺点: 需要API key

**使用示例**:
```bash
./search.js "Next.js 14 tutorial" -n 5
./search.js "OpenClaw documentation" --content
```

---

### ✅ github - GitHub CLI封装

**简介**: 通过gh CLI与GitHub交互

**前置条件**:
- 需要安装 `gh` CLI ✅ (已安装: v2.40.1)
- 需要认证: `gh auth login`

**评价**: ⭐⭐⭐⭐⭐
- 优点: 与GitHub深度集成，支持PR、issues等，响应快速
- 适用场景: 代码管理、PR审查、问题追踪
- 缺点: 需要gh CLI和认证

**实测结果**:
```bash
$ gh repo view bodhi584/skills-directory
# ✅ 成功显示仓库信息
# ✅ 显示描述、stars、forks等

$ gh repo view bodhi584/skills-directory --json name,description,stargazerCount
# ✅ JSON格式输出，便于程序处理
```

**使用示例**:
```bash
gh repo view bodhi584/skills-directory --web  # 在浏览器打开
gh pr list --repo bodhi584/skills-directory  # 列出PRs
gh issue list --repo bodhi584/skills-directory  # 列出issues
```

---

### ✅ cat-fact - 随机猫事实

**简介**: 从catfact.ninja获取随机猫事实（免费、无需API key）

**安装状态**: ✅ 只需 `curl`

**评价**: ⭐⭐⭐⭐
- 优点: 完全免费、无需配置、响应快速
- 适用场景: 趣味互动、放松时刻、社交媒体内容

**实测结果**:
```bash
$ curl -s "https://catfact.ninja/fact"
{"fact":"A 2007 Gallup poll revealed that both men and women were equally likely to own a cat.","length":96}
```

**使用示例**:
```bash
# 随机猫事实
curl -s "https://catfact.ninja/fact" | jq '.fact'

# 简短事实
curl -s "https://catfact.ninja/fact?max_length=100" | jq '.fact'

# 猫品种
curl -s "https://catfact.ninja/breeds?limit=5"
```

---

### ✅ news-aggregator - 新闻聚合器

**简介**: 聚合8大新闻源：Hacker News、GitHub Trending、Product Hunt、36Kr、腾讯新闻、WallStreetCN、V2EX、微博

**安装状态**: ✅ 依赖已安装 (`beautifulsoup4`, `requests`)

**评价**: ⭐⭐⭐⭐⭐
- 优点: 多源聚合、实时更新、支持深度抓取
- 适用场景: 每日新闻扫描、科技简报、财经更新
- 缺点: 需要Python依赖

**实测结果**:
```json
[
  {
    "source": "Hacker News",
    "title": "Show HN: NanoClaw – Clawdbot in 500 lines of TS",
    "url": "https://github.com/gavrielc/nanoclaw",
    "heat": "367 points",
    "time": "11 hours ago"
  }
]
```

**使用示例**:
```bash
# Hacker News科技新闻
python3 scripts/fetch_news.py --source hackernews --limit 10

# 深度抓取（含正文）
python3 scripts/fetch_news.py --source all --limit 5 --deep

# 关键词搜索
python3 scripts/fetch_news.py --source hackernews --keyword "AI,LLM" --limit 10
```

**发现**: 测试时发现有趣衍生项目 [NanoClaw](https://github.com/gavrielc/nanoclaw) - 500行TS实现的Clawdbot！

---

### ✅ jq - JSON命令行处理器

**简介**: 命令行JSON处理工具，提取、过滤、转换JSON

**安装状态**: ✅ 系统已安装 (`/usr/bin/jq`)

**评价**: ⭐⭐⭐⭐⭐
- 优点: 轻量级、速度快、语法简洁、功能强大
- 适用场景: API响应处理、数据提取、JSON转换
- 缺点: 学习曲线稍陡

**实测结果**:
```bash
$ echo '{"name": "Bodhi", "skills": ["github", "xkcd"], "rating": 5}' | jq '.name'
# ✅ 输出: "Bodhi"

$ echo '{"name": "Bodhi"}' | jq '. + {"new": "value"}'
# ✅ 输出: {"name": "Bodhi", "new": "value"}
```

**使用示例**:
```bash
# 提取嵌套字段
cat api.json | jq '.data.items[0].name'

# 过滤数据
cat data.json | jq '.[] | select(.age > 25)'

# 转换格式
cat data.json | jq '{name: .user, score: .points}'
```

---

### ✅ conventional-commits - 规范化提交

**简介**: 规范化Git提交信息格式，符合Conventional Commits标准

**安装状态**: ✅ 无需安装（纯文档Skill）

**评价**: ⭐⭐⭐⭐
- 优点: 自动生成CHANGELOG、语义化版本控制、团队协作规范
- 适用场景: 项目规范化、CI/CD集成、版本发布
- 缺点: 需要团队遵守规范

**支持的提交类型**:
- `feat:` - 新功能 (MINOR版本)
- `fix:` - Bug修复 (PATCH版本)
- `docs:` - 文档更新
- `style:` - 代码格式
- `refactor:` - 重构
- `perf:` - 性能优化
- `test:` - 测试
- `build:` - 构建系统
- `ci:` - CI/CD配置
- `chore:` - 其他维护

**使用示例**:
```bash
feat(auth): add login functionality
fix(database): resolve connection timeout
docs(readme): update installation guide
```

---

### ⏳ vercel - Vercel CLI

**简介**: 部署和管理Vercel项目

**安装状态**: 🔄 安装中 (npm install -g vercel)
**预计测试时间**: 安装完成后

---

### ⏳ pollinations - AI图像生成

**简介**: Pollinations.ai API支持文本、图像、视频、音频生成（25+模型）

**安装状态**: ⚠️ 需要API key（之前免费，现在需要认证）
**前置条件**: `export POLLINATIONS_API_KEY="sk_xxx"`

---

### ⏳ sag - ElevenLabs语音合成

**简介**: ElevenLabs TTS，支持多种语音和声音效果

**安装状态**: ⚠️ 需要安装和API key
**安装命令**: `brew install steipete/tap/sag` 或 `npm install -g sag`

---

## 🔄 待测试 Skills

### 🚧 apple-contacts - Apple通讯录
- **状态**: 需要macOS环境
- **预计测试时间**: 在Mac上测试

### 🚧 apple-music - Apple Music
- **状态**: 需要macOS + Apple Music订阅
- **预计测试时间**: 在Mac上测试

### 🚧 claude-team - Claude团队协作
- **状态**: 需要Claude Team订阅
- **预计测试时间**: 待定

### 🚧 gamma - AI演示文稿
- **状态**: 需要GAMMA_API_KEY
- **预计测试时间**: 申请API key后

### 🚧 tmdb - 电影数据库
- **状态**: 需要TMDB_API_KEY
- **预计测试时间**: 申请API key后

### 🚧 youtube-summarizer - YouTube摘要
- **状态**: 需要MCP YouTube Transcript服务器
- **预计测试时间**: 配置MCP服务器后

### 🚧 read-github - GitHub文档阅读
- **状态**: 需要gitmcp.io MCP服务
- **预计测试时间**: 配置MCP后

### 🚧 perplexity - AI搜索
- **状态**: 需要Perplexity API key
- **预计测试时间**: 申请API key后

---

## 💡 最佳实践

### 推荐的入门Skills (无需API key)

1. **jq** - JSON处理，命令行必备
2. **github** - GitHub仓库管理
3. **news-aggregator** - 新闻聚合
4. **xkcd** - 轻松一刻
5. **conventional-commits** - 提交规范

### 进阶Skills推荐 (需要配置)

1. **vercel** - 网站部署
2. **sag** - 语音合成
3. **gamma** - 演示文稿生成
4. **pollinations** - AI图像生成
5. **triple-memory** - 记忆系统

---

## 📊 统计数据

| 指标 | 数值 |
|------|------|
| 已测试Skills | 8 |
| 待测试Skills | 82+ |
| 平均评分 | ⭐⭐⭐⭐ |

---

*最后更新: 2026-02-02 19:45*
*由 Bodhi 生成*
