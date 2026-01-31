import fs from 'fs/promises';
import path from 'path';
import https from 'https';

// 配置
const GITHUB_TOKEN = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
const OUTPUT_FILE = path.join(process.cwd(), 'data', 'skills_raw.json');
const HEADERS = {
  'User-Agent': 'Antigravity-Skills-Ingestor',
  'Accept': 'application/vnd.github.v3+json',
  ...(GITHUB_TOKEN ? { 'Authorization': `token ${GITHUB_TOKEN}` } : {})
};

// 搜索关键词
const KEYWORDS = [
  "topic:mcp-server",
  "topic:claude-tool",
  "topic:cursor-rules",
  "google antigravity",
  "openclaw skill"
];

// 工具函数：HTTPS 请求
function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: HEADERS }, (res) => {
      let data = '';
      if (res.statusCode < 200 || res.statusCode > 299) {
        return reject(new Error(`Status Code: ${res.statusCode}`));
      }
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

// 核心逻辑
async function main() {
  if (!GITHUB_TOKEN) {
    console.warn("⚠️  Warning: No GitHub Token found. Rate limits will be strict.");
  }

  const allSkills = new Map();

  // 1. 确保 data 目录存在
  const dataDir = path.dirname(OUTPUT_FILE);
  try {
    await fs.mkdir(dataDir, { recursive: true });
  } catch (e) {}

  // 2. 遍历搜索
  for (const keyword of KEYWORDS) {
    console.log(`🔍 Searching for: ${keyword}...`);
    try {
      // 搜索 Star > 10 的项目
      const query = encodeURIComponent(`${keyword} stars:>10`);
      const url = `https://api.github.com/search/repositories?q=${query}&sort=updated&order=desc&per_page=5`;
      
      const result = await fetchJson(url);
      const items = result.items || [];

      for (const repo of items) {
        if (!allSkills.has(repo.id)) {
          allSkills.set(repo.id, {
            id: repo.id,
            name: repo.name,
            full_name: repo.full_name,
            html_url: repo.html_url,
            description: repo.description,
            stars: repo.stargazers_count,
            topics: repo.topics,
            updated_at: repo.updated_at,
            language: repo.language,
            // 预留给 AI 填写的字段
            humanized: {
              one_liner: "",
              for_who: "",
              how_to: ""
            }
          });
          console.log(`  ✅ Found: ${repo.full_name} (⭐ ${repo.stargazers_count})`);
        }
      }
    } catch (err) {
      console.error(`❌ Error searching "${keyword}":`, err.message);
    }
  }

  // 3. 写入文件
  const resultList = Array.from(allSkills.values());
  await fs.writeFile(OUTPUT_FILE, JSON.stringify(resultList, null, 2));
  
  console.log(`\n🎉 Done! Found ${resultList.length} unique skills.`);
  console.log(`💾 Saved to ${OUTPUT_FILE}`);
}

main().catch(console.error);
