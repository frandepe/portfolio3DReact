import React, { useContext } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { BackgroundMouse } from "../components/BackgroundMouse/BackgroundMouse";
import { I18nContext } from "../utils/i18nProvider";

const Contact: React.FC = () => {
  const context = useContext(I18nContext);
  return (
    <BackgroundMouse>
      <div className="mt-20 mb-4 md:mt-0 md:mb-0">
        <main className="flex gap-6 flex-col lg:flex-row w-[90vw] sm:w-auto">
          <div className="lg:w-[600px] w-[90vw] flex flex-col justify-between gap-10 lg:gap-0">
            <div>
              <h4 className="text-4xl mb-4">
                {context?.t.translate("contact.title")}
              </h4>
              <p>{context?.t.translate("contact.description")}</p>
            </div>

            <div className="flex gap-10 flex-wrap">
              {/* Ubication */}
              <div className="flex gap-4">
                <div className="text-white w-11 h-11 bg-[var(--primary)] flex justify-center items-center rounded-md p-1">
                  <MdLocationOn size={30} />
                </div>
                <div>
                  <p className="font-semibold text-gray-500">
                    {context?.t.translate("contact.ubication")}
                  </p>
                  <p>La Plata, Argentina</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="text-white w-11 h-11 bg-[var(--primary)] flex justify-center items-center rounded-md p-1">
                  <MdEmail size={30} />
                </div>
                <div>
                  <p className="font-semibold text-gray-500">Email</p>
                  <p>frandepaulo23@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {/* GitHub */}
              <div className="mb-2  rounded-full p-2 w-8 h-8">
                <a
                  href="https://github.com/frandepe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} />
                </a>
              </div>

              {/* LinkedIn */}
              <div className="rounded-full p-2 w-8 h-8">
                <a
                  href="https://www.linkedin.com/in/franco-de-paulo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} />
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </main>
      </div>
    </BackgroundMouse>
  );
};

export default Contact;
