import Image from "next/image";
import MarqueeLogo from "@/components/UI/marqueeLogo";

// Sample logos (you can replace these with your actual logo paths)
const logos = [
  { src: "/brands/1.png", alt: "Logo 1" },
  { src: "/brands/2.png", alt: "Logo 2" },
  { src: "/brands/3.png", alt: "Logo 3" },
  { src: "/brands/4.png", alt: "Logo 4" },
  { src: "/brands/5.png", alt: "Logo 5" },
];

// Split logos into two rows for dual marquee effect
const firstRow = logos.slice(0, logos.length);

// LogoCard Component
const LogoCard = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="mx-4 flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={100}
        height={100}
        priority
        className="object-contain"
      />
    </div>
  );
};

// Logo Marquee Component
export function LogoMarquee() {
  return (
    <div className="relative flex max-w-[540px] w-full flex-col items-center justify-center overflow-hidden bg-transparent">
      {/* First Marquee Row */}
      <MarqueeLogo pauseOnHover className="[--duration:20s]">
        {firstRow.map((logo, index) => (
          <LogoCard key={index} {...logo} />
        ))}
      </MarqueeLogo>

      {/* Gradient overlay for smooth edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#FFFEF5] dark:from-gray-800"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#FFFEF5] dark:from-gray-800"></div>
    </div>
  );
}

export default LogoMarquee;
