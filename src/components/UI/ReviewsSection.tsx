"use client";

import React from "react";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

const ReviewsSection = () => {
  return (
    <div className="flex items-center gap-2 mt-6">
      {/* Profile Pictures */}
      <div className="flex -space-x-6">
        <Image
          src="/reviews/user-2.jpg"
          alt="User 1"
          width={44}
          height={44}
          priority
          className="rounded-full border-2 border-white"
        />
        <Image
          src="/reviews/user-4.jpg"
          alt="User 2"
          width={44}
          height={44}
          priority
          className="rounded-full border-2 border-white"
        />
        <Image
          src="/reviews/user-2.jpg"
          alt="User 3"
          width={44}
          height={44}
          priority
          className="rounded-full border-2 border-white"
        />
        <Image
          src="/reviews/user-3.jpg"
          alt="User 4"
          width={44}
          height={44}
          priority
          className="rounded-full border-2 border-white"
        />
      </div>

      {/* Reviews and Stars */}
      <div className="flex flex-col">
        <div className="flex gap-[2px] items-center text-[#FF9C1D]">
          <BsStarFill className="text-lg"/>
          <BsStarFill className="text-lg"/>
          <BsStarFill className="text-lg"/>
          <BsStarFill className="text-lg"/>
          <BsStarFill className="text-lg"/>
        </div>
        <span className="text-gray-600 text-base">Reviews & Endorsements</span>
      </div>
    </div>
  );
};

export default ReviewsSection;
