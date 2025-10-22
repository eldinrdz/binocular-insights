import { LanguageDataset } from "@/types";

export const exportJSON = (data: LanguageDataset) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${data.language.toLowerCase()}-analysis.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const exportCSV = (data: LanguageDataset) => {
  let csv = "Type,Size/Time,Value\n";
  
  data.runtime.forEach((r) => {
    csv += `Runtime,${r.size},${r.ms}\n`;
  });
  
  data.memory.forEach((m) => {
    csv += `Memory,${m.t},${m.mb}\n`;
  });
  
  data.cpu.forEach((c) => {
    csv += `CPU,${c.t},${c.pct}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${data.language.toLowerCase()}-analysis.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
