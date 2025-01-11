"use client";
import Link from "next/link";
import Container from "../widgets/Container";
import Image from "next/image";
import ShinyButtonSM from "../UI/shiny-buttonSM";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50">
      <div className="bg-white py-4 border-b-greenPri border-b-[1px]">
        <Container>
          <nav className="flex justify-between items-center">
            <div className="text-lg font-bold">
              <Link href="/">
                <Image
                  src="/zaki-logo.svg"
                  alt="logo"
                  width="80"
                  height="80"
                />
              </Link>
            </div>
            <ul className="flex space-x-4 text-base text-primary items-center uppercase">
              <li>
                <Link
                  href="/case-studies"
                  className="text-base hover:text-greenPri"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/about-me"
                  className="text-base hover:text-greenPri"
                >
                  Who am I?
                </Link>
              </li>
              <li>
                <ShinyButtonSM>Book a Call</ShinyButtonSM>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </header>
  );
};

export default Header;