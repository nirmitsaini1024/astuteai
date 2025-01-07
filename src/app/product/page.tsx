import { HeroContent } from "@/components/sections/Hero";
import ProductAddresses from "@/components/sections/ProductAddresses";
import Benefits from "@/components/sections/Benefits";
import Resources from "@/components/sections/Resources";
import { HeroBackground } from "@/components/sections/hero-background";
import Hello  from "@/components/sections/Hello";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white -mt-[7rem]">
      <Hello />
      {/* <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroBackground />
        <div className="relative container max-w-6xl mx-auto px-4 py-12 mt-20 md:mt-16">
          <HeroContent />
        </div>
      </div> */}
      <ProductAddresses />
      <Benefits />
      <Resources />
    </main>
  );
}
