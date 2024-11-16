import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { BackgroundMouse } from "../components/BackgroundMouse/BackgroundMouse";

const Contact: React.FC = () => {
  return (
    <BackgroundMouse>
      <div>
        <main className="flex gap-6 flex-col lg:flex-row w-[90vw] sm:w-auto">
          <div className="lg:w-[600px] w-[90vw] flex flex-col justify-between gap-10 lg:gap-0">
            <div>
              <h4 className="text-4xl mb-4">Get in touch</h4>
              <p>
                If you wish to contact me for job opportunities, collaborations,
                or any questions, I will be pleased to hear from you. You can
                write to me directly through the contact form or through the
                alternatives you will find in this section.
              </p>
            </div>

            <div className="flex gap-10 flex-wrap">
              {/* Ubication */}
              <div className="flex gap-4">
                <div className="text-white w-11 h-11 bg-[var(--primary)] flex justify-center items-center rounded-md p-1">
                  <MdLocationOn size={30} />
                </div>
                <div>
                  <p className="font-semibold text-gray-500">Ubication</p>
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
