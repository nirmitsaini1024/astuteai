"use client";

import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { WebsiteFormData } from "./types";

const features = [
  { id: "store", label: "Online Store" },
  { id: "booking", label: "Appointment Booking" },
  { id: "contact", label: "Contact Form" },
  { id: "blog", label: "Blog or News" },
  { id: "testimonials", label: "Testimonials" },
  { id: "portfolio", label: "Portfolio Gallery" },
  { id: "reviews", label: "Customer Reviews" },
];

export function FeaturesSection({ form }: { form: UseFormReturn<WebsiteFormData> }) {
  return (
    <div className="space-y-4">
      <FormLabel>Website Features</FormLabel>
      {features.map((feature) => (
        <FormField
          key={feature.id}
          control={form.control}
          name="features"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <div
                  className={`w-4 h-4 border-2 rounded-md flex items-center justify-center cursor-pointer ${
                    field.value?.includes(feature.id)
                      ? "bg-violet-500 text-white border-violet-500"
                      : "bg-white border-gray-300"
                  }`}
                  onClick={() => {
                    const value = field.value || [];
                    if (field.value?.includes(feature.id)) {
                      field.onChange(value.filter((item) => item !== feature.id));
                    } else {
                      field.onChange([...value, feature.id]);
                    }
                  }}
                >
                  {field.value?.includes(feature.id) && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </FormControl>
              <FormLabel className="font-normal">{feature.label}</FormLabel>
            </FormItem>
          )}
        />
      ))}
    </div>
  );
}
