import { Back } from "../../components/Back/Back";
import { Carousel3D } from "../../components/Carousel3D/Carousel3D";

const GuruiaProject = () => {
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
              Collaborative Project: Therapist-Patient Meeting Platform
            </h1>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                Responsibilities and Achievements:
              </h2>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  Project Development and Management:
                </h3>
                <p>
                  In collaboration with a colleague, we developed an application
                  using Next.js designed to facilitate meetings between
                  therapists and patients through the platform. We were
                  responsible for programming a wide range of functionalities to
                  ensure a seamless user experience.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  Core Functionalities:
                </h3>
                <p>
                  We implemented numerous features, including a video call
                  system, chat for user communication, authentication systems,
                  and calendar integration for patients to schedule
                  consultations. The platform also supports multiple languages
                  and includes a payment system for credit card and PayPal
                  transactions.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  Client Collaboration:
                </h3>
                <p>
                  We held regular meetings with the client to specify and refine
                  the required details. This ensured the final product met all
                  the client's needs and expectations.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  Full Lifecycle Management:
                </h3>
                <p>
                  We managed the entire lifecycle of the web application,
                  utilizing the latest technologies including Next.js 14, Shadcn
                  for a modern design, and Cloudinary as the image database,
                  among other tools.
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
