export type RepoMeta = {
  name: string;
  visibility: 'public' | 'private';
  sizeMB: number;
  commits: number;
  contributors: number;
  lastUpdateISO: string;
  logoUrl?: string;
};

export type LiveStats = {
  elapsed: string;
  memMB: number;
  cpuPct: number;
  analyzed: number;
  total: number;
};

export type SizeBucket = 'small' | 'medium' | 'large';

export type RuntimePoint = {
  size: SizeBucket;
  ms: number;
};

export type MemoryPoint = {
  t: number;
  mb: number;
};

export type CpuPoint = {
  t: number;
  pct: number;
};

export type LanguageDataset = {
  language: string;
  runtime: RuntimePoint[];
  memory: MemoryPoint[];
  cpu: CpuPoint[];
};
