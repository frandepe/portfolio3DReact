import { useContext } from "react";
import { Back } from "../../components/Back/Back";
import { Carousel3D } from "../../components/Carousel3D/Carousel3D";
import { I18nContext } from "../../utils/i18nProvider";

const NaturaJob = () => {
  const context = useContext(I18nContext);
  return (
    <main className="w-full flex justify-center items-center flex-col mt-10 text-white">
      <div className="w-[90vw]">
        <div className="flex gap-2 items-end flex-wrap">
          <Back />
          <img src="/assets/natura/naturaLogo.png" className="w-24" />
          <h2 className="text-7xl">Natura</h2>
          <h4 className="text-gray-500 text-4xl">
            {context?.t.translate("job.natura.actuality")}
          </h4>
        </div>
        <div className="containerCarousel3D flex justify-center my-10">
          <Carousel3D
            imgs={[
              "/assets/natura/natura1.jpg",
              "/assets/natura/natura2.jpg",
              "/assets/natura/natura3.jpg",
              "/assets/natura/natura4.jpg",
              "/assets/natura/natura5.jpg",
            ]}
            web="https://natura.cl"
          />
        </div>
        <div className="text-white-100">
          <div className="max-w-4xl mx-auto p-6 my-10">
            <h1 className="text-3xl font-bold text-center mb-6">
              {context?.t.translate("job.natura.title")}
            </h1>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                {context?.t.translate("job.responsibilities")}
              </h2>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.natura.rt1")}
                </h3>
                <p>{context?.t.translate("job.natura.rd1")}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.natura.rt2")}
                </h3>
                <p>{context?.t.translate("job.natura.rd2")}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.natura.rt3")}
                </h3>
                <p>{context?.t.translate("job.natura.rd3")}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {context?.t.translate("job.natura.rt4")}
                </h3>
                <p>{context?.t.translate("job.natura.rd4")}</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">
                {context?.t.translate("job.skills")}
              </h2>
              <ul className="list-disc list-inside">
                <li>{context?.t.translate("job.natura.skill1")}</li>
                <li>{context?.t.translate("job.natura.skill2")}</li>
                <li>{context?.t.translate("job.natura.skill3")}</li>
                <li>{context?.t.translate("job.natura.skill4")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-10">
        <h3 className="text-4xl my-10">
          {context?.t.translate("job.technologiesUsed")}
        </h3>
        <div className="flex justify-center gap-6">
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/Drupal.png" width={40} /> <p>Drupal</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/Salesforce.png" width={40} />{" "}
            <p>SalesForce</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/HTML5.png" width={40} /> <p>HTML</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/CSS3.png" width={40} /> <p>CSS</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/JavaScript.png" width={40} />{" "}
            <p>JavaScript</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NaturaJob;
