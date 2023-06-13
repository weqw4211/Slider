export default function placeholdLoader({
    src,
    width,
  }: {
    src: string;
    width: number;
  }) {
    return `https://placehold.co/${width}x${width}`;
  }
  