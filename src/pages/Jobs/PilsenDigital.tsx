import { Back } from "../../components/Back/Back";
import { Carousel3D } from "../../components/Carousel3D/Carousel3D";

const PilsenDigital = () => {
  return (
    <main className="w-full flex justify-center items-center flex-col mt-10 text-white">
      <div className="w-[90vw]">
        <div className="flex gap-2 items-end flex-wrap">
          <Back />
          <h2 className="text-3xl md:text-6xl">Pilsen Digital</h2>
          <h4 className="text-gray-500 text-3xl md:text-4xl">
            (March 2022 - Aug 2022)
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
              Frontend Developer at Pilsen Digital
            </h1>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                Responsibilities and Achievements:
              </h2>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  Client Communication and Implementation:
                </h3>
                <p>
                  I worked for a company based in Córdoba, Argentina, called
                  Pilsen Digital. I was responsible for the frontend development
                  using React. My main task was to implement client ideas
                  communicated by my manager. We had weekly meetings where my
                  manager conveyed the project requirements, and I also
                  maintained communication with the backend team.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  Metal Factory Web Application:
                </h3>
                <p>
                  The web application was for a metal factory and required a
                  dashboard for employees to track their activities. The most
                  important feature was a drag-and-drop system for employees to
                  manage their workflow. This system allowed them to visualize
                  and organize their processes efficiently.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  WordPress Modifications:
                </h3>
                <p>
                  Besides the main project, I also worked on modifying an
                  existing WordPress site, ensuring it met the client's needs
                  and enhanced user experience.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Key Features and Functionalities:
              </h2>
              <ul className="list-disc list-inside">
                <li>React for frontend development.</li>
                <li>
                  Weekly meetings to understand and implement client
                  requirements.
                </li>
                <li>
                  Collaboration with the backend team for seamless integration.
                </li>
                <li>
                  Development of a drag-and-drop system for employee activity
                  management.
                </li>
                <li>Modifications to an existing WordPress site.</li>
              </ul>
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
