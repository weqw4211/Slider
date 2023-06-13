export type SliderContentProps = {
    slide: number;
    data: {
      id: string;
      alt: string;
      coverUrl: string;
    }[];
    addSlide: (n: number) => void;
  };
  