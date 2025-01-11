"use client";

import Link from "next/link";
import Container from "../widgets/Container";


const Footer = () => {
  return (
    <footer className="relative">
      <div className="bg-[#121212] border-t-[1px] border-t-greenPri py-4 w-screen relative z-10">
        {/* Parent div for positioning */}
        <div className="relative flex justify-center">
          {/* Link with absolute positioning */}
          {/* <Link href="/" className="absolute transform translate-y-[-40%]">
            <Image
              src="/logo.png"
              alt="logo"
              width="100"
              height="100"
            />
          </Link> */}
        </div>
        <Container>
          <div className="flex justify-between"> {/* Added margin-top to create space below the hanging image */}
            <div className="flex gap-2 items-center">
              <p className="text-sm text-muted-dark leading-4">
                Designed and Developed by: <br />
                <b className="text-lg text-white">Zaki ul Hassan </b>
              </p>
            </div>
            <ul className="flex space-x-6 text-base text-white items-center tracking-wide">
              <li>
                <Link href="https://www.behance.net/zakiulhassan5" target="blank" className="hover:text-greenPri">
                  Behance
                </Link>
              </li>
              <li>
                <Link href="https://dribbble.com/zakihassan5" target="blank" className="hover:text-greenPri">
                  Dribble
                </Link>
              </li>
              <li>
                <Link href="https://github.com/Zakiulhassan" target="blank" className="hover:text-greenPri">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/zaki-ul-hassan/" target="blank" className="hover:text-greenPri">
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
