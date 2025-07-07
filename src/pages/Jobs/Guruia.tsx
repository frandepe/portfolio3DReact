import { useContext } from "react";
import { Back } from "../../components/Back/Back";
import { Carousel3D } from "../../components/Carousel3D/Carousel3D";
import { I18nContext } from "@/utils/i18nProvider";

const GuruiaProject = () => {
  const context = useContext(I18nContext);
  return (
    <div className="w-full flex justify-center items-center flex-col mt-10 text-white">
      <div className="w-[90vw]">
        <div className="flex gap-2 items-end">
          <Back />
          <img
            src="/assets/guruia/guruiaLogo.png"
            className="w-28 md:w-40"
            alt="Guruia Logo"
          />
        </div>
        <div className="containerCarousel3D flex justify-center my-10">
          <Carousel3D
            imgs={[
              "/assets/guruia/guruia1.jpg",
              "/assets/guruia/guruia2.jpg",
              "/assets/guruia/guruia3.jpg",
              "/assets/guruia/guruia4.jpg",
              "/assets/guruia/guruia5.jpg",
            ]}
            web="https://project-next-jf.vercel.app/"
          />
        </div>
        <div className="text-white-100">
          <div className="max-w-4xl mx-auto p-6 my-10">
            <h1 className="text-3xl font-bold text-center mb-6">
              {context?.t.translate("job.guruia.title")}
            </h1>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                {context?.t.translate("job.responsibilities")}
              </h2>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.guruia.rt1")}
                </h3>
                <p>{context?.t.translate("job.guruia.rd1")}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.guruia.rt2")}
                </h3>
                <p>{context?.t.translate("job.guruia.rd2")}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.guruia.rt3")}
                </h3>
                <p>{context?.t.translate("job.guruia.rd3")}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.guruia.rt4")}
                </h3>
                <p>{context?.t.translate("job.guruia.rd4")}</p>
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
            <img src="/imgs/icons/Next.js.png" width={40} alt="Next.js" />{" "}
            <p>Next</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/TypeScript.png" width={40} alt="TypeScript" />{" "}
            <p>TypeScript</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/MongoDB.png" width={40} alt="MongoDB" />{" "}
            <p>MongoDB</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/Mongoose.js.png" width={40} alt="Mongoose" />{" "}
            <p>Mongoose</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/TailwindCSS.png" width={40} alt="Tailwind" />{" "}
            <p>Tailwind</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/shadcn.png" width={40} alt="Shadcn" />{" "}
            <p>Shadcn</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/Figma.png" width={40} alt="Figma" />{" "}
            <p>Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuruiaProject;
