import React, { useContext } from "react";
import { Back } from "../../components/Back/Back";
import { Carousel3D } from "../../components/Carousel3D/Carousel3D";
import { I18nContext } from "@/utils/i18nProvider";

const Congreso: React.FC = () => {
  const context = useContext(I18nContext);
  const images = [
    "/assets/congreso/congreso2.jpg",
    "/assets/congreso/congreso1.jpg",
    "/assets/congreso/congreso3.jpg",
    "/assets/congreso/congreso4.jpg",
    "/assets/congreso/congreso5.jpg",
  ];

  return (
    <main className="w-full flex justify-center items-center flex-col mt-10 bg-#263a7a text-white ">
      <div className="w-[90vw]">
        <div className="flex gap-2 items-end">
          <Back />
          <img
            src="/assets/congreso/logoCongreso.png"
            alt="Guía Pellegrini"
            className="w-20"
          />
          <h2 className="text-3xl md:text-6xl">Congreso Nacional de RCP</h2>
        </div>

        <div className="containerCarousel3D flex justify-center my-10">
          <Carousel3D
            imgs={images}
            web="https://congresonacionalrcp.com.ar/"
            github="https://github.com/frandepe/congreso2025"
          />
        </div>

        <div className="text-white-100">
          <div className="max-w-4xl mx-auto p-6 my-10">
            <h1 className="text-3xl font-bold text-center mb-6">
              {context?.t.translate("job.congreso.title")}
            </h1>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                {context?.t.translate("job.responsibilities")}
              </h2>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.congreso.rt1")}
                </h3>
                <p>
                  <p>{context?.t.translate("job.congreso.rd1")}</p>
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.congreso.rt2")}
                </h3>
                <p>{context?.t.translate("job.congreso.rd2")}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.congreso.rt3")}
                </h3>
                <p>{context?.t.translate("job.congreso.rd3")}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.congreso.rt4")}
                </h3>
                <p>{context?.t.translate("job.congreso.rd4")}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.congreso.rt5")}
                </h3>
                <p>{context?.t.translate("job.congreso.rd5")}</p>
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
            <img src="/imgs/icons/react.png" width={40} alt="React" />
            <p>React</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/TypeScript.png" width={40} alt="TypeScript" />
            <p>TypeScript</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/Supabase.png" width={40} alt="Supabase" />
            <p>Supabase</p>
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

export default Congreso;
