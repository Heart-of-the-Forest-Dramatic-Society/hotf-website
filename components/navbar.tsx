"use client";

import Image from "next/image";
import { ModeToggle } from "./theme-toggle";
import { SignOut } from "./sign-out";
import { Button } from "./ui/button";
import Link from "next/link";
import { navLinks } from "@/lib/navLinks";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";

interface NavbarProps {
  session: Session | null;
}

const NavbarClient = ({ session }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mobileMenuOpen]);

  // Focus trap when mobile menu is open
  useEffect(() => {
    if (!mobileMenuOpen || !mobileMenuRef.current) return;

    const menuElement = mobileMenuRef.current;
    const focusableElements = menuElement.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus the first element when menu opens
    firstElement?.focus();

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      if (event.shiftKey) {
        // Shift + Tab: cycle backwards
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab: cycle forwards
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    menuElement.addEventListener("keydown", handleTab);
    return () => {
      menuElement.removeEventListener("keydown", handleTab);
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center transition-transform hover:scale-105"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Image
            src="/logo.jpg"
            alt="Heart of the Forest logo"
            width={100}
            height={100}
            className="rounded-full w-12 h-12 sm:w-14 sm:h-14 object-cover shadow-md"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-1">
          {navLinks.map((link) => (
            <Button
              asChild
              key={link.href}
              variant="ghost"
              className="text-sm font-medium hover:bg-accent transition-colors"
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </div>

        {/* Desktop Auth & Theme Toggle */}
        <div className="hidden md:flex items-center gap-2 sm:gap-3">
          {!session ? (
            <Button
              asChild
              variant="default"
              className="shadow-sm text-sm sm:text-base"
            >
              <Link href="/sign-in">Sign In</Link>
            </Button>
          ) : (
            <SignOut />
          )}
          <div className="h-8 w-px bg-white/30" />
          <ModeToggle />
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            className="h-9 w-9"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden fixed inset-0 top-[57px] bg-background/98 backdrop-blur-lg z-40 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col p-6 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Button
                  asChild
                  key={link.href}
                  variant="ghost"
                  className="justify-start text-base font-medium h-12"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
            </div>

            {/* Mobile Auth Button */}
            <div className="pt-4 border-t">
              {!session ? (
                <Button
                  asChild
                  variant="default"
                  className="w-full h-12 text-base"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href="/sign-in">Sign In</Link>
                </Button>
              ) : (
                <SignOut />
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarClient;
