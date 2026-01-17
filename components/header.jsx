"use client";

import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  StarsIcon,
  ChevronDown,
  FileText,
  PenBox,
  GraduationCap,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { checksUser } from "@/lib/inngest/checkUser";

const Header = async () => {
  await checksUser();

  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Sensai Logo"
            width={200}
            height={60}
            className="h-12 py-1 w-auto object-contain"
            priority
          />
        </Link>

        {/* Right Actions */}
        <div className="flex items-center space-x-2 md:space-x-4">

          {/* Dashboard */}
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline">
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden sm:block">Industry Insights</span>
              </Button>
            </Link>

            {/* Growth Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden sm:block">Growth Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">

                <DropdownMenuItem asChild>
                  <Link href="/resume" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span>Build Resume</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/ai-cover-letter" className="flex items-center gap-2">
                    <PenBox className="h-4 w-4" />
                    <span>Cover Letter</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/interview" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>Interview Prep</span>
                  </Link>
                </DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          {/* Auth Buttons */}
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton 
            appearance={{
              elements:{
                avatarBox: "w-10 h-10",
                userButtonPopoverCard: "shadow-xl",
                userPreviewMainIdentifier: "font-semibold"
              },
            }}
            afterSignOutUrl="/"
            />
          </SignedIn>

        </div>
      </nav>
    </header>
  );
};

export default Header;
