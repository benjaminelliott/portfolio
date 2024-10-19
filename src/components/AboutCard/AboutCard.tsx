import { PageText } from "../PageText/PageText";
import { CircleImage } from "../CircleImage/CircleImage";

export const AboutCard = ({ image, text }: { image: string; text: string }) => {
  return (
    <div className="about-card">
      <CircleImage image={image} text={text} />
      <PageText>{text}</PageText>
    </div>
  );
};
