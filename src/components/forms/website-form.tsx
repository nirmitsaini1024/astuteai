"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TargetAudienceSection } from "./website-form/target-audience";
import { FeaturesSection } from "./website-form/features";
import { ThemeSection } from "./website-form/theme";
import { WebsiteFormData, websiteFormSchema } from "./website-form/types";

export function WebsiteForm({ onSubmit }: { onSubmit: (data: WebsiteFormData) => void }) {
  const form = useForm<WebsiteFormData>({
    resolver: zodResolver(websiteFormSchema),
    defaultValues: {
      targetAudience: { age: "", location: "", interests: "" },
      currentWebsite: "",
      features: [],
      theme: { colorScheme: "", mood: "" },
      fontPreference: "",
      logo: "existing",
    },
  });

  const handleSubmit = (data: WebsiteFormData) => {
    console.log("Form data:", data);
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <TargetAudienceSection form={form} />

        <FormField
          control={form.control}
          name="currentWebsite"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Website URL (if applicable)</FormLabel>
              <FormControl>
                <Input placeholder="https://" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FeaturesSection form={form} />
        <ThemeSection form={form} />

        <FormField
          control={form.control}
          name="fontPreference"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Font Style Preference</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select font style" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="modern">Modern Sans-Serif</SelectItem>
                  <SelectItem value="classic">Classic Serif</SelectItem>
                  <SelectItem value="playful">Playful & Fun</SelectItem>
                  <SelectItem value="minimal">Minimal & Clean</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="logo"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Logo Status</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3">
                    <div
                      className={`w-4 h-4 border-2 rounded-md cursor-pointer flex items-center justify-center transition-colors ${
                        field.value === "existing"
                          ? "bg-violet-500 border-violet-500 text-white"
                          : "bg-white border-gray-300"
                      }`}
                      onClick={() => field.onChange("existing")}
                    />
                    <FormLabel className="font-normal">I have an existing logo</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3">
                    <div
                      className={`w-4 h-4 border-2 rounded-md cursor-pointer flex items-center justify-center transition-colors ${
                        field.value === "new"
                          ? "bg-violet-500 border-violet-500 text-white"
                          : "bg-white border-gray-300"
                      }`}
                      onClick={() => field.onChange("new")}
                    />
                    <FormLabel className="font-normal">I need a new logo</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-white text-black hover:bg-gray-300">
          Next Step
        </Button>
      </form>
    </Form>
  );
}
