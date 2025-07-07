import { motion } from "framer-motion";

export const Techs = () => {
  return (
    <motion.div
      className="absolute top-[10%] left-[50%] flex items-center justify-center w-full h-full"
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
    >
      <motion.img
        src="/imgs/icons/Salesforce.png"
        width={120}
        alt="Salesforce"
        className="absolute top-[10%] left-[15%]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0, duration: 0.5 }}
      />
      <motion.img
        src="/imgs/icons/Drupal.png"
        width={120}
        alt="Drupal"
        className="absolute top-[20%] left-[30%]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      />
      <motion.img
        src="/imgs/icons/HTML5.png"
        width={100}
        alt="HTML5"
        className="absolute top-[30%] left-[20%]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      />
      <motion.img
        src="/imgs/icons/CSS3.png"
        width={120}
        alt="CSS3"
        className="absolute top-[40%] left-[10%]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      />
      <motion.img
        src="/imgs/icons/JavaScript.png"
        width={120}
        alt="JavaScript"
        className="absolute top-[40%] left-[30%]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
      />
    </motion.div>
  );
};
