import { forwardRef } from "react";
import { SvgIcon, SvgIconProps } from "./SvgIcon";

export const CloseIcon = forwardRef<SVGSVGElement, SvgIconProps>(
  function CloseIcon(props, ref) {
    return (
      <SvgIcon ref={ref} viewBox="0 0 13.86 13.859" {...props}>
        <path
          d="M13.86 1.131 12.727 0 0 12.728l1.131 1.131Z"
          fill="currentColor"
        />
        <path
          d="m12.728 13.86 1.131-1.132L1.131 0 0 1.131Z"
          fill="currentColor"
        />
      </SvgIcon>
    );
  }
);
