import { forwardRef } from "react";
import { SvgIcon, SvgIconProps } from "./SvgIcon";

export const ChevronIcon = forwardRef<SVGSVGElement, SvgIconProps>(
  function ChevronIcon(props, ref) {
    return (
      <SvgIcon ref={ref} viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </SvgIcon>
    );
  }
);
