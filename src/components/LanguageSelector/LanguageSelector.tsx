import { useContext, useState } from "react";
import { I18nContext } from "../../utils/i18nProvider";
import ar from "../../assets/ar.svg";
import us from "../../assets/us.svg";

export const LanguageSelector = () => {
  const context = useContext(I18nContext);
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { value: "es", label: "Español", flag: ar },
    { value: "en", label: "English", flag: us },
  ];

  if (context === null) {
    throw new Error(
      "The I18n context is not initialized. Make sure you have the provider set up correctly."
    );
  }

  const handleLanguageChange = (value: string) => {
    context.changeLanguage(value);
    setIsOpen(false);
  };

  const selectedLanguage = languages.find(
    (lang) => lang.value === context.language
  );

  return (
    <div className="relative inline-block w-52">
      {/* Select button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-#263a7a border border-gray-500 text-white  rounded-md shadow-sm pl-3 pr-4 py-2 text-left  "
      >
        <div className="flex items-center gap-2">
          <img
            src={selectedLanguage?.flag}
            alt="Selected language"
            className="w-6 h-6"
          />
          <span>{selectedLanguage?.label}</span>
        </div>
        <span className="ml-2">▼</span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <ul className="absolute w-full bg-#1d2d61 border border-gray-500 rounded-md shadow-lg mt-1 z-10">
          {languages.map((lang) => (
            <li
              key={lang.value}
              className="flex items-center gap-2 px-3 py-2 text-white hover:bg-#637cce hover:opacity-80 cursor-pointer"
              onClick={() => handleLanguageChange(lang.value)}
            >
              <img src={lang.flag} alt={lang.label} className="w-6 h-6" />
              <span>{lang.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

//https://github.com/manuelsanchezweb/react-i18n/blob/master/src/assets/IconLanguage.tsx
