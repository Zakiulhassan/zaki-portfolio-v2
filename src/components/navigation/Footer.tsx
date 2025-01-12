"use client";

import Link from "next/link";
import Container from "../widgets/Container";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="bg-[#121212] border-t-[1px] border-t-greenPri py-4 w-screen relative z-10">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 px-4 sm:px-8 lg:px-12">
            {/* Developer Info */}
            <div className="text-center lg:text-left">
              <p className="text-sm sm:text-base text-muted-dark leading-4">
                Designed and Developed by: <br />
                <b className="text-lg text-white">Zaki ul Hassan</b>
              </p>
            </div>

            {/* Social Links */}
            <ul className="flex flex-wrap justify-center lg:justify-end items-center gap-4 text-sm sm:text-base text-white tracking-wide">
              <li>
                <Link
                  href="https://www.behance.net/zakiulhassan5"
                  target="blank"
                  className="hover:text-greenPri"
                >
                  Behance
                </Link>
              </li>
              <li>
                <Link
                  href="https://dribbble.com/zakihassan5"
                  target="blank"
                  className="hover:text-greenPri"
                >
                  Dribble
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Zakiulhassan"
                  target="blank"
                  className="hover:text-greenPri"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/zaki-ul-hassan/"
                  target="blank"
                  className="hover:text-greenPri"
                >
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
