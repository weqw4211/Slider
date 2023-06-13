/* eslint-disable @next/next/no-img-element */
import { FC, MouseEventHandler, useCallback, useRef, useState } from "react";
import { SliderTextCell } from "../SliderTextCell/SliderTextCell";
import { ChevronIcon } from "../../icons/ChevronIcon";
import { cn } from "@/utils/utils";
import ImageDetails from "../ImageDetails/ImageDetails";
import { SliderContentProps } from "./SliderContent.types";

export const SliderContent: FC<SliderContentProps> = ({
  data,
  slide,
  addSlide,
}) => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    url: string;
    ImgAlt: string;
    width: number;
    height: number;
  }>({ isOpen: false, url: "", ImgAlt: "", width: 0, height: 0 });

  const dialogRef = useRef<HTMLDivElement | null>(null);
  const onDialogClose = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const updateContentRef = useCallback(
    (ref: HTMLDivElement) => {
      dialogRef.current = ref;
      if (dialogRef.current) {
        dialogRef.current.style.width = `${modalState.width}px`;
        dialogRef.current.style.height = `${modalState.height}px`;
      }
    },
    [dialogRef, modalState.height, modalState.width]
  );

  const onImgClick: MouseEventHandler<HTMLImageElement> = (e) => {
    const clickedImg = e.target as HTMLImageElement;
    setModalState({
      isOpen: true,
      url: data[slide].coverUrl,
      ImgAlt: data[slide].alt,
      width: 2 * clickedImg.width,
      height: 2 * clickedImg.height,
    });
  };

  return (
    <div className="relative grid grid-cols-2 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,2fr)] h-full w-full gap-5">
      {Array.from({ length: 7 }).map((_, key) =>
        // eslint-disable-next-line react/no-array-index-key
        key === 5 ? (
          <SliderTextCell
            title="Paleta Ziemi"
            details="Wypełnij swoją przestrzeń światłem i najcieplejszymi kolorami natury"
            key={key}
          />
        ) : (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img
            className={cn(
              "object-cover h-full w-full cursor-pointer",
              key === 0 && "row-span-2"
            )}
            src={data[slide].coverUrl}
            key={key}
            onClick={onImgClick}
          />
        )
      )}
      <ImageDetails
        url={modalState.url}
        ImgAlt={modalState.ImgAlt}
        isOpen={modalState.isOpen}
        onClose={onDialogClose}
        contentRef={updateContentRef}
      />
      <a
        className="py-3 cursor-pointer absolute top-1/2 -translate-y-1/2 text-gray-500 bg-opacity-50 bg-slate-400"
        onClick={() => {
          addSlide(-1);
        }}
      >
        <ChevronIcon className="rotate-180 h-14 w-auto text-gray-500" />
      </a>
      <a
        className="py-3 cursor-pointer absolute top-1/2 -translate-y-1/2 text-gray-500 bg-opacity-50 bg-slate-400 right-0"
        onClick={() => {
          addSlide(1);
        }}
      >
        <ChevronIcon className="h-14 w-auto text-gray-500" />
      </a>
    </div>
  );
};
