import ProductAddresses from "@/components/bloggerai/ProductAddresses";
import Benefits from "@/components/bloggerai/Benefits";
import Resources from "@/components/bloggerai/Resources";
import Hero from "@/components/bloggerai/Hero";

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
