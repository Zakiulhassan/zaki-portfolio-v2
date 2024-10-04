"use client"
import Link from 'next/link';
import Container from '../widgets/Container';
import Image from 'next/image';
// import ButtonPrimary from '../UI/ButtonPrimary';
import ShinyButton from '../UI/shiny-button';

const Header = () => {


  return (
    <>

        <header className="relative">

      <div className='bg-transparent relative z-10 flex py-4 '>

            <Container>
                <nav className="flex justify-between items-center">
                    <div className="text-lg font-bold">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="logo"
                                width="88"
                                height="88"
                            />
                        </Link>
                    </div>
                    <ul className="flex space-x-6 text-base text-darkpri items-center">
                        <li><Link href="/case-studies" className="font-gloria text-base hover:text-greenPri">Case Studies</Link></li>
                        <li><Link href="/about-me" className="font-gloria text-base hover:text-greenPri">Who am I?</Link></li>
                        <li>
                        <ShinyButton>Book a Call</ShinyButton>
                            {/* <ButtonPrimary 
                                text="Book a Call" 
                                onClick={() => console.log('Button clicked')}
                            /> */}
                        </li>
                    </ul>
                </nav>
            </Container>
      </div>
        </header>
    </>
  );
};

export default Header;
