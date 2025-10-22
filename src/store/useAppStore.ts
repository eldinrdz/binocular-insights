import { create } from "zustand";
import { RepoMeta, LiveStats } from "@/types";
import { demoRepos, initialLiveStats } from "@/data/demoRepo";

interface AppState {
  selectedRepo: RepoMeta;
  liveStats: LiveStats;
  isAnalyzing: boolean;
  selectRepo: (repoName: string) => void;
  updateLiveStats: (stats: Partial<LiveStats>) => void;
  startAnalysis: () => void;
  stopAnalysis: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedRepo: demoRepos[0],
  liveStats: initialLiveStats,
  isAnalyzing: false,

  selectRepo: (repoName: string) => {
    const repo = demoRepos.find((r) => r.name === repoName);
    if (repo) {
      set({ selectedRepo: repo, isAnalyzing: false });
    }
  },

  updateLiveStats: (stats: Partial<LiveStats>) =>
    set((state) => ({
      liveStats: { ...state.liveStats, ...stats },
    })),

  startAnalysis: () => set({ isAnalyzing: true }),
  stopAnalysis: () => set({ isAnalyzing: false }),
}));
