import { motion } from "framer-motion";
import { useContext } from "react";
import { cn } from "@/lib/utils";
import { BsCircle } from "react-icons/bs";
import Button from "../Button/Button";
import { I18nContext } from "@/utils/i18nProvider";

function FloatingElement({
  className,
  delay = 0,
  size = 300,
  gradient = "from-indigo-500/[0.15]",
}: {
  className?: string;
  delay?: number;
  size?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.8,
        delay,
        ease: "easeInOut",
      }}
      className={cn("absolute", className)}
      style={{
        width: size,
        height: size,
      }}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-full",
          `bg-gradient-to-r ${gradient}`,
          "backdrop-blur-[2px] border-2 border-white/[0.15]",
          "shadow-[0_8px_32px_0_rgba(255,255,255,0.2)]",
          "after:absolute after:inset-0 after:rounded-full",
          "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
        )}
      />
    </motion.div>
  );
}

function HeroInnovative({
  badge = "Design Excellence",
  title1 = "Revolutionize Your Digital Experience",
  title2 = "Where Technology Meets Creativity",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const context = useContext(I18nContext);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: 0.4 + i * 0.2,
        ease: [0.23, 0.68, 0.28, 1.03],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1e1e1e] to-[#121212]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.1] via-transparent to-pink-500/[0.1] blur-3xl" />

      {/* Floating Elements */}
      <FloatingElement
        delay={0.2}
        size={400}
        gradient="from-purple-500/[0.15]"
        className="left-[-25%] top-[10%] md:left-[-15%] md:top-[5%]"
      />
      <FloatingElement
        delay={0.4}
        size={500}
        gradient="from-blue-500/[0.15]"
        className="right-[-10%] top-[50%] md:right-[0%] md:top-[40%]"
      />
      <FloatingElement
        delay={0.6}
        size={350}
        gradient="from-yellow-500/[0.15]"
        className="left-[10%] bottom-[5%] md:left-[5%] md:bottom-[10%]"
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.1] border border-white/[0.2] mb-10 md:mb-14"
          >
            <BsCircle className="h-2 w-2 fill-[var(--secondary)]" />
            <span className="text-sm text-white/80 tracking-wide">{badge}</span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 md:mb-10 leading-tight text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                {title1}
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
              {context?.t.translate("home.subtitle")}
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            <Button
              title={context?.t.translate("home.btn")}
              variant="default"
              href="/about"
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]/90 pointer-events-none" />
    </div>
  );
}

export { HeroInnovative };
