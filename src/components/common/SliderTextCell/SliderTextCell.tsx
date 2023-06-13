/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { SliderTextCellProps } from "./SliderTextCell.types";

export const SliderTextCell: FC<SliderTextCellProps> = ({ title, details }) => {
  return (
    <div className="w-full h-full flex flex-col items-start justify-center">
      <div className="font-semibold uppercase text-2xl mb-3">{title}</div>
      <div className="overflow-hidden">{details}</div>
    </div>
  );
};
