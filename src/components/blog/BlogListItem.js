"use client";

import Image from "next/image";
import { Suspense } from "react";
import { UserImageLoading } from "../ui/UserImageLoading";
import { cn } from "@/utils/cn";
import TextLimiter from "@/utils/text-limiter";
import DateFormatter from "@/utils/date-formatter";

export function BlogListItem({ article }) {
  const previewImage = article.featured_image || "/img_default.svg";
  return (
    <div className="max-w-xs w-full group/card z-0">
      <div
        style={{ "--image-url": `url(${previewImage})` }}
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 pl-0 bg-cover bg-center",
          "bg-[image:var(--image-url)]"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 bg-gradient-to-t from-black via-black/50 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10 bg-black/60 p-2 rounded-r-full w-[80%]">
          <Suspense fallback={<UserImageLoading />}>
            <Image
              height="100"
              width="100"
              alt="Avatar"
              src="/user_default.svg"
              className="h-10 w-10 rounded-full border-2 object-cover"
            />
          </Suspense>

          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {TextLimiter(article.author.name, 15)}
            </p>
            <p className="text-sm text-gray-400">{DateFormatter(article.date)}</p>
          </div>
        </div>
        <div className="text content pl-4">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {article.title}
          </h1>
          <div
            className="font-normal text-sm text-gray-50 relative z-10 my-4"
            dangerouslySetInnerHTML={{
              __html: TextLimiter(article.excerpt, 100),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
