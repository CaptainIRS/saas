import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Community from "@/components/sections/community";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Community />
      
    </main>
  );
}