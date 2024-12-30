import Hero from "@/components/sections/Hero";
import ProductAddresses from "@/components/sections/ProductAddresses";
import Benefits from "@/components/sections/Benefits";
import Resources from "@/components/sections/Resources";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white -mt-[7rem]">
      <Hero />
      {/* <Features /> */}
      <ProductAddresses />
      <Benefits />
      <Resources />
    </main>
  );
}
