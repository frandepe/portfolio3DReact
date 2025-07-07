import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks: React.FC = () => {
  return (
    <div className="absolute left-6 bottom-2/3 z-50 w-11">
      <div className="mb-2  rounded-full p-2">
        <a
          href="https://github.com/frandepe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
      </div>
      <div className=" rounded-full p-2">
        <a
          href="https://www.linkedin.com/in/franco-de-paulo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
