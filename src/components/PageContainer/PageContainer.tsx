import { useSpring, animated } from "@react-spring/web";

export const PageContainer = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const springs = useSpring({
    from: { opacity: 0, scale: 0.75 },
    to: { opacity: 1, scale: 1 },
  });

  return (
    <animated.section id={id} className="page-container" style={{ ...springs }}>
      {children}
    </animated.section>
  );
};
