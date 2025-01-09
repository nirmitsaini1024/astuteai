import ProductAddresses from "@/components/socialspark/ProductAddresses";
import Benefits from "@/components/socialspark/Benefits";
import Resources from "@/components/socialspark/Resources";
import Hero from "@/components/socialspark/Hero";

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
