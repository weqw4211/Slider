export interface ImageDetailsProps {
  isOpen: boolean;
  url: string;
  ImgAlt: string;
  onClose: () => void;
  contentRef: (instance: HTMLDivElement) => void;
}
