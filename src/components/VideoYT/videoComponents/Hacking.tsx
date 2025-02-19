import { motion } from "framer-motion";

export const Hacking = () => {
  return (
    <motion.div
      className="absolute top-[30%] left-[65%] mix-blend-screen"
      initial={{ y: -200, opacity: 0, filter: "blur(10px)" }}
      animate={{
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        scale: [1, 1.1, 1], // Pequeño efecto de zoom glitch
        rotate: [0, -2, 2, 0], // Ligera rotación errática
        x: [0, -5, 5, -5, 5, 0], // Efecto de vibración horizontal
      }}
      transition={{ type: "spring", stiffness: 120, damping: 12, duration: 1 }}
    >
      <motion.img
        src="/video/hacking.png"
        width={400}
        alt="hacking"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5, 1] }} // Parpadeo
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.5,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};
