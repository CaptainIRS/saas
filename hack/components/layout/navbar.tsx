"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";
import Image from "next/image";
import logo from "../android-chrome-512x512.png";

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-8">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center space-x-4">
          <Image
            src={logo}
            alt="Coin New Logo"
            width={50}
            height={50}
            className="h-[50px] w-[50px] ml-4"
            priority
          />
          <span className="font-bold text-2xl">coin.new</span>
        </Link>

        {/* Navbar Links and Actions */}
        <div className="flex items-center space-x-6">
         
          <Link href="/community" className="text-sm font-medium hover:text-primary">
            Community
          </Link>
          <Link href="/share" className="text-sm font-medium hover:text-primary">
            Share
          </Link>
          <ThemeToggle />
          <Button>Connect Wallet</Button>
        </div>
      </div>
    </nav>
  );
}
