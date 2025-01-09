import ProductAddresses from "@/components/shopfrontai/ProductAddresses";
import Benefits from "@/components/shopfrontai/Benefits";
import Resources from "@/components/shopfrontai/Resources";
import Hero from "@/components/shopfrontai/Hero";

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
