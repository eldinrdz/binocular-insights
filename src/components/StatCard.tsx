import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  subtext: string;
  delay?: number;
}

export const StatCard = ({
  icon: Icon,
  label,
  value,
  subtext,
  delay = 0,
}: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
    >
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="text-3xl font-bold tabular-nums">{value}</p>
            <p className="text-xs text-muted-foreground">{subtext}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
