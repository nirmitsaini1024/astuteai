"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Users, 
  Rocket, 
  Heart, 
  Coffee,
  Globe,
  Laptop,
  Building2,
  GraduationCap,
  Briefcase,
  ArrowRight
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background bg-black text-foreground">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-[7rem]">
        <div className="text-center space-y-4 mt-24">
          <div className="flex items-center text-white justify-center gap-2 text-primary mb-6">
            <Users className="h-6 w-6" />
            <span className="text-sm font-medium">Join Our Team</span>
          </div>
          <h1 className="text-4xl text-white sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Build the Future of{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Software
            </span>
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
            Join a team of passionate individuals working on the next generation of developer tools.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <Card className="p-6 bg-card hover:bg-accent/10 transition-colors bg-black text-white">
            <Rocket className="h-8 w-8 text-primary mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
            <p className="text-muted-foreground">
              We're constantly pushing boundaries and exploring new technologies.
            </p>
          </Card>
          <Card className="p-6 bg-card hover:bg-accent/10 transition-colors bg-black text-white">
            <Heart className="h-8 w-8 text-primary mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
            <p className="text-muted-foreground">
              Flexible hours and remote-first culture for optimal productivity.
            </p>
          </Card>
          <Card className="p-6 bg-card hover:bg-accent/10 transition-colors bg-black text-white">
            <Coffee className="h-8 w-8 text-primary mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-2">Great Benefits</h3>
            <p className="text-muted-foreground">
              Competitive salary, health insurance, and learning budget.
            </p>
          </Card>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white">Open Positions</h2>
        <div className="space-y-4">
          <PositionCard
            title="Senior Frontend Developer"
            department="Engineering"
            location="Remote"
            type="Full-time"
          />
          <PositionCard
            title="Product Designer"
            department="Design"
            location="Remote"
            type="Full-time"
          />
          <PositionCard
            title="DevOps Engineer"
            department="Infrastructure"
            location="Remote"
            type="Full-time"
          />
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Why Join Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Globe className="h-8 w-8 mx-auto mb-4 text-primary text-white" />
            <h3 className="font-semibold mb-2 text-white">Remote-First</h3>
            <p className="text-sm text-muted-foreground">Work from anywhere in the world</p>
          </div>
          <div className="text-center">
            <Laptop className="h-8 w-8 mx-auto mb-4 text-primary text-white" />
            <h3 className="font-semibold mb-2 text-white">Latest Tech</h3>
            <p className="text-sm text-muted-foreground">Access to cutting-edge tools</p>
          </div>
          <div className="text-center">
            <GraduationCap className="h-8 w-8 mx-auto mb-4 text-primary text-white" />
            <h3 className="font-semibold mb-2 text-white">Learning Budget</h3>
            <p className="text-sm text-muted-foreground">Annual budget for courses</p>
          </div>
          <div className="text-center">
            <Building2 className="h-8 w-8 mx-auto mb-4 text-primary text-white" />
            <h3 className="font-semibold mb-2 text-white">Company Retreats</h3>
            <p className="text-sm text-muted-foreground">Regular team meetups</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function PositionCard({ 
  title, 
  department, 
  location, 
  type 
}: { 
  title: string;
  department: string;
  location: string;
  type: string;
}) {
  return (
    <Card className="p-6 hover:bg-accent/10 transition-colors group bg-black text-white">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="h-4 w-4 text-primary text-white" />
            <h3 className="font-semibold">{title}</h3>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{department}</span>
            <Separator orientation="vertical" className="h-4" />
            <span>{location}</span>
            <Separator orientation="vertical" className="h-4" />
            <span>{type}</span>
          </div>
        </div>
        <Button variant="ghost" className="group-hover:translate-x-1 transition-transform">
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}