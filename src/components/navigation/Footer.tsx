"use client";

import Link from "next/link";
import Container from "../widgets/Container";
import ButtonPrimary from "../UI/ButtonPrimary";
import Image from "next/image";

const Footer = () => {
    return (
      <footer className="relative mt-12">
        <div className="bg-gradient-primary py-16 relative z-10">
          <Container>
            <div className="flex justify-between">
            <div className="flex gap-16">
              <div>
              <h1 className="font-chesnaSem text-2xl text-backgroundPri">Company</h1>
                <ul className="flex flex-col gap-1 font-chesnaLight text-lg mt-2 text-backgroundPri">
                  <li><Link href={"/about"}>About</Link></li>
                  <li><Link href={"/about"}>FAQs</Link></li>
                  <li><Link href={"/about"}>Pricing</Link></li>
                  <li><Link href={"/about"}>Contact</Link></li>
                </ul>
              </div>
              <div>
              <h1 className="font-chesnaSem text-2xl text-backgroundPri">Dashboard</h1>
                <ul className="flex flex-col gap-1 font-chesnaLight text-lg mt-2 text-backgroundPri">
                  <li><Link href={"/about"}>Account</Link></li>
                  <li><Link href={"/about"}>Login</Link></li>
                  <li><Link href={"/about"}>Signup</Link></li>
                </ul>
              </div>
            </div>
            <div className="bg-backgroundPri rounded-3xl p-6 flex flex-col gap-4">
              <h1 className="font-chesnaSem text-2xl text-darkpri">Join us for more insights</h1>
              <div className="flex gap-4">
                <input type="email" name="email" placeholder="Enter Email" className="w-72 font-chesnaLight outline outline-2 outline-darksec focus:outline-primary rounded-md px-4 py-1 h-10"/>
                <ButtonPrimary 
                  text="Signup Now"
                  className="h-10" 
                  onClick={() => console.log('Button clicked')}
                />
              </div>
              <p className="font-chesnaReg text-darksec max-w-[400px] text-sm">Subscribe to our newsletter for the latest features, exclusive offers, and tips on managing your financial data.</p>
            </div>
            </div>
          </Container>
        </div>
        <div className="bg-white py-4  relative z-10">
          <Container>
            <div className="flex justify-between">
            <div className="flex gap-2 items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width="64"
                height="64"
              />
            </Link>
          	<p className="font-chesnaLight text-sm text-darksec">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <ul className="flex space-x-6 text-base font-chesnaReg text-textSec items-center">
            <li><Link href="/privacy-policy" className="link-hover-gradient">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conitions" className="link-hover-gradient">Terms & Conditions</Link></li>
          </ul> 
            </div>            
          </Container>
        </div>

      </footer>
    );
  };
  
  export default Footer;
  