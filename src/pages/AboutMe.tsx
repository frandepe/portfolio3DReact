import ProfileImage from "../components/ProfileImage/ProfileImage";
import Button from "../components/Button/Button";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import { CarouselTech } from "../components/CarouselTech/CarouselTech";
import { I18nContext } from "../utils/i18nProvider";
import { useContext } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { VideoModalDemo } from "@/components/VideoYT/VideoModal";

const AboutMe = () => {
  const context = useContext(I18nContext);

  fetch("https://example.api.com?token=mitoken123");

  const desktop = "(max-width: 600px)";
  const isDesktop = useMediaQuery(desktop);
  return (
    <main className="bg-#263a7a text-white">
      <SocialLinks />
      <div
        className={`flex flex-col items-center md:flex-row md:justify-center h-[100%] md:h-[80vh] ${
          isDesktop ? "py-10" : "py-0"
        }`}
      >
        <div>
          <ProfileImage />
        </div>
        <div className="w-[90vw] md:w-auto flex items-center flex-col md:block">
          <h3 className="text-[var(--primary)] font-semibold">
            {context?.t.translate("about.title")}
          </h3>
          <div className="sm:w-[500px] border-b pb-6 mb-6">
            <p className="mb-2">{context?.t.translate("about.description1")}</p>
            <p>{context?.t.translate("about.description2")}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <p>
              <span className="text-gray-400">Email</span>{" "}
              frandepaulo23@gmail.com
            </p>
            <p>
              <span className="text-gray-400">
                {" "}
                {context?.t.translate("about.country")}
              </span>{" "}
              Argentina
            </p>
            <p>
              <span className="text-gray-400">
                {context?.t.translate("about.city")}
              </span>{" "}
              La Plata
            </p>
            <p>
              <span className="text-gray-400">
                {context?.t.translate("about.secretTalent")}
              </span>{" "}
              React Jedi
            </p>
          </div>
          <div className="flex gap-2 mb-6 md:mb-0">
            <Button
              variant="variant"
              download="CV-Dev Franco De Paulo"
              title={context?.t.translate("about.btnDownloadCV")}
              href="/CV Franco De Paulo 2025.pdf"
            />
            {/* <Button
                variant="default"
                title="Video"
                bgColor="var(--tertiary)"
                color="black"
                onClick={handleClickVideo}
              /> */}
            <VideoModalDemo />
            <Button
              variant="variant"
              title={context?.t.translate("about.btnContact")}
              href="/contact"
            />
          </div>
        </div>
      </div>

      <CarouselTech />
    </main>
  );
};

export default AboutMe;
// <motion.div
//   initial={{ y: "-100%" }} // Empieza fuera de la pantalla, arriba
//   animate={{ y: 0 }} // Finaliza en su posición original
//   exit={{ y: "-100%" }} // Se mueve hacia arriba al salir
//   transition={{ duration: 0.5, ease: "easeInOut" }} // Agregar un ease para un movimiento más fluido
//   className="flex flex-col items-center md:flex-row md:justify-center h-[100%] md:h-[80vh]"
// >
//   <VideoYT />
// </motion.div>
