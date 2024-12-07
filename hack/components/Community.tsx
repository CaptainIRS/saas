import { Users, MessageSquare, Share2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { FeatureCard } from "@/components/ui/feature-card";

const communityFeatures = [
  {
    icon: Users,
    title: "10,000+ Members",
    description: "Join a growing community of token creators and blockchain enthusiasts"
  },
  {
    icon: MessageSquare,
    title: "Active Support",
    description: "Get help from our community and technical support team"
  },
  {
    icon: Share2,
    title: "Resource Sharing",
    description: "Access shared resources, tutorials, and best practices"
  }
];

export default function Community() {
  return (
    <Section>
      <h2 className="text-3xl font-bold text-center mb-12">Join Our Community</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {communityFeatures.map((feature) => (
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