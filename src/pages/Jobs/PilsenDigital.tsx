import { useContext } from "react";
import { Back } from "../../components/Back/Back";
import { Carousel3D } from "../../components/Carousel3D/Carousel3D";
import { I18nContext } from "../../utils/i18nProvider";

const PilsenDigital = () => {
  const context = useContext(I18nContext);
  return (
    <main className="w-full flex justify-center items-center flex-col mt-10 text-white">
      <div className="w-[90vw]">
        <div className="flex gap-2 items-end flex-wrap">
          <Back />
          <h2 className="text-3xl md:text-6xl">Pilsen Digital</h2>
          <h4 className="text-gray-500 text-3xl md:text-4xl">
            {context?.t.translate("job.pilsen.dates")}
          </h4>
        </div>
        <div className="containerCarousel3D flex justify-center my-10">
          <Carousel3D
            imgs={[
              "/assets/pilsen/pilsen1.jpg",
              "/assets/pilsen/pilsen2.jpg",
              "/assets/pilsen/pilsen3.jpg",
              "/assets/pilsen/pilsen4.jpg",
              "/assets/pilsen/pilsen5.jpg",
            ]}
            web="https://drive.google.com/file/d/1P-cQtRLeUMFPhQw9oOxvGOZo7kNgPOCm/view?usp=sharing"
            github="https://github.com/frandepe/pilsen-sp"
          />
        </div>
        <div className="text-white-100">
          <div className="max-w-4xl mx-auto p-6 my-10">
            <h1 className="text-3xl font-bold text-center mb-6">
              {context?.t.translate("job.pilsen.title")}
            </h1>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                {context?.t.translate("job.responsibilities")}
              </h2>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.pilsen.rt1")}
                </h3>
                <p>{context?.t.translate("job.pilsen.rd1")}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.pilsen.rt2")}
                </h3>
                <p>{context?.t.translate("job.pilsen.rd2")}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.pilsen.rt3")}
                </h3>
                <p>{context?.t.translate("job.pilsen.rd3")}</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">
                {context?.t.translate("job.functionalities")}
              </h2>
              <ul className="list-disc list-inside">
                <li> {context?.t.translate("job.pilsen.skill1")}</li>
                <li>{context?.t.translate("job.pilsen.skill2")}</li>
                <li>{context?.t.translate("job.pilsen.skill3")}</li>
                <li>{context?.t.translate("job.pilsen.skill4")}</li>
                <li>{context?.t.translate("job.pilsen.skill5")}</li>
              </ul>
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
            <img
              src="/imgs/icons/React Bootstrap.png"
              width={40}
              alt="React Bootstrap"
            />
            <p>Bootstrap</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/Redux.png" width={40} alt="Redux" />
            <p>Redux</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/WordPress.png" width={40} alt="WordPress" />
            <p>WordPress</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/Postman.png" width={40} alt="Postman" />
            <p>Postman</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PilsenDigital;
