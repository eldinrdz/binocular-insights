import { Hourglass } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface ProgressStripProps {
  analyzed: number;
  total: number;
}

export const ProgressStrip = ({ analyzed, total }: ProgressStripProps) => {
  const progress = (analyzed / total) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-3"
    >
      <div className="flex items-center gap-3">
        <Hourglass className="h-5 w-5 text-primary animate-pulse" />
        <p className="text-sm text-muted-foreground">
          Analyzing commit {analyzed.toLocaleString("de-DE")} of{" "}
          {total.toLocaleString("de-DE")}…
        </p>
      </div>
      <Progress value={progress} className="h-2" />
    </motion.div>
  );
};
