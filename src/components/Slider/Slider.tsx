"use client";
import { FC, useState } from "react";
import dynamic from "next/dynamic";
import { SliderContentProps } from "../common/SliderContent";
import { ThumbnailsProps } from "../common/Thumbnails";
import { THUMBNAILS_MOCK } from "@/mocks/thumbnails";
import { SliderProps } from "./Slider.types";

const DynamicSliderContent = dynamic<SliderContentProps>(
  () =>
    import("../common/SliderContent/SliderContent").then(
      (mod) => mod.SliderContent
    ),
  {
    ssr: false,
  }
);
const DynamicThumbnails = dynamic<ThumbnailsProps>(
  () => import("../common/Thumbnails/Thumbnails").then((mod) => mod.Thumbnails),
  {
    ssr: false,
  }
);

export const Slider: FC<SliderProps> = (props) => {
  const [slide, setSlide] = useState<number>(0);

  const addSlide = (n: number) => {
    if (slide + n >= THUMBNAILS_MOCK.length) setSlide(0);
    else if (slide + n < 0) setSlide(THUMBNAILS_MOCK.length - 1);
    else setSlide(slide + n);
  };

  return (
    <>
      <DynamicSliderContent
        addSlide={addSlide}
        data={THUMBNAILS_MOCK}
        slide={slide}
      />
      <DynamicThumbnails
        images={THUMBNAILS_MOCK}
        moveToSlide={(n: number) => setSlide(n)}
      />
    </>
  );
};
