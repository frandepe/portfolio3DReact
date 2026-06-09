import { useContext } from "react";
import { FaDatabase } from "react-icons/fa";
import { Back } from "../../components/Back/Back";
import { Carousel3D } from "../../components/Carousel3D/Carousel3D";
import { I18nContext } from "@/utils/i18nProvider";

const Vitalica = () => {
  const context = useContext(I18nContext);

  return (
    <main className="w-full flex justify-center items-center flex-col mt-10 text-white">
      <div className="w-[90vw]">
        <div className="flex gap-2 items-end flex-wrap">
          <Back />
          <img
            src="/assets/vitalica/logo-rbg.png"
            alt="Vitalica"
            className="w-24 md:w-32"
          />
          <h2 className="text-3xl md:text-6xl">Vitalica</h2>
        </div>

        <div className="containerCarousel3D flex justify-center my-10">
          <Carousel3D
            imgs={[
              "/assets/vitalica/vitalica1.jpg",
              "/assets/vitalica/vitalica2.jpg",
              "/assets/vitalica/vitalica3.jpg",
              "/assets/vitalica/vitalica4.jpg",
              "/assets/vitalica/vitalica5.jpg",
            ]}
            web="https://vitalica.com.ar"
          />
        </div>

        <div className="text-white-100">
          <div className="max-w-4xl mx-auto p-6 my-10">
            <h1 className="text-3xl font-bold text-center mb-6">
              {context?.t.translate("job.vitalica.title")}
            </h1>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                {context?.t.translate("job.responsibilities")}
              </h2>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.vitalica.rt1")}
                </h3>
                <p>{context?.t.translate("job.vitalica.rd1")}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.vitalica.rt2")}
                </h3>
                <p>{context?.t.translate("job.vitalica.rd2")}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.vitalica.rt3")}
                </h3>
                <p>{context?.t.translate("job.vitalica.rd3")}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.vitalica.rt4")}
                </h3>
                <p>{context?.t.translate("job.vitalica.rd4")}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.vitalica.rt5")}
                </h3>
                <p>{context?.t.translate("job.vitalica.rd5")}</p>
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
            <img src="/imgs/icons/Node.js.png" width={40} alt="Node.js" />
            <p>Node.js</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/Express.png" width={40} alt="Express" />
            <p>Express</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <FaDatabase size={40} />
            <p>PostgreSQL</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Vitalica;
