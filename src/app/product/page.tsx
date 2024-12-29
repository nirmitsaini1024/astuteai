import Hero from "@/components/sections/Hero";
import ProductAddresses from "@/components/sections/ProductAddresses";
import Benefits from "@/components/sections/Benefits";
import Resources from "@/components/sections/Resources";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
      <main className="min-h-screen bg-black text-white -mt-[7rem]">    <TracingBeam className="px-6">

        <Hero />
        {/* <Features /> */}
        <ProductAddresses />
        <Benefits />
        <Resources /> </TracingBeam>
      </main>   

  );
}
