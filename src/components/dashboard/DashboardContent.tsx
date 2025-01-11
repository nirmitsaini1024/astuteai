"use client";

import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const visibilityData = [
  { date: "Jun 12", value: 3 },
  { date: "Jun 14", value: 8 },
  { date: "Jun 16", value: 7 },
  { date: "Jun 18", value: 9.8 },
  { date: "Jun 20", value: 7 },
  { date: "Jun 22", value: 10.15 },
];

const keywordData = [
  { date: "Jun 12", value: 75 },
  { date: "Jun 14", value: 150 },
  { date: "Jun 16", value: 100 },
  { date: "Jun 18", value: 240 },
  { date: "Jun 20", value: 210 },
  { date: "Jun 22", value: 300 },
];

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive?: boolean;
}
function MetricCard({
  title,
  value,
  change,
  isPositive = true,
}: MetricCardProps) {
  return (
    <Card className="p-4 bg-black text-white">
      <p className="text-sm text-gray-400 mb-2">{title}</p>
      <h4 className="text-2xl font-bold text-white">{value}</h4>
      <span
        className={
          isPositive ? "text-green-400 text-sm" : "text-red-400 text-sm"
        }
      >
        {change}
      </span>
    </Card>
  );
}

interface DashboardContentProps {
  section: string;
}

export function DashboardContent({ section }: DashboardContentProps) {
  const renderContent = () => {
    switch (section) {
      case "Site Overview":
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <MetricCard
                title="Visibility Score"
                value="10.15%"
                change="+5.6%"
              />
              <MetricCard
                title="Keywords Tracked"
                value="1,234"
                change="+12.3%"
              />
              <MetricCard title="Backlinks" value="892" change="+3.2%" />
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={visibilityData}>
                  <XAxis
                    dataKey="date"
                    stroke="#888888"
                    tickLine={true}
                    axisLine={true}
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis
                    stroke="#888888"
                    tickLine={true}
                    axisLine={true}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </>
        );
      case "Analytics":
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <MetricCard title="Page Views" value="45,291" change="+8.1%" />
              <MetricCard title="Bounce Rate" value="42.3%" change="-2.4%" />
              <MetricCard title="Avg. Session" value="2m 45s" change="+15.2%" />
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={keywordData}>
                  <XAxis
                    dataKey="date"
                    stroke="#888888"
                    tickLine={true}
                    axisLine={true}
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis stroke="#888888" tickLine={true} axisLine={true} />
                  {/* <Tooltip /> */}
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#10b981"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </>
        );
      case "Smart Keyword Generator":
        return (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold mb-4">
              Smart Keyword Generator
            </h3>
            <p className="text-muted-foreground">
              AI-powered keyword research and suggestions coming soon.
            </p>
          </div>
        );
      default:
        return (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold mb-4">{section}</h3>
            <p className="text-muted-foreground">
              This section is under development.
            </p>
          </div>
        );
    }
  };

  return <div className="flex-1 p-6">{renderContent()}</div>;
}
