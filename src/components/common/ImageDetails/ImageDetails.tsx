/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { Dialog } from "../Dialog/Dialog";
import { ImageDetailsProps } from "./ImageDetails.types";

const ImageDetails: FC<ImageDetailsProps> = ({
  isOpen,
  url,
  ImgAlt,
  onClose,
  contentRef,
}) => {
  return (
    <Dialog contentRef={contentRef} isOpen={isOpen} onRequestClose={onClose}>
      <img className="object-cover h-full w-full" src={url} alt={ImgAlt} />
    </Dialog>
  );
};

export default ImageDetails;
