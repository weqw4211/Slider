export type ThumbnailsProps = {
  moveToSlide: (n: number) => void;
  images: {
    id: string;
    alt: string;
    coverUrl: string;
  }[];
};
