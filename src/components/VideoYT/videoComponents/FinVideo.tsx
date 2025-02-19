import { useContext } from "react";
import Button from "../../Button/Button";
import { motion } from "framer-motion";
import { I18nContext } from "../../../utils/i18nProvider";

export const FinVideo = () => {
  const context = useContext(I18nContext);
  return (
    <motion.div
      className="absolute top-[30%] left-[60%] flex flex-col items-center gap-4 p-6 
                 bg-black/60 text-white rounded-2xl shadow-xl backdrop-blur-lg
                 transform -translate-x-1/2 -translate-y-1/2"
      initial={{ y: 100, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <h2 className="text-2xl font-bold">
        {context?.t.translate("about.finalVideo.title")}
      </h2>
      <Button
        title={context?.t.translate("about.finalVideo.btn")}
        href="/contact"
        bgColor="var(--primary)"
      />
    </motion.div>
  );
};
