import { motion } from "framer-motion";

export const Natura = () => {
  return (
    <motion.div
      className="absolute top-[29%] left-[70%]"
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
    >
      <img src="/assets/natura/naturaLogo.png" width={200} alt="natura" />
    </motion.div>
  );
};
