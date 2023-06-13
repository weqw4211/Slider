"use client";
import { FC, useRef } from "react";
import { ChevronIcon } from "../../icons/ChevronIcon";
import { cn } from "@/utils/utils";
import { ThumbnailsProps } from "./Thumbnails.types";

export const Thumbnails: FC<ThumbnailsProps> = ({ images, moveToSlide }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + 200;
    }
  };
  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - 200;
    }
  };
  return (
    <div className="relative flex items-center">
      <a
        className="h-full items-center flex cursor-pointer absolute top-1/2 -translate-y-1/2 text-gray-500 bg-opacity-30 bg-slate-400"
        onClick={() => {
          slideLeft();
        }}
      >
        <ChevronIcon className="rotate-180 h-6 w-auto text-gray-900" />
      </a>
      <div
        id="slider"
        ref={sliderRef}
        className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide space-x-4"
      >
        {images.map((imgSrc, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className={cn("w-20 h-14 inline-block cursor-pointer")}
            src={imgSrc.coverUrl}
            key={index}
            alt={imgSrc.alt}
            onClick={() => moveToSlide(index)}
          />
        ))}
      </div>
      <a
        className="h-full items-center flex cursor-pointer absolute top-1/2 -translate-y-1/2 text-gray-500 bg-opacity-50 bg-slate-400 right-0"
        onClick={() => {
          slideRight();
        }}
      >
        <ChevronIcon className="h-6 w-auto text-gray-900" />
      </a>
    </div>
  );
};
