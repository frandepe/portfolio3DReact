import { useContext } from "react";
import { Back } from "../../components/Back/Back";
import { Carousel3D } from "../../components/Carousel3D/Carousel3D";
import { I18nContext } from "../../utils/i18nProvider";

const AIAgro = () => {
  const context = useContext(I18nContext);
  return (
    <main className="w-full flex justify-center items-center flex-col mt-10 text-white">
      <div className="w-[90vw]">
        <div className="flex gap-2 items-end flex-wrap">
          <Back />
          <h2 className="text-3xl md:text-6xl">IAgro</h2>
          <h4 className="text-gray-500 text-3xl md:text-4xl">
            {context?.t.translate("job.agro.dates")}
          </h4>
        </div>
        <div className="containerCarousel3D flex justify-center my-10">
          <Carousel3D
            imgs={[
              "/assets/agro/agro1.jpg",
              "/assets/agro/agro2.jpg",
              "/assets/agro/agro3.jpg",
              "/assets/agro/agro4.jpg",
              "/assets/agro/agro5.jpg",
            ]}
            web="https://www.linkedin.com/posts/franco-de-paulo_hace-un-tiempo-un-cliente-nos-confi%C3%B3-un-desaf%C3%ADo-activity-7368357961900998656-jtDO/"
            // github=""
          />
        </div>
        <div className="text-white-100">
          <div className="max-w-4xl mx-auto p-6 my-10">
            <h1 className="text-3xl font-bold text-center mb-6">
              {context?.t.translate("job.agro.title")}
            </h1>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                {context?.t.translate("job.responsibilities")}
              </h2>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.agro.rt1")}
                </h3>
                <p>{context?.t.translate("job.agro.rd1")}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.agro.rt2")}
                </h3>
                <p>{context?.t.translate("job.agro.rd2")}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.agro.rt3")}
                </h3>
                <p>{context?.t.translate("job.agro.rd3")}</p>
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
            <img src="/imgs/icons/Python.png" width={40} alt="Python" />
            <p>Python</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/Python.png" width={40} alt="Fast API" />
            <p>Fast API</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/TailwindCSS.png" width={40} alt="tailwind" />
            <p>Tailwind</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/shadcn.png" width={40} alt="Shadcn" />
            <p>Shadcn</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AIAgro;
