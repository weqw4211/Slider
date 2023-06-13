import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { MutableRefObject, ForwardedRef, useCallback } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useMergeRefs<T>(
  refs: Array<MutableRefObject<T> | ForwardedRef<T>>
) {
  return useCallback(
    (ref: T | null) => {
      refs.forEach((r) => {
        if (typeof r === "function") {
          r(ref);
        } else if (r !== null) {
          // eslint-disable-next-line no-param-reassign
          r.current = ref;
        }
      });
    },
    [...refs]
  );
}
