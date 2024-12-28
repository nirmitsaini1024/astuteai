"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { SideNavigation } from "./SideNavigation";
import { DashboardContent } from "./DashboardContent";
interface DashboardContentProps {
  section: string;
  className?: string; // Add this line
}
export function Dashboard() {
  const [activeSection, setActiveSection] = useState("Site Overview");

  return (
    // <Card className="w-full h-full p-6">
      <div className="flex flex-col md:flex-row gap-6 mt-4 bg-black text-white w-full h-full">
        <SideNavigation activeSection={activeSection} onNavigate={setActiveSection} />
        <DashboardContent section={activeSection}  />
      </div>
    // </Card>
  );
}
