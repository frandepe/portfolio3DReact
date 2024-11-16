import ProfileImage from "../components/ProfileImage/ProfileImage";
import Button from "../components/Button/Button";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import { CarouselTech } from "../components/CarouselTech/CarouselTech";

const AboutMe = () => {
  return (
    <main className="bg-#263a7a text-white">
      <div className="flex flex-col items-center md:flex-row md:justify-center h-[100%] md:h-[80vh] ">
        <SocialLinks />
        <ProfileImage />
        <div className="w-[90vw] md:w-auto flex items-center flex-col md:block">
          <h3 className="text-[var(--primary)] font-semibold">Who am i?</h3>
          <div className="sm:w-[500px] border-b pb-6 mb-6">
            <p className="mb-2">
              Frontend specialist, solid knowledge of backend and databases. I
              am motivated to be in constant evolution and apply new
              technologies. I was trained in web development at the NUCBA
              bootcamp and I am constantly learning. Proactive, disciplined,
              with clear purposes and willing to face great responsibilities.
            </p>
            <p>
              At the beginning of 2022 I worked for a company with React Js and
              WordPress. Currently I work for Natura as a Front-end developer. I
              have more than 10 personal projects in my portfolio and I have
              collaborated in group development work in No-Country and Alkemy
              with Git tools and agile methodologies.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <p>
              <span className="text-gray-400">Email</span>{" "}
              frandepaulo23@gmail.com
            </p>
            <p>
              <span className="text-gray-400">Country</span> Argentina
            </p>
            <p>
              <span className="text-gray-400">City</span> La Plata
            </p>
            <p>
              <span className="text-gray-400">Secret Talent</span> Moonwalking
            </p>
          </div>
          <div>
            <Button
              bgColor="var(--primary)"
              download="CV-Dev Franco De Paulo"
              title="CV Download"
              href="./Franco De Paulo - Frontend CV.pdf"
            />
            <Button title="Contact" href="/contact" />
          </div>
        </div>
      </div>
      <CarouselTech />
    </main>
  );
};

export default AboutMe;
