import fs from 'fs/promises';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'skills_raw.json');

async function updateSkill() {
  const rawData = await fs.readFile(DATA_FILE, 'utf-8');
  const skills = JSON.parse(rawData);

  const targetId = "NoeFabris/opencode-antigravity-auth"; // 实际 ID 是数字，但之前脚本是用 ID 存的，稍等，让我确认一下原脚本的 ID 格式
  // 修正：原脚本是用 repo.id (数字) 作为 Map Key，但在 JSON 数组里它只是一个对象。
  // 我们需要遍历找到 full_name 匹配的。

  const skillIndex = skills.findIndex(s => s.full_name === "NoeFabris/opencode-antigravity-auth");

  if (skillIndex === -1) {
    console.error("❌ Skill not found in raw data.");
    return;
  }

  // 更新 Humanized 字段
  skills[skillIndex].humanized = {
    one_liner: "借用 Google 开发者通道，免费调用顶配模型 (Gemini 3/Claude Opus)。",
    for_who: "追求极致性价比、且不怕封号风险的极客玩家。",
    how_to: "⚠️ 高风险预警：仅限使用小号！\n1. 准备一个非主用 Google 账号。\n2. 安装插件：`npm install opencode-antigravity-auth`。\n3. 运行 `opencode auth login google` 进行授权。\n4. 在配置中切换模型即可白嫖算力。"
  };
  
  // 顺便打个标
  skills[skillIndex].tags = ["High Risk", "Free API", "OAuth"];

  await fs.writeFile(DATA_FILE, JSON.stringify(skills, null, 2));
  console.log("✅ Skill updated successfully.");
}

updateSkill().catch(console.error);
