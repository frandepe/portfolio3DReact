import { motion } from "framer-motion";

export const NaturaCountries = () => {
  return (
    <motion.div
      className="absolute top-[29%] left-[70%] flex flex-col items-center"
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
    >
      <div className="flex flex-col items-center gap-2">
        <motion.img
          src="/video/pe.svg"
          width={150}
          alt="natura peru"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0, type: "spring", stiffness: 100, damping: 10 }}
        />
        <div className="flex gap-2">
          <motion.img
            src="/video/co.svg"
            width={150}
            alt="natura colombia"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 1,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
          />
          <motion.img
            src="/video/cl.svg"
            width={150}
            alt="natura chile"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 5,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};
