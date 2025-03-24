import { motion } from "framer-motion";

export const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex flex-col items-center">
        {/* Fondo animado */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear", // Ajustado a "linear"
          }}
        />

        {/* Rotating loader */}
        <motion.div
          className="w-24 h-24 mb-8 border-t-8 border-primary rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear", // Ajustado a "linear"
          }}
        />

        {/* Animated particles (optional for a nice touch) */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            opacity: [0.1, 1, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut", // Cambié por "easeInOut"
          }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="5" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};
