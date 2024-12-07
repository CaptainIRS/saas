"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export default function Learn() {
  return (
    <Section className="pt-24 pb-12 mx-auto bg-gradient-to-b from-background to-secondary/20">
      <div className="flex flex-col items-center space-y-8 text-center">
        {/* Title and Description */}
        <div className="space-y-4 max-w-[800px]">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Learn Blockchain and Tokenomics
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Explore blockchain, smart contracts, and token creation with our beginner-friendly guides. No prior knowledge required!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            Start Learning
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8">
            Browse Courses
          </Button>
        </div>
      </div>
    </Section>
  );
}
