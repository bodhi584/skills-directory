-- Skills 导航站数据库 Schema
-- 使用 PostgreSQL / Vercel Postgres

-- 分类表
CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(100) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  icon VARCHAR(50),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Skills 表
CREATE TABLE IF NOT EXISTS skills (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  author_name VARCHAR(255),
  author_github VARCHAR(255),
  github_url TEXT,
  install_command TEXT,
  dependencies JSONB,
  category VARCHAR(100) REFERENCES categories(slug),
  tags TEXT[],
  platforms TEXT[],
  stars INT DEFAULT 0,
  views INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 索引优化
CREATE INDEX idx_skills_category ON skills(category);
CREATE INDEX idx_skills_platforms ON skills USING GIN(platforms);
CREATE INDEX idx_skills_tags ON skills USING GIN(tags);
CREATE INDEX idx_skills_stars ON skills(stars DESC);
CREATE INDEX idx_skills_created ON skills(created_at DESC);

-- 初始分类数据
INSERT INTO categories (slug, name, description, icon) VALUES
  ('coding', 'Coding', 'Skills for programming and development', '💻'),
  ('writing', 'Writing', 'Skills for content creation and writing', '✍️'),
  ('data', 'Data', 'Skills for data analysis and processing', '📊'),
  ('media', 'Media', 'Skills for image, video and audio processing', '🎬'),
  ('productivity', 'Productivity', 'Skills for workflow automation', '⚡'),
  ('research', 'Research', 'Skills for information gathering', '🔍'),
  ('communication', 'Communication', 'Skills for email and messaging', '💬'),
  ('devops', 'DevOps', 'Skills for deployment and CI/CD', '🚀'),
  ('other', 'Other', 'Miscellaneous skills', '📦')
ON CONFLICT (slug) DO NOTHING;
