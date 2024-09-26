import { LazyLoadImage } from "react-lazy-load-image-component";

export const CircleImage = ({
  image,
  text,
}: {
  image: string;
  text: string;
}) => {
  return (
    <div className="circle-image">
      <LazyLoadImage
        src={image}
        alt={text}
        effect="blur"
        className="circle-image__img"
      />
    </div>
  );
};
