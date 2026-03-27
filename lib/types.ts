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
  verified?: boolean;
  reviewStatus?: 'pending' | 'reviewed' | 'rejected';
  memberOnly?: boolean;
  securityScore?: number;
  securitySummary?: string;
  securityReport?: string;
  reviewedAt?: string;
  reviewedBy?: string;
  compatibility?: string[];
  usageStats?: string[];
  publicPreview?: {
    description?: string;
    whatIs?: string;
    features?: string[];
  };
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

// Trending data types
export interface TrendingRepo {
  source: string;
  category: string;
  id: string;
  name: string;
  full_name: string;
  description: string;
  url: string;
  stars: number;
  topics: string[];
  language: string;
  created_at: string;
  updated_at: string;
  owner: string;
  owner_avatar: string;
}

export interface TrendingDataset {
  generated_at: string;
  summary: {
    total: number;
    trending: number;
    latest: number;
    essential: number;
    clawhub: number;
  };
  categories: {
    trending: TrendingRepo[];
    latest: TrendingRepo[];
    essential: TrendingRepo[];
  };
}
