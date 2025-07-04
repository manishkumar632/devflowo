"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileSidebar from "./MobileSidebar";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <div className="w-full relative">
      <header
        className={cn(
          "container mx-auto px-4 py-4 transition-all duration-300 relative",
          scrolled && "py-3"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Login Button */}
            <Button className="border shadow-none">
              <Link href="/login">Login</Link>
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileOpen(true)}
                className="h-9 w-9"
                aria-label="Open menu"
              >
                <FiMenu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile sidebar - rendered with portal at document body level */}
      <AnimatePresence>
        {mobileOpen && (
          <MobileSidebar isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header; 