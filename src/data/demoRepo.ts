import { RepoMeta, LiveStats } from "@/types";

export const demoRepos: RepoMeta[] = [
  {
    name: "inso-world/binocular",
    visibility: "public",
    sizeMB: 128,
    commits: 3210,
    contributors: 12,
    lastUpdateISO: "2025-05-10",
  },
  {
    name: "microsoft/vscode",
    visibility: "public",
    sizeMB: 512,
    commits: 87543,
    contributors: 1847,
    lastUpdateISO: "2025-10-20",
  },
  {
    name: "facebook/react",
    visibility: "public",
    sizeMB: 256,
    commits: 15672,
    contributors: 1582,
    lastUpdateISO: "2025-10-21",
  },
];

export const initialLiveStats: LiveStats = {
  elapsed: "00:13:24",
  memMB: 528,
  cpuPct: 43,
  analyzed: 1523,
  total: 3210,
};
