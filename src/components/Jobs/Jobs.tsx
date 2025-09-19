import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useContext, useState } from "react";
import "./Jobs.css";
import { I18nContext } from "../../utils/i18nProvider";

const Section = (props: any) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div>{props.children}</div>
        </div>
      </div>
    </section>
  );
};

export const Jobs = () => {
  const context = useContext(I18nContext);
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl">
            {context?.t.translate("portfolio.presentation")}
          </h1>
          <p className="text-gray-500">
            {context?.t.translate("portfolio.welcome")}
          </p>
          <ul className="leading-9">
            <li>🖥️ Frontend</li>
            <li>🛠️ Backend</li>
            <li>🗄️ {context?.t.translate("portfolio.dataBases")}</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>

        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            {context?.t.translate("portfolio.professionalJobs")} 🏢
          </h1>
          <p className="text-gray-500">
            {context?.t.translate("portfolio.jokeSubtitle1")}
          </p>
          <p className="mt-3">
            <b>{context?.t.translate("portfolio.contracts")}</b>
          </p>
          <div className="Jobs__container--ul">
            <ul className="leading-9">
              <li>
                <a href="/jobs/natura">
                  Natura ✅{" "}
                  <span className="text-gray-500">
                    {context?.t.translate("portfolio.actuality")}
                  </span>
                </a>
              </li>
              <li>
                <a href="/jobs/pilsen-digital">Pilsen Digital</a>
              </li>
            </ul>
          </div>
          <p className="mt-3">
            <b>Freelance</b>
          </p>
          <div className="Jobs__container--ul">
            <ul className="leading-9">
              {/* <ul className="leading-9 max-h-52 overflow-x-hidden overflow-y-scroll custom-scrollbar"> */}
              <li>
                <a href="/jobs/ai-agro">IAgro</a>
              </li>
              <li>
                <a href="/jobs/congreso">Congreso Nacional RCP</a>
              </li>
              <li>
                <a href="/jobs/argentina-reanima">Argentina Reanima</a>
              </li>
              <li>
                <a href="/jobs/guruia">Guruia</a>
              </li>
              <li>
                <a href="/jobs/ndcapacitaciones">NDCapacitaciones</a>
              </li>
              <li>
                <a href="/jobs/guia-pellegrini">Guía Pellegrini</a>
              </li>
            </ul>
          </div>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">
            {context?.t.translate("portfolio.practiceJobs")} 📚
          </h1>
          <p className="text-gray-500">
            {context?.t.translate("portfolio.jokeSubtitle2")}
          </p>
          <p className="mt-3">
            <b>{context?.t.translate("portfolio.projects")}</b>
          </p>
          <div className="Jobs__container--ul">
            <ul className="leading-9">
              <li>
                <a href="/practices/mil-opciones">Mil Opciones</a>
              </li>
            </ul>
          </div>
        </Section>
      </div>
    </Scroll>
  );
};
