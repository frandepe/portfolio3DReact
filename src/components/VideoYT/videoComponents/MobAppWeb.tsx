import { motion } from "framer-motion";
import { MdSmartphone, MdComputer, MdApps } from "react-icons/md";

export const MobAppWeb = () => {
  return (
    <motion.div
      className="absolute top-[29%] left-[70%] flex flex-col items-center"
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
    >
      <div className="flex items-center gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <MdSmartphone size={90} className="text-blue-500" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <MdApps size={100} className="text-purple-500 mt-4" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <MdComputer size={100} className="text-green-500 mt-4" />
        </motion.div>
      </div>
    </motion.div>
  );
};
