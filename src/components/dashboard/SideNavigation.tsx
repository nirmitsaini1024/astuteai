"use client";

import { Button } from "@/components/ui/button";
import { Eye, BarChart2, Brain, Target, FileText, Link, Wand2 } from "lucide-react";

const navItems = [
  { icon: <Eye className="w-4 h-4 mr-2" />, label: "Site Overview" },
  { icon: <BarChart2 className="w-4 h-4 mr-2" />, label: "Analytics" },
  { icon: <Brain className="w-4 h-4 mr-2" />, label: "Smart Keyword Generator" },
  { icon: <Target className="w-4 h-4 mr-2" />, label: "Goals" },
  { icon: <FileText className="w-4 h-4 mr-2" />, label: "Content Evaluation" },
  { icon: <Link className="w-4 h-4 mr-2" />, label: "Backlink Audit" },
  { icon: <Wand2 className="w-4 h-4 mr-2" />, label: "Link Optimization Wizard" },
];

interface SideNavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function SideNavigation({ activeSection, onNavigate }: SideNavigationProps) {
  return (
    <div className="space-y-8 w-64 ml-4 pl-2">
      {navItems.map((item) => (
        <Button
          key={item.label}
          variant={"ghost"}
          className="w-full justify-start hover:bg-zinc-700 hover:text-white"
          onClick={() => onNavigate(item.label)}
        >
          {item.icon}
          {item.label}
        </Button>
      ))}
    </div>
  );
}
