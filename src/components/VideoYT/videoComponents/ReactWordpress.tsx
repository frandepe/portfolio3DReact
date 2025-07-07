import { motion } from "framer-motion";

export const ReactWordpress = () => {
  return (
    <motion.div
      className="absolute top-[29%] left-[70%]"
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <img
        src="/video/react-wordpress.png"
        width={300}
        alt="react y wordpress"
      />
    </motion.div>
  );
};
