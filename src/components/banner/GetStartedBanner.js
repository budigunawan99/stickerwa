import React from "react";
import { WobbleCard } from "../ui/WobbleCard";
import Image from "next/image";
import Link from "next/link";

const GetStartedBanner = () => {
  return (
    <div className="grid grid-cols-1 max-w-7xl mx-auto w-full">
      <WobbleCard containerClassName="col-span-1 bg-neutral min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Signup to start creating your first custom sticker now!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            With monthly updated sticker template, StickerWA is the best choice for your business sticker.
          </p>
          <Link className="mt-4 btn btn-neutral btn-md relative z-10" href="/login">
            Get Started
          </Link>
        </div>
        <Image
          src="/stickerwa.svg"
          width={400}
          height={400}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[14%] -bottom-10 object-contain rounded-2xl opacity-30"
        />
      </WobbleCard>
    </div>
  );
};

export default GetStartedBanner;
