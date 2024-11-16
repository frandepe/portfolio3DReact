import { Back } from "../../components/Back/Back";
import { Carousel3D } from "../../components/Carousel3D/Carousel3D";

const NaturaJob = () => {
  return (
    <main className="w-full flex justify-center items-center flex-col mt-10 text-white">
      <div className="w-[90vw]">
        <div className="flex gap-2 items-end flex-wrap">
          <Back />
          <img src="/assets/natura/naturaLogo.png" className="w-24" />
          <h2 className="text-7xl">Natura</h2>
          <h4 className="text-gray-500 text-4xl">actuality</h4>
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
              Web Content Developer at Natura
            </h1>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                Responsibilities and Achievements:
              </h2>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  Content Programming:
                </h3>
                <p>
                  I was responsible for programming content for Natura's
                  websites across all Spanish-speaking countries, including
                  Argentina, Chile, Peru, Colombia, and Mexico. I implemented
                  sales and online marketing team ideas, ensuring each project
                  met the requirements and standards set by the design team.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  Collaboration and Communication:
                </h3>
                <p>
                  I participated in weekly meetings with the programming team to
                  discuss and resolve important issues, problems, and relevant
                  events. I collaborated with different teams, including design,
                  sales, and marketing, to ensure smooth and efficient
                  integration of content.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">CRM Development:</h3>
                <p>
                  I developed email campaigns for customer relationship
                  management (CRM), using HTML and CSS to create attractive and
                  functional designs.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  Training and Support:
                </h3>
                <p>
                  I trained new employees in Drupal and Salesforce technologies,
                  providing them with the knowledge and skills necessary for
                  success in the company. I was responsible for technical
                  support shifts, handling any technical issues that arose on
                  Natura's websites in various countries.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Skills Acquired:</h2>
              <ul className="list-disc list-inside">
                <li>
                  Mastery of HTML, CSS, and JavaScript for developing emails and
                  web content.
                </li>
                <li>
                  Experience in using Drupal and Salesforce for content
                  management and CRM.
                </li>
                <li>
                  Communication and teamwork skills, effectively collaborating
                  with multiple departments.
                </li>
                <li>
                  Ability to handle high-pressure situations and resolve
                  technical issues efficiently.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-10">
        <h3 className="text-4xl my-10">Technologies used</h3>
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
