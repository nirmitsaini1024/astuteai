import ProductAddresses from "@/components/sections/ProductAddresses";
import Benefits from "@/components/sections/Benefits";
import Resources from "@/components/sections/Resources";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white -mt-[7rem]">
      <Hero />
      <ProductAddresses />
      <Benefits />
      <Resources />
    </main>
  );
}
