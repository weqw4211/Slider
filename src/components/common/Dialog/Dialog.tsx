import { FC } from "react";
import Modal from "react-modal";
import { CloseIcon } from "../../icons/CloseIcon";
import { DialogProps } from "./Dialog.types";

export const Dialog: FC<DialogProps> = ({
  children,
  isOpen,
  onRequestClose,
  contentRef,
  ...other
}) => {
  return (
    <Modal
      isOpen={isOpen}
      contentRef={contentRef}
      ariaHideApp={false}
      className="fixed left-2/4 top-2/4 transform-gpu -translate-x-1/2 -translate-y-1/2
      flex flex-col flex-1
      bg-offBlack focus:outline-none shadow
      text-white max-w-full max-h-full
      border-radius[18px] overflow-hidden"
      {...other}
    >
      {children}
      <button
        className="absolute left-1 top-1 focus:outline-none p-2 transition-colors flex"
        onClick={onRequestClose}
        type="button"
        aria-label="Close the dialog"
      >
        <CloseIcon className="text-black w-4 h-4" />
      </button>
    </Modal>
  );
};
