import { PageText } from "./PageText";
import { CircleImage } from "./CircleImage";

export const AboutCard = ({ image, text }: { image: string; text: string }) => {
  return (
    <div className="about-card">
      <CircleImage image={image} text={text} />
      <PageText>{text}</PageText>
    </div>
  );
};
