"use client";

import { BusinessForm } from "@/components/forms/business-form";
import { WebsiteForm } from "@/components/forms/website-form";
import { MarketingForm } from "@/components/forms/marketing-form";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Building2, Globe, Megaphone } from "lucide-react";
import Featuresdashboard from "@/components/featuredashboard";

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const updateFormData = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const progress = ((step - 1) / 3) * 100;

  return (
    <main className="bg-black min-h-screen flex flex-col items-center justify-center -mt-[7rem] text-gray-300">
      <div className="container mx-auto px-4 py-8 max-w-3xl mt-[8rem]">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-white">
              Business Profile Setup
            </h1>
            <p className="text-gray-400">
              Tell us about your business to get started
            </p>
          </div>

          <div className="space-y-4">
            <Progress value={progress} className="h-2 bg-gray-500" />

            <div className="flex justify-between px-2">
              <div className="flex flex-col items-center">
                <div
                  className={`rounded-full p-2 ${
                    step >= 1 ? "bg-blue-600" : "bg-gray-700"
                  }`}
                >
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm mt-1 text-gray-300">Business</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className={`rounded-full p-2 ${
                    step >= 2 ? "bg-blue-600" : "bg-gray-700"
                  }`}
                >
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm mt-1 text-gray-300">Website</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className={`rounded-full p-2 ${
                    step >= 3 ? "bg-blue-600" : "bg-gray-700"
                  }`}
                >
                  <Megaphone className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm mt-1 text-gray-300">Marketing</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white border border-white rounded-lg p-6 shadow-lg">
            {step === 1 && <BusinessForm onSubmit={updateFormData} />}
            {step === 2 && <WebsiteForm onSubmit={updateFormData} />}
            {step === 3 && (
              <MarketingForm onSubmit={updateFormData} formData={formData} />
            )}
          </div>
        </div>
      </div>

      <div className="w-full mx-auto lg:max-w-screen-xl lg:mx-auto px-4 md:px-12">
        {" "}
        <Featuresdashboard />
      </div>
    </main>
  );
}
