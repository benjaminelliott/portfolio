import type { AboutItem } from "../../global";
import { AboutCard } from "../AboutCard/AboutCard";

export const AboutList = ({ aboutItems }: { aboutItems: AboutItem[] }) => {
  return (
    <ul className="about-list">
      {aboutItems &&
        aboutItems.map((item) => (
          <AboutCard key={item.key} image={item.image} text={item.text} />
        ))}
    </ul>
  );
};
