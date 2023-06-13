import { HTMLAttributes, SVGAttributes, forwardRef } from "react";

import { cn } from "@/utils/utils";

export type SvgIconProps = SVGAttributes<SVGSVGElement> &
  HTMLAttributes<SVGSVGElement>;

export const SvgIcon = forwardRef<SVGSVGElement, SvgIconProps>(function SvgIcon(
  props,
  ref
) {
  const { children, className, ...other } = props;

  return (
    <svg
      ref={ref}
      className={cn(
        "inline-block fill-current flex-shrink-0 select-none",
        className
      )}
      focusable="false"
      {...other}
    >
      {children}
    </svg>
  );
});
