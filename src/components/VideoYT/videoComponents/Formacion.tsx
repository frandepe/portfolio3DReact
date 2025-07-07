import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
export const Formacion = () => {
  return (
    <motion.div
      className="absolute top-[35%] left-[74%]"
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1, rotate: 360 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 1,
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, bounce: 0.5 }}
        whileHover={{
          scale: 1.1,
          filter: "brightness(1.5)",
        }}
      >
        <FaGraduationCap
          size={100}
          className="text-indigo-600"
          style={{
            filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))",
          }}
        />
      </motion.div>
    </motion.div>
  );
};
