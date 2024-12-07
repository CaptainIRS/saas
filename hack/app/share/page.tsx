import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Share2, Twitter, Github } from "lucide-react";

export default function Share() {
  return (
    <div className="container py-12 mx-auto text-center">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold tracking-tight">Share Your Success</h1>
        <p className="mt-4 max-w-[700px] text-lg text-muted-foreground">
          Showcase your token project and inspire others in the community.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 justify-center">
        <Card className="p-6 mx-auto text-left">
          <div className="flex items-center space-x-4">
            <Share2 className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-xl font-bold">Share Your Project</h3>
              <p className="mt-2 text-muted-foreground">
                Submit your token project to be featured in our showcase.
              </p>
            </div>
          </div>
          <div className="mt-6 flex space-x-4">
            <Button>
              <Twitter className="mr-2 h-4 w-4" />
              Twitter
            </Button>
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
          </div>
        </Card>

        <Card className="p-6 mx-auto text-left">
          <h3 className="text-xl font-bold">Featured Projects</h3>
          <p className="mt-2 text-muted-foreground">
            Check out some of the amazing projects created by our community.
          </p>
          <div className="mt-4 space-y-4">
            {featuredProjects.map((project) => (
              <div key={project.name} className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{project.name}</h4>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

const featuredProjects = [
  {
    name: "EcoToken",
    description: "Sustainability-focused token with carbon offset tracking",
  },
  {
    name: "GameFi Token",
    description: "Gaming ecosystem token with NFT integration",
  },
  {
    name: "DeFi Plus",
    description: "Advanced DeFi token with yield farming capabilities",
  },
];
