import Marquee from "@/components/UI/marquee";
import Image from "next/image";
import { PiQuotesFill } from "react-icons/pi";

// TODO(zaki): replace with real client quotes, names, roles, and photos.
const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "Zaki transformed our website, boosting conversions with his user-centric design approach.",
    img: "/reviews/user-4.jpg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "Working with Zaki was a breeze. The final product exceeded our expectations!",
    img: "/reviews/user-4.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length);

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
      <div className="flex flex-col gap-8 bg-coal-soft border border-line700 rounded p-4 max-w-[320px] justify-between transition-colors duration-base ease-brand hover:border-line600">
        <PiQuotesFill className="w-12 h-12 text-ink-dim text-xl flex-shrink-0 rotate-180" />

        <blockquote className="text-lg font-jakarta font-mediun leading-snug text-white pb-12">
          {body}
        </blockquote>

        <div className="flex items-center gap-2">
          <Image
            src={img}
            alt={""}
            width={48}
            height={48}
            priority
            className="object-contain rounded-full border-2"
          />
          <div>
            <figcaption className="text-base font-bricolage font-semibold leading-tight text-secondary">
              {name}{" "}
              <span className="text-xs font-medium text-secondary">
                {username}
              </span>
            </figcaption>
            <p className="text-xs font-jakarta font-mediun leading-tight text-secondary">
              Head of Digital at BrightFuture
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export function Testimonials() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-2 py-12">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent"></div>
    </div>
  );
}
