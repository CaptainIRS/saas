"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export default function Hero() {
  return (
    <Section className="pt-24 pb-12">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Create Your Own Token in Minutes
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Launch your cryptocurrency token on Ethereum or BSC with just a few clicks. No coding required.
          </p>
        </div>
        <div className="space-x-4">
          <Button size="lg">Start Building</Button>
          <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </div>
    </Section>
  );
}