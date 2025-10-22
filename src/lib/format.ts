export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);
  return date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const formatBytes = (mb: number): string => {
  return `${mb} MB`;
};

export const formatNumber = (num: number): string => {
  return num.toLocaleString("de-DE");
};

export const formatPercent = (pct: number): string => {
  return `${pct} %`;
};

export const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};
