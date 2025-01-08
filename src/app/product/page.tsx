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
      <ProductAddresses />
      <Benefits />
      <Resources />
    </main>
  );
}
