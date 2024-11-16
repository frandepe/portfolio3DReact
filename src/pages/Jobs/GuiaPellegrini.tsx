import React from "react";
import { Back } from "../../components/Back/Back";
import { Carousel3D } from "../../components/Carousel3D/Carousel3D";

const GuiaPellegrini: React.FC = () => {
  const images = [
    "/assets/guia/guia1.jpg",
    "/assets/guia/guia2.jpg",
    "/assets/guia/guia3.jpg",
    "/assets/guia/guia4.jpg",
    "/assets/guia/guia5.jpg",
  ];

  return (
    <main className="w-full flex justify-center items-center flex-col mt-10 bg-#263a7a text-white ">
      <div className="w-[90vw]">
        <div className="flex gap-2 items-end">
          <Back />
          <img
            src="/assets/guia/logoNaranja.png"
            alt="Guía Pellegrini"
            className="w-12"
          />
          <h2 className="text-3xl md:text-6xl">Guía Pellegrini</h2>
        </div>

        <div className="containerCarousel3D flex justify-center my-10">
          <Carousel3D
            imgs={images}
            web="https://guiapelle-git-main-frandepe.vercel.app/"
            github="https://github.com/frandepe/front-todopelle"
          />
        </div>

        <div className="text-white-100">
          <div className="max-w-4xl mx-auto p-6 my-10">
            <h1 className="text-3xl font-bold text-center mb-6">
              Personal Project: Job Guide for Pellegrini
            </h1>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                Responsibilities and Achievements:
              </h2>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  Project Lifecycle Management:
                </h3>
                <p>
                  I was in charge of the entire lifecycle of the project,
                  including design, concept, advertising, and scalability. This
                  involved extensive research and strategic planning to ensure
                  the project's success.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  Collaboration with City Officials:
                </h3>
                <p>
                  I conducted research and met with the mayor of Pellegrini to
                  evaluate all the business sectors that could be included on
                  the website. This collaboration was crucial in identifying the
                  key areas to feature.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  Development of Mapping System:
                </h3>
                <p>
                  I developed a mapping system to locate all businesses in
                  Pellegrini. This feature was essential for users to easily
                  find and navigate to different businesses in the city.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  Engagement with Local Businesses:
                </h3>
                <p>
                  I engaged with numerous local business owners to gather
                  materials and information about their businesses to be
                  featured on the website. This involved building relationships
                  and ensuring accurate representation of each business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mb-10">
        <h3 className="text-4xl my-10">Technologies used</h3>
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
            <img src="/imgs/icons/Mongoose.js.png" width={40} alt="Mongoose" />
            <p>Mongoose</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img
              src="/imgs/icons/MaterialUI.png"
              width={40}
              alt="Material UI"
            />
            <p>Material UI</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GuiaPellegrini;
