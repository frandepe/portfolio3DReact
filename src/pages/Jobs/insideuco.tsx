import { useContext } from "react";
import { Back } from "../../components/Back/Back";
import { Carousel3D } from "../../components/Carousel3D/Carousel3D";
import { I18nContext } from "@/utils/i18nProvider";

const InsideUco = () => {
  const context = useContext(I18nContext);

  return (
    <main className="w-full flex justify-center items-center flex-col mt-10 text-white">
      <div className="w-[90vw]">
        <div className="flex gap-2 items-end flex-wrap">
          <Back />
          <img
            src="/assets/insideuco/insideucologo.png"
            alt="Inside Uco"
            className="w-40 md:w-56"
          />
        </div>

        <div className="containerCarousel3D flex justify-center my-10">
          <Carousel3D
            imgs={[
              "/assets/insideuco/insideuco3.jpg",
              "/assets/insideuco/insideuco1.jpg",
              "/assets/insideuco/insideuco2.jpg",
              "/assets/insideuco/insideuco4.jpg",
              "/assets/insideuco/insideuco5.jpg",
            ]}
            web="https://www.insideuco.com.ar/"
          />
        </div>

        <div className="text-white-100">
          <div className="max-w-4xl mx-auto p-6 my-10">
            <h1 className="text-3xl font-bold text-center mb-6">
              {context?.t.translate("job.insideuco.title")}
            </h1>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                {context?.t.translate("job.responsibilities")}
              </h2>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.insideuco.rt1")}
                </h3>
                <p>{context?.t.translate("job.insideuco.rd1")}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.insideuco.rt2")}
                </h3>
                <p>{context?.t.translate("job.insideuco.rd2")}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.insideuco.rt3")}
                </h3>
                <p>{context?.t.translate("job.insideuco.rd3")}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.insideuco.rt4")}
                </h3>
                <p>{context?.t.translate("job.insideuco.rd4")}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.insideuco.rt5")}
                </h3>
                <p>{context?.t.translate("job.insideuco.rd5")}</p>
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
            <img src="/imgs/icons/Astro.png" width={40} alt="Astro" />
            <p>Astro</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/HTML5.png" width={40} alt="HTML5" />
            <p>HTML</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/CSS3.png" width={40} alt="CSS3" />
            <p>CSS</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/JavaScript.png" width={40} alt="JavaScript" />
            <p>JavaScript</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InsideUco;
