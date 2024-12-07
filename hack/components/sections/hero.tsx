"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export default function Hero() {
  return (
    <Section className="pt-24 pb-12 bg-gradient-to-b from-background to-secondary/20">
      <div className="flex flex-col items-center space-y-8 text-center">
        <div className="space-y-4 max-w-[800px]">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Create Your Own Token in Minutes
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Launch your cryptocurrency token on Ethereum or BSC with just a few clicks. No coding required.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            Start Building
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8">
            Learn More
          </Button>
        </div>
      </div>
    </Section>
  );
}