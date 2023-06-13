import { ReactNode } from "react";
import { Props } from "react-modal";

export type DialogProps = Props & {
    children?: ReactNode;
    isOpen: boolean;
  };