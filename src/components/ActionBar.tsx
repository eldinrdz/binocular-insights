import { Button } from "@/components/ui/button";
import { FileJson, Database } from "lucide-react";
import { toast } from "sonner";

interface ActionBarProps {
  disabled?: boolean;
}

export const ActionBar = ({ disabled = false }: ActionBarProps) => {
  const handleExportJSON = () => {
    toast.success("JSON-Export erfolgreich heruntergeladen");
  };

  const handleWriteToDB = () => {
    if (disabled) return;
    toast.success("Daten erfolgreich in Datenbank geschrieben");
  };

  return (
    <div className="flex flex-wrap gap-3">
      <Button onClick={handleExportJSON} className="gap-2">
        <FileJson className="h-4 w-4" />
        JSON-Export herunterladen
      </Button>
      <Button
        onClick={handleWriteToDB}
        disabled={disabled}
        variant="secondary"
        className="gap-2"
      >
        <Database className="h-4 w-4" />
        In Datenbank schreiben
      </Button>
    </div>
  );
};
