import { useState } from "react";
import { PageTabs } from "@/components/PageTabs";
import { ChartCard } from "@/components/ChartCard";
import { MetaInfoCard } from "@/components/MetaInfoCard";
import { Button } from "@/components/ui/button";
import { FileJson, FileSpreadsheet } from "lucide-react";
import { languageDatasets } from "@/data/demoLanguages";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { exportJSON, exportCSV } from "@/lib/export";
import { toast } from "sonner";

const languages = [
  "Java",
  "C#",
  "C++",
  "Go",
  "Python",
  "TypeScript",
  "Zig",
];

export default function CompareView() {
  const [activeTab, setActiveTab] = useState("Java");

  const currentData = languageDatasets.find((d) => d.language === activeTab);

  const handleExportJSON = () => {
    if (currentData) {
      exportJSON(currentData);
      toast.success(`${activeTab} Daten als JSON exportiert`);
    }
  };

  const handleExportCSV = () => {
    if (currentData) {
      exportCSV(currentData);
      toast.success(`${activeTab} Daten als CSV exportiert`);
    }
  };

  if (!currentData) return null;

  return (
    <div className="container mx-auto max-w-7xl px-6 py-8 space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Programmiersprachen-Vergleich</h1>
        <div className="flex gap-2">
          <Button onClick={handleExportJSON} variant="outline" className="gap-2">
            <FileJson className="h-4 w-4" />
            Export JSON
          </Button>
          <Button onClick={handleExportCSV} variant="outline" className="gap-2">
            <FileSpreadsheet className="h-4 w-4" />
            Export CSV
          </Button>
        </div>
      </div>

      <PageTabs value={activeTab} onValueChange={setActiveTab} tabs={languages} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartCard
          title="Laufzeit pro Repository-Größe"
          subtitle="Verarbeitung nach Repo-Kategorie"
          delay={0.1}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={currentData.runtime}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis
                dataKey="size"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                label={{ value: "ms", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem",
                }}
              />
              <Bar dataKey="ms" fill="hsl(var(--chart-1))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Speicherverbrauchsverlauf"
          subtitle="MB im Zeitverlauf"
          delay={0.2}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={currentData.memory}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis
                dataKey="t"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                label={{ value: "MB", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem",
                }}
              />
              <Line
                type="monotone"
                dataKey="mb"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--chart-2))", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="CPU-Auslastung"
          subtitle="Prozent im Zeitverlauf"
          delay={0.3}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={currentData.cpu}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis
                dataKey="t"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                label={{ value: "%", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem",
                }}
              />
              <Line
                type="monotone"
                dataKey="pct"
                stroke="hsl(var(--chart-3))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--chart-3))", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MetaInfoCard title="Achsen & Definitionen">
          <ul className="space-y-2">
            <li>
              <strong>X-Achse:</strong> Repository-Größe (klein, mittel, groß) oder
              Zeitpunkt
            </li>
            <li>
              <strong>Y-Achse:</strong> Metrik (ms, MB, %)
            </li>
            <li>
              <strong>Laufzeit:</strong> Gesamtdauer des Data-Mining-Prozesses
            </li>
            <li>
              <strong>Speicherverbrauch:</strong> Maximum/Verlauf während der
              Ausführung
            </li>
            <li>
              <strong>CPU-Auslastung:</strong> Durchschnitt während Ausführung
            </li>
          </ul>
        </MetaInfoCard>

        <MetaInfoCard title="Repository-Größen">
          <ul className="space-y-2">
            <li>
              <strong>Klein:</strong> Wenige Commits und Dateien, schnelle
              Verarbeitung
            </li>
            <li>
              <strong>Mittel:</strong> Mittlere Anzahl an Commits, moderate Laufzeit
            </li>
            <li>
              <strong>Groß:</strong> Viele Commits und Dateien, lange Laufzeit
            </li>
          </ul>
        </MetaInfoCard>
      </div>
    </div>
  );
}
