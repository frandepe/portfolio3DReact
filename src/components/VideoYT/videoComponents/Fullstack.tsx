// import { motion } from "framer-motion";
import { memo } from "react";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";

// export const Fullstack = () => {
//   const images = [
//     {
//       src: "/imgs/icons/react.png",
//       alt: "React",
//       position: { top: "15%", left: "1%" },
//     },
//     {
//       src: "/imgs/icons/Express.png",
//       alt: "Express",
//       position: { top: "25%", left: "9%" },
//     },
//     {
//       src: "/imgs/icons/MongoDB.png",
//       alt: "MongoDB",
//       position: { top: "20%", left: "-10%" },
//     },
//     {
//       src: "/imgs/icons/MySQL.png",
//       alt: "MySQL",
//       position: { top: "-1%", left: "-5%" },
//     },
//     {
//       src: "/imgs/icons/Node.js.png",
//       alt: "Node",
//       position: { top: "30%", left: "-3%" },
//     },
//     {
//       src: "/imgs/icons/Next.js.png",
//       alt: "Next",
//       position: { top: "1%", left: "10%" },
//     },
//   ];

//   return (
//     <div className="absolute w-full h-full">
//       {images.map((image, index) => (
//         <motion.img
//           key={image.alt}
//           src={image.src}
//           alt={image.alt}
//           width={100}
//           className="absolute"
//           style={{ top: image.position.top, left: image.position.left }}
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1, rotate: [0, 10, -10, 0] }} // Pequeña rotación para más dinamismo
//           transition={{
//             delay: index * 0.5, // Aparecen en secuencia
//             duration: 0.8,
//             ease: "easeOut",
//           }}
//         />
//       ))}
//     </div>
//   );
// };

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "python",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "mongodb",
  "figma",
];

const FullstackComponent = () => {
  return (
    <div className="absolute top-[-10%] left-[70%] flex items-center justify-center w-[300px] h-full">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
};

export const Fullstack = memo(FullstackComponent);
