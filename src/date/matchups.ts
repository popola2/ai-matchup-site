// src/data/matchups.ts

export interface MatchupCard {
  id: string;
  title: string;
  description: string;
  url: string;
  side: "china" | "usa";
}

export const matchupCards: MatchupCard[] = [
  {
    id: "openai-vs-deepseek",
    title: "OpenAI vs DeepSeek",
    description: "中美两大顶级大模型团队的技术和生态全面对比。",
    url: "/openai-vs-deepseek",
    side: "usa",
  },
  {
    id: "anthropic-vs-zhipu",
    title: "Anthropic vs 智谱AI",
    description: "对齐路线、模型能力、生态支持的深度对抗。",
    url: "/anthropic-vs-zhipu",
    side: "usa",
  },
  {
    id: "google-vs-baidu",
    title: "Google vs 百度",
    description: "搜索引擎与AI生态的技术演进对抗。",
    url: "/google-vs-baidu",
    side: "usa",
  },
  {
    id: "meta-vs-minimax",
    title: "Meta vs MiniMax",
    description: "社交背景的AI公司谁能后来居上？",
    url: "/meta-vs-minimax",
    side: "usa",
  },
];