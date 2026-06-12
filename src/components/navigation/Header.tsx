"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../widgets/Container";
import { Menu, X } from "lucide-react";
import { LuArrowUpRight } from "react-icons/lu";
import Magnetic from "../motion/Magnetic";
import HoverRoll from "../motion/HoverRoll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/case-studies", label: "Work" },
    { href: "/about-me", label: "About" },
    { href: "/#process", label: "Process" },
    { href: "/#contact", label: "Contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-base ease-brand ${
        isScrolled
          ? "bg-coal/[.86] backdrop-blur-md border-b border-line700"
          : ""
      }`}
    >
      <Container>
        <nav className="flex justify-between items-center py-5">
          {/* Logo */}
          <Magnetic strength={0.4}>
            <Link
              href="/"
              className="text-lg tracking-[0.2em] uppercase text-ink font-medium"
              data-cursor="hover"
            >
              Zaki<span className="text-acid">.</span>
            </Link>
          </Magnetic>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 text-sm tracking-widest uppercase text-ink items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Magnetic strength={0.3}>
                  <Link
                    href={link.href}
                    data-cursor="hover"
                    aria-label={link.label}
                    className={`transition-colors duration-300 hover:text-ink ${
                      isActive(link.href) ? "text-ink" : "text-ink-dim"
                    }`}
                  >
                    <HoverRoll>{link.label}</HoverRoll>
                  </Link>
                </Magnetic>
              </li>
            ))}
            <li>
              <Magnetic strength={0.3}>
                <button
                  data-cursor="hover"
                  onClick={() =>
                    window.open(
                      "https://calendly.com/zakiulhassan/30min",
                      "_blank",
                      "noopener noreferrer"
                    )
                  }
                  className="flex items-center gap-2 rounded-full border border-line700 px-5 py-2 text-ink transition-colors duration-300 hover:bg-ink hover:text-coal"
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-acid" aria-hidden />
                  Book a call <LuArrowUpRight />
                </button>
              </Magnetic>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-ink"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            data-cursor="hover"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col space-y-4 uppercase tracking-widest text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-2 transition-colors ${
                    isActive(link.href) ? "text-ink" : "text-ink-dim"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/book-a-call"
                className="inline-flex items-center gap-2 rounded-full border border-line700 px-5 py-2 text-ink"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-acid" aria-hidden />
                Book a call <LuArrowUpRight />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
