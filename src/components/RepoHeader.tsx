import { RepoMeta } from "@/types";
import { Badge } from "@/components/ui/badge";
import { GitBranch, Users, HardDrive, Calendar } from "lucide-react";
import { formatDate, formatNumber, formatBytes } from "@/lib/format";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { demoRepos } from "@/data/demoRepo";

interface RepoHeaderProps {
  repo: RepoMeta;
  onRepoChange: (repoName: string) => void;
}

export const RepoHeader = ({ repo, onRepoChange }: RepoHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
          <GitBranch className="h-8 w-8 text-primary" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">{repo.name}</h1>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="gap-1">
              {repo.visibility}
            </Badge>
            <Badge variant="outline" className="gap-1">
              <HardDrive className="h-3 w-3" />
              {formatBytes(repo.sizeMB)}
            </Badge>
            <Badge variant="outline" className="gap-1">
              <GitBranch className="h-3 w-3" />
              {formatNumber(repo.commits)} Commits
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Users className="h-3 w-3" />
              {repo.contributors} Contributors
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Calendar className="h-3 w-3" />
              {formatDate(repo.lastUpdateISO)}
            </Badge>
          </div>
        </div>
      </div>

      <Select value={repo.name} onValueChange={onRepoChange}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Repository wählen" />
        </SelectTrigger>
        <SelectContent>
          {demoRepos.map((r) => (
            <SelectItem key={r.name} value={r.name}>
              {r.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
