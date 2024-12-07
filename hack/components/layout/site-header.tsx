"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { Wallet } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="fixed w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Wallet className="h-6 w-6" />
          <span className="font-bold text-xl">coin.new</span>
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link href="/learn" className="text-sm font-medium hover:text-primary">
            Learn
          </Link>
          <Link href="/community" className="text-sm font-medium hover:text-primary">
            Community
          </Link>
          <Link href="/share" className="text-sm font-medium hover:text-primary">
            Share
          </Link>
          <ThemeToggle />
          <Button>Connect Wallet</Button>
        </div>
      </nav>
    </header>
  );
}