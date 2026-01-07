// import React from 'react';
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";
import { StarsIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { FileText } from "lucide-react";
import { PenBox } from "lucide-react";
import { GraduationCap } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md
    z-50 supports-[backdrop-filter]:bg-background/60">

      <nav className=" container mx-auto px-4 h-16 flex items-center justify-between">

        <Link href="/">
          <Image
            src='/logo.png'
            alt="Sensai Logo"
            width={200}
            height={60}
            className="h-12 py-1 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href={"/dashboard"}>
              <Button variant="outline">
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden sm:block">
                  Industry Insights
                </span>
              </Button>
            </Link>
          </SignedIn>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button>
                <StarsIcon className="h-4 w-4" />
                <span className="hidden sm:block">Growth Tools</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={"/resume"} className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Build Resume</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/ai-cover-letter"} className="flex items-center gap-2">
                  <PenBox className="h-4 w-4" />
                  <span>Cover Letter</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/interview"} className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>Interview Prep</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <SignedOut>
            <SignInButton />
              <Button variant="outline"> Sign In</Button>
            <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}

export default Header;