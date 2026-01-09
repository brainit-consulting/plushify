"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles } from "lucide-react";
import { UserProfile } from "@/components/auth/user-profile";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSession } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ui/mode-toggle";

// Public navigation items (visible to everyone)
const publicNav = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faq", label: "FAQ" },
  { href: "/pricing", label: "Pricing" },
];

// Authenticated navigation items (visible when logged in)
const authNav = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/generate", label: "Generate" },
  { href: "/gallery", label: "Gallery" },
];

function NavLink({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        isActive ? "text-primary" : "text-muted-foreground"
      )}
    >
      {label}
    </Link>
  );
}

function MobileNavLink({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "block py-2 text-base font-medium transition-colors hover:text-primary",
        isActive ? "text-primary" : "text-muted-foreground"
      )}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const { data: session, isPending } = useSession();
  const isAuthenticated = !!session;

  // Determine which nav items to show based on auth state
  const navItems = isAuthenticated ? authNav : publicNav;

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:rounded-md"
      >
        Skip to main content
      </a>
      <header
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        role="banner"
      >
        <nav
          className="container mx-auto px-4 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            aria-label="Plushify - Go to homepage"
          >
            <div
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10"
              aria-hidden="true"
            >
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-[oklch(0.55_0.17_300)] bg-clip-text text-transparent">
              Plushify
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={pathname === item.href}
              />
            ))}
          </div>

          {/* Desktop Actions */}
          <div
            className="hidden md:flex items-center gap-4"
            role="group"
            aria-label="User actions"
          >
            {!isPending && !isAuthenticated && (
              <Link href="/generate">
                <Button size="sm" className="gap-2">
                  <Sparkles className="h-4 w-4" />
                  Try Free
                </Button>
              </Link>
            )}
            <UserProfile />
            <ModeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center gap-2">
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2 text-left">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-primary to-[oklch(0.55_0.17_300)] bg-clip-text text-transparent">
                      Plushify
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-4">
                  {/* Mobile Nav Links */}
                  <div className="flex flex-col">
                    {navItems.map((item) => (
                      <MobileNavLink
                        key={item.href}
                        href={item.href}
                        label={item.label}
                        isActive={pathname === item.href}
                      />
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-border" />

                  {/* Mobile Auth Actions */}
                  <div className="flex flex-col gap-3">
                    {!isPending && !isAuthenticated ? (
                      <>
                        <Link href="/generate">
                          <Button className="w-full gap-2">
                            <Sparkles className="h-4 w-4" />
                            Try Free
                          </Button>
                        </Link>
                        <Link href="/login">
                          <Button variant="outline" className="w-full">
                            Sign in
                          </Button>
                        </Link>
                        <Link href="/register">
                          <Button variant="ghost" className="w-full">
                            Create account
                          </Button>
                        </Link>
                      </>
                    ) : (
                      <div className="py-2">
                        <UserProfile />
                      </div>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </>
  );
}
