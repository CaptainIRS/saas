import { Rocket, Shield, BarChart } from "lucide-react";
import { Section } from "@/components/ui/section";
import { FeatureCard } from "@/components/ui/feature-card";

const features = [
  {
    icon: Rocket,
    title: "One-Click Launch",
    description: "Deploy your token to multiple DEXs instantly with our automated launch system"
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Built-in security features and automated smart contract auditing"
  },
  {
    icon: BarChart,
    title: "Real-time Analytics",
    description: "Track your token's performance with comprehensive analytics dashboard"
  }
];

export default function Features() {
  return (
    <Section className="bg-secondary/50">
      <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </Section>
  );
}