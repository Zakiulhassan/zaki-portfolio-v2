import Marquee from "@/components/UI/marquee";
import Image from "next/image";
import { PiQuotesFill } from "react-icons/pi";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "Zaki transformed our website, boosting conversions with his user-centric design approach.",
    img: "/avatar.png",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "Working with Zaki was a breeze. The final product exceeded our expectations!",
    img: "/avatar.png",
  },
  {
    name: "John",
    username: "@john",
    body: "Great! Zaki transformed our website, boosting conversions with his user-centric design approach.",
    img: "/avatar.png",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I Love it! Working with Zaki was a breeze. The final product exceeded our expectations!",
    img: "/avatar.png",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Seamless and Efficient! Zaki transformed our website, boosting conversions with his user-centric design approach.",
    img: "/avatar.png",
  },
  {
    name: "James",
    username: "@james",
    body: "Professional and skillfull! Working with Zaki was a breeze. The final product exceeded our expectations!",
    img: "/avatar.png",
  },
];

const firstRow = reviews.slice(0, reviews.length);
const secondRow = reviews.slice(reviews.length);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <>
      <div className="flex flex-col gap-12 bg-white border-2 rounded-2xl p-4 max-w-[320px] justify-between">
        <PiQuotesFill className="w-12 h-12 text-primary text-xl flex-shrink-0 rotate-180"/>

        <blockquote className="mt-2 text-xl font-jakarta font-mediun leading-tight text-primary">{body}</blockquote>

        <div className="flex items-center gap-2">
            <Image
                src={img}
                alt={""}
                width={48}
                height={48}
                className="object-contain rounded-full border-2"
            />
            <div>
                <figcaption className="text-base font-bricolage font-bold leading-tight">{name} <span className="text-xs font-medium text-secondary">{username}</span></figcaption>
                <p className="text-xs font-jakarta font-mediun leading-tight text-secondary">Head of Digital at BrightFuture</p>
            </div>
        </div>
      </div>
    </>
  );
};

export function Testimonials() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-2">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#FFFEF5] dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#FFFEF5] dark:from-background"></div>
    </div>
  );
}
