import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PageTabsProps {
  value: string;
  onValueChange: (value: string) => void;
  tabs: string[];
}

export const PageTabs = ({ value, onValueChange, tabs }: PageTabsProps) => {
  return (
    <Tabs value={value} onValueChange={onValueChange} className="w-full">
      <TabsList className="w-full justify-start overflow-x-auto">
        {tabs.map((tab) => (
          <TabsTrigger key={tab} value={tab} className="px-6">
            {tab}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
