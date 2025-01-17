import ProductAddresses from "@/components/Insightq/ProductAddresses";
import Benefits from "@/components/Insightq/Benefits";
import Resources from "@/components/Insightq/Resources";
import Hero from "@/components/Insightq/Hero";

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
