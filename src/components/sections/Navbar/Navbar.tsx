"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/constants";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import Image from "next/image";
import { Menu, X, FileText } from "lucide-react";

export function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (id: string, title: string) => {
    setActive(title);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
         "bg-black-100/80 backdrop-blur-xl border-b border-white/10"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-16">
        <div className="flex h-16 items-center justify-between sm:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActive("");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3"
          >
            <Image
              src="/avatar.svg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="hidden text-lg font-bold text-white sm:block">
              Vinay Sarda
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => handleNavClick(link.id, link.title)}
                className={cn(
                  "text-sm font-medium transition-colors",
                  active === link.title
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                )}
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Desktop Resume Button */}
          <div className="hidden md:block">
            <a href="/resume.pdf" download="Vinay_Resume">
              <ShimmerButton
                className="px-4 py-2 text-sm"
                background="rgba(145, 94, 255, 0.8)"
                shimmerColor="rgba(255, 255, 255, 0.5)"
              >
                <span className="flex items-center gap-2">
                  <FileText className="size-4" />
                  Resume
                </span>
              </ShimmerButton>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex size-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-100 h-dvh bg-black-100 backdrop-blur-xl transition-transform duration-300 md:hidden sm:top-20",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col gap-2 p-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleNavClick(link.id, link.title)}
              className={cn(
                "rounded-lg px-4 py-3 text-lg font-medium transition-colors",
                active === link.title
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              )}
            >
              {link.title}
            </a>
          ))}

          <div className="mt-4 border-t border-white/10 pt-4">
            <a href="/resume.pdf" download className="block">
              <ShimmerButton
                className="w-full py-3"
                background="rgba(145, 94, 255, 0.8)"
                shimmerColor="rgba(255, 255, 255, 0.5)"
              >
                <span className="flex items-center justify-center gap-2">
                  <FileText className="size-5" />
                  Download Resume
                </span>
              </ShimmerButton>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
