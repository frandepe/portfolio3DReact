import React, { useContext } from "react";
import { Back } from "../../components/Back/Back";
import { Carousel3D } from "../../components/Carousel3D/Carousel3D";
import { I18nContext } from "@/utils/i18nProvider";

const ArgentinaReanima: React.FC = () => {
  const context = useContext(I18nContext);
  const images = [
    "/assets/argreanima/argreanima2.jpg",
    "/assets/argreanima/argreanima1.jpg",
    "/assets/argreanima/argreanima3.jpg",
    "/assets/argreanima/argreanima4.jpg",
    "/assets/argreanima/argreanima5.jpg",
  ];

  return (
    <main className="w-full flex justify-center items-center flex-col mt-10 bg-#263a7a text-white ">
      <div className="w-[90vw]">
        <div className="flex gap-2 items-end">
          <Back />
          <img
            src="https://www.argentinareanima.org.ar/logo/logo.png"
            alt="Guía Pellegrini"
            className="w-20"
          />
          <h2 className="text-3xl md:text-6xl">Argentina Reanima</h2>
        </div>

        <div className="containerCarousel3D flex justify-center my-10">
          <Carousel3D
            imgs={images}
            web="https://argentinareanima.org.ar/"
            github="https://github.com/projectjfdev/argentina-reanima"
          />
        </div>

        <div className="text-white-100">
          <div className="max-w-4xl mx-auto p-6 my-10">
            <h1 className="text-3xl font-bold text-center mb-6">
              {context?.t.translate("job.argReanima.title")}
            </h1>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                {context?.t.translate("job.responsibilities")}
              </h2>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.argReanima.rt1")}
                </h3>
                <p>
                  <p>{context?.t.translate("job.argReanima.rd1")}</p>
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.argReanima.rt2")}
                </h3>
                <p>{context?.t.translate("job.argReanima.rd2")}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.argReanima.rt3")}
                </h3>
                <p>{context?.t.translate("job.argReanima.rd3")}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.argReanima.rt4")}
                </h3>
                <p>{context?.t.translate("job.argReanima.rd4")}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.argReanima.rt5")}
                </h3>
                <p>{context?.t.translate("job.argReanima.rd5")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mb-10">
        <h3 className="text-4xl my-10">
          {context?.t.translate("job.technologiesUsed")}
        </h3>
        <div className="flex justify-center gap-6 flex-wrap">
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/Next.js.png" width={40} alt="Next" />
            <p>Next Js</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/TypeScript.png" width={40} alt="TypeScript" />
            <p>TypeScript</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/Prisma.png" width={40} alt="Prisma" />
            <p>Prisma</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/shadcn.png" width={40} alt="Shadcn" />
            <p>Shadcn</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/TailwindCSS.png" width={40} alt="Tailwind" />
            <p>Tailwind</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArgentinaReanima;
