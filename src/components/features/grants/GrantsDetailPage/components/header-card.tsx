import { Badge } from "@/components/ui/react/badge"
import { Card, CardContent } from "@/components/ui/react/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/react/tabs"
import { Award } from "lucide-react"
import { useEffect } from "react"
import type { TransformedGrantData } from '@/lib/transformers/grantTransformer'

interface HeaderCardProps {
  grant: TransformedGrantData;
  activeTab: string;
  onTabChange: (value: string) => void;
}

export default function HeaderCard({ grant, activeTab, onTabChange }: HeaderCardProps) {
  // Debug: Log when component renders and what the active tab is
  useEffect(() => {
    console.log("HeaderCard rendered with activeTab:", activeTab);
  }, [activeTab]);

  // Debug: Function to handle tab clicks with logging
  const handleTabClick = (value: string) => {
    console.log("Tab clicked:", value);
    console.log("Before change, activeTab was:", activeTab);
    onTabChange(value);
    // We can't log after the change here because state updates are asynchronous
  };

  return (
    <Card className="overflow-hidden border-none shadow-lg">
      <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 text-white relative">
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <Badge className="bg-white/20 text-white hover:bg-white/30 mb-4">2024-yil dasturi</Badge>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
            <Award className="h-10 w-10 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{grant.title}</h1>
            <p className="text-white/80 mt-2 text-lg">{grant.description}</p>
            <div className="flex items-center gap-2 mt-4">
              {grant.badges.map((badge, index) => (
                <Badge
                  key={index}
                  variant={badge.variant || "outline"}
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  {badge.text}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CardContent className="p-0">
        <Tabs 
          value={activeTab} 
          onValueChange={handleTabClick}
          className="w-full"
        >
          <TabsList className="grid grid-cols-4 bg-slate-100 rounded-none h-auto p-0">
            <TabsTrigger 
              value="overview" 
              className="py-3 rounded-none data-[state=active]:bg-white"
              onClick={() => console.log("Overview tab element clicked")}
            >
              {grant.tabs.overview.title}
            </TabsTrigger>
            <TabsTrigger 
              value="benefits" 
              className="py-3 rounded-none data-[state=active]:bg-white"
              onClick={() => console.log("Benefits tab element clicked")}
            >
              {grant.tabs.benefits.title}
            </TabsTrigger>
            <TabsTrigger 
              value="requirements" 
              className="py-3 rounded-none data-[state=active]:bg-white"
              onClick={() => console.log("Requirements tab element clicked")}
            >
              {grant.tabs.requirements.title}
            </TabsTrigger>
            <TabsTrigger 
              value="process" 
              className="py-3 rounded-none data-[state=active]:bg-white"
              onClick={() => console.log("Process tab element clicked")}
            >
              {grant.tabs.process.title}
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </CardContent>
    </Card>
  )
}

