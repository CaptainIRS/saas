import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Users, MessageSquare, Trophy } from "lucide-react";

export default function Community() {
  return (
    <div className="container py-12 mx-auto text-center">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold tracking-tight">Join Our Community</h1>
        <p className="mt-4 max-w-[700px] text-lg text-muted-foreground">
          Connect with other token creators, share experiences, and get support.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
        <Card className="p-6 mx-auto text-center">
          <Users className="h-8 w-8 mx-auto text-primary" />
          <h3 className="mt-4 text-xl font-bold">Discussion Forums</h3>
          <p className="mt-2 text-muted-foreground">
            Engage in discussions about token creation and blockchain technology.
          </p>
        </Card>
        <Card className="p-6 mx-auto text-center">
          <MessageSquare className="h-8 w-8 mx-auto text-primary" />
          <h3 className="mt-4 text-xl font-bold">Support Channels</h3>
          <p className="mt-2 text-muted-foreground">
            Get help from our community experts and team members.
          </p>
        </Card>
        <Card className="p-6 mx-auto text-center">
          <Trophy className="h-8 w-8 mx-auto text-primary" />
          <h3 className="mt-4 text-xl font-bold">Success Stories</h3>
          <p className="mt-2 text-muted-foreground">
            Learn from successful token launches and community projects.
          </p>
        </Card>
      </div>
    </div>
  );
}
