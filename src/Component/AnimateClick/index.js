import { motion } from "framer-motion";




export const IconLink = ({ children, ...props }) => {
  return (
    <motion.a
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
    </motion.a>
  );
};
