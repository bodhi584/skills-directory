// Skill 数据类型定义
export interface Skill {
  id: number;
  slug: string;
  name: string;
  description: string;
  author_name: string | null;
  author_github: string | null;
  github_url: string | null;
  install_command: string | null;
  dependencies: Record<string, string> | null;
  category: string;
  tags: string[];
  platforms: string[];
  stars: number;
  created_at: string;
  updated_at: string;
  // MCP.so-style extended fields
  whatIs?: string;
  howToUse?: string;
  features?: string[];
  useCases?: string[];
  relatedSkills?: string[];
  source?: string;
}

export interface Category {
  id: number;
  slug: string;
  name: string;
  description: string;
  icon: string;
  count?: number;
}

// API 响应类型
export interface SkillsResponse {
  skills: Skill[];
  total: number;
  page: number;
  pageSize: number;
}

export interface SearchParams {
  query?: string;
  category?: string;
  platform?: string;
  tag?: string;
  page?: number;
  pageSize?: number;
}
