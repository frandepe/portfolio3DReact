import { useContext } from "react";
import { Back } from "../../components/Back/Back";
import { Carousel3D } from "../../components/Carousel3D/Carousel3D";
import { I18nContext } from "@/utils/i18nProvider";

const NDCapacitaciones = () => {
  const context = useContext(I18nContext);
  return (
    <div className="w-full flex justify-center items-center flex-col mt-10 text-white">
      <div className="w-[90vw]">
        <div className="flex gap-2 items-end">
          <Back />
          <img
            src="/assets/ndcapacitaciones/logo4.png"
            className="w-28 md:w-32"
          />
          <h2 className="text-3xl md:text-6xl">NDCapacitaciones</h2>
        </div>
        <div className="containerCarousel3D flex justify-center my-10">
          <Carousel3D
            imgs={[
              "/assets/ndcapacitaciones/ndcapacitaciones1.jpg",
              "/assets/ndcapacitaciones/ndcapacitaciones2.jpg",
              "/assets/ndcapacitaciones/ndcapacitaciones3.jpg",
              "/assets/ndcapacitaciones/ndcapacitaciones4.jpg",
              "/assets/ndcapacitaciones/ndcapacitaciones5.jpg",
            ]}
            web="https://ndcapacitaciones.xyz"
            github="https://github.com/frandepe/NDcapacitaciones"
          />
        </div>
        <div className="text-white-100">
          <div className="max-w-4xl mx-auto p-6 my-10">
            <h1 className="text-3xl font-bold text-center mb-6">
              {context?.t.translate("job.ndCapacitaciones.title")}
            </h1>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                {context?.t.translate("job.responsibilities")}
              </h2>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.ndCapacitaciones.rt1")}
                </h3>
                <p>{context?.t.translate("job.ndCapacitaciones.rd1")}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.ndCapacitaciones.rt2")}
                </h3>
                <p>{context?.t.translate("job.ndCapacitaciones.rd2")}</p>
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
            <img src="/imgs/icons/Express.png" width={40} alt="Express" />
            <p>Express</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/Node.js.png" width={40} alt="Node.js" />
            <p>Node</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/MongoDB.png" width={40} alt="MongoDB" />
            <p>MongoDB</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/Bootstrap.png" width={40} alt="Bootstrap" />
            <p>Bootstrap</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/Sass.png" width={40} alt="Sass" />
            <p>SASS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NDCapacitaciones;
