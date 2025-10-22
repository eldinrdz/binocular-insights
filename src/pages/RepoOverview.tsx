import { RepoHeader } from "@/components/RepoHeader";
import { ProgressStrip } from "@/components/ProgressStrip";
import { StatCard } from "@/components/StatCard";
import { ActionBar } from "@/components/ActionBar";
import { useAppStore } from "@/store/useAppStore";
import { Timer, MemoryStick, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { formatPercent, formatBytes } from "@/lib/format";

export default function RepoOverview() {
  const { selectedRepo, liveStats, selectRepo } = useAppStore();

  const isComplete = liveStats.analyzed >= liveStats.total;

  return (
    <div className="container mx-auto max-w-7xl px-6 py-8 space-y-6">
      <Card className="p-6">
        <RepoHeader repo={selectedRepo} onRepoChange={selectRepo} />
      </Card>

      {!isComplete && (
        <Card className="p-6">
          <ProgressStrip
            analyzed={liveStats.analyzed}
            total={liveStats.total}
          />
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          icon={Timer}
          label="Laufzeit"
          value={liveStats.elapsed}
          subtext="seit Start"
          delay={0.1}
        />
        <StatCard
          icon={MemoryStick}
          label="Speicherverbrauch"
          value={formatBytes(liveStats.memMB)}
          subtext="aktuell"
          delay={0.2}
        />
        <StatCard
          icon={Cpu}
          label="CPU-Last"
          value={formatPercent(liveStats.cpuPct)}
          subtext="aktuell"
          delay={0.3}
        />
      </div>

      <div className="flex justify-start">
        <ActionBar disabled={!isComplete} />
      </div>
    </div>
  );
}
