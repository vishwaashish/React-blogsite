import { motion, useIsPresent } from "framer-motion";
import { memo } from "react";
const AnimatePage = ({ children }) => {
  const isPresent = useIsPresent();
  return (
    <>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: {
            duration: 0.5,
            ease: "circOut",
            when: "beforeChildren",
          },
        }}
        onAnimationStart={() => {
          console.log("state");
        }}
        onAnimationComplete={() => {
          console.log("done");
        }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="router-motion"
      />
      {children}
    </>
  );
};

export default memo(AnimatePage);
