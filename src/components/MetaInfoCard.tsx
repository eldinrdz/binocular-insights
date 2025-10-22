import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface MetaInfoCardProps {
  title: string;
  children: ReactNode;
}

export const MetaInfoCard = ({ title, children }: MetaInfoCardProps) => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="space-y-2 text-sm text-muted-foreground">{children}</div>
    </Card>
  );
};
