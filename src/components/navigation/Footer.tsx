"use client";

import Link from "next/link";
import Container from "../widgets/Container";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative mt-12">
      <div className="bg-gradient-to-r from-greenPri to-greenSec py-4 w-screen relative z-10">
        {/* Parent div for positioning */}
        <div className="relative flex justify-center">
          {/* Link with absolute positioning */}
          <Link href="/" className="absolute transform translate-y-[-40%]">
            <Image
              src="/logo.png"
              alt="logo"
              width="100"
              height="100"
            />
          </Link>
        </div>
        <Container>
          <div className="flex justify-between mt-8"> {/* Added margin-top to create space below the hanging image */}
            <div className="flex gap-2 items-center">
              <p className="font-jakarta text-base font-medium text-primary leading-4">
                Designed and Developed by: <br />
                <b className="font-bricolage text-lg text-white">Zaki ul Hassan </b>
              </p>
            </div>
            <ul className="flex space-x-6 text-base font-gloria font-medium text-white items-center tracking-wide">
              <li>
                <Link href="https://www.behance.net/zakiulhassan5" target="blank" className="hover:text-primary">
                  Behance
                </Link>
              </li>
              <li>
                <Link href="https://dribbble.com/zakihassan5" target="blank" className="hover:text-primary">
                  Dribble
                </Link>
              </li>
              <li>
                <Link href="https://github.com/Zakiulhassan" target="blank" className="hover:text-primary">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/zaki-ul-hassan/" target="blank" className="hover:text-primary">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
