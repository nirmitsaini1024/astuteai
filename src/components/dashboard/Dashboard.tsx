"use client";

import { useState } from "react";
import { SideNavigation } from "./SideNavigation";
import { DashboardContent } from "./DashboardContent";

export function Dashboard() {
  const [activeSection, setActiveSection] = useState("Site Overview");

  return (
    <div className="flex flex-row gap-6 mt-4 pt-2 bg-black text-white w-full h-full overflow-auto mb-4">
      {/* SideNavigation always on the left */}
      <div className="w-64 flex-shrink-0">
        <SideNavigation activeSection={activeSection} onNavigate={setActiveSection} />
      </div>
      {/* DashboardContent always on the right */}
      <div className="flex-1">
        <DashboardContent section={activeSection} />
      </div>
    </div>
  );
}
