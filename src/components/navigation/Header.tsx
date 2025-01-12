"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../widgets/Container";
import Image from "next/image";
import ShinyButtonSM from "../UI/shiny-buttonSM";
import { Menu, X } from "lucide-react";
import ButtonGhostSmall from "../UI/ButtonGhostSmall";
import { LuArrowUpRight } from "react-icons/lu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/case-studies", label: "Case Studies" },
    { href: "/about-me", label: "Who am I?" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className={`bg-white/95 backdrop-blur-sm py-4 border-b-greenPri border-b-[1px] transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}>
        <Container>
          <nav className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-lg font-bold">
              <Link href="/">
                <Image
                  src="/zaki-logo.svg"
                  alt="logo"
                  width="80"
                  height="80"
                  priority
                  className="transition-transform duration-300 hover:scale-105"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6 text-base text-primary items-center uppercase">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-base transition-all duration-100 hover:text-[#B2EB09] relative ${
                      isActive(link.href) 
                        ? "text-primary font-medium after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 after:bg-greenPri"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <ButtonGhostSmall
                text="Book a call"
                icon={<LuArrowUpRight />}
                onClick={() =>
                  window.open('https://calendly.com/zakiulhassan/30min', '_blank', 'noopener noreferrer')
                } 
                className="text-lg cursor-pointer"
              />
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "max-h-64 opacity-100 mt-4"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <ul className="flex flex-col space-y-4 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-base block w-full px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100 ${
                      isActive(link.href)
                        ? "text-greenPri font-medium bg-gray-50"
                        : "text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="px-4">
                <ShinyButtonSM className="w-full justify-center">
                  Book a Call
                </ShinyButtonSM>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;