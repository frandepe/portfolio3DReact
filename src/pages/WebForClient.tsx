import Button from "@/components/Button/Button";
import { CodeIsYour } from "@/components/CodeIsYour/CodeIsYour";

import { DatabaseMotion } from "@/components/DatabaseMotion/DatabaseMotion";
import { Faq } from "@/components/Faq/Faq";
import IconsTuWeb from "@/components/IconsTuWeb/IconsTuWeb";
import { ContactPathSelector } from "@/components/ContactPathSelector/ContactPathSelector";

import ScrollVelocity from "@/components/ScrollVelocity/ScrollVelocity";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import StarsCanvas from "@/components/StarsBackground/StarBackground";

import { TextWithImage } from "@/components/TextWithImageMotion/TextWithImageMotion";
import AnimatedWordCycle from "@/components/ui/animated-text-cycle";
import { Globe } from "@/components/ui/globe";
import { motion } from "framer-motion";
import { useRef } from "react";

const WebForClient = () => {
  const formularioRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (formularioRef.current) {
      formularioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div
        className="min-h-[400px] md:h-[500px] w-full relative text-slate-200 flex flex-col items-center justify-center"
        onClick={handleScroll}
      >
        <StarsCanvas />
        <h2 className="text-3xl md:text-5xl font-bold">
          Desarrollo{" "}
          <AnimatedWordCycle
            words={["tu web", "tu marca", "tu éxito"]}
            interval={3000}
            className={"text-foreground font-semi-bold"}
          />
        </h2>

        <h5 className="text-base md:text-lg my-4 max-w-[800px] mx-4">
          Desde el diseño hasta la optimización, te ayudo a construir un sitio
          web que impulse tu negocio. Tu empresa ganará visibilidad, mejorarás
          la interacción con tus clientes y maximizarás tu alcance online.
        </h5>

        <Button title="Presupuestar" variant="variant" />
      </div>

      <ScrollVelocity
        texts={["Impacto Conexión", "Crecimiento Innovación"]}
        velocity={20}
        className="custom-scroll-text text-gray-400"
      />
      <div className="my-40">
        <TextWithImage />
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4 xl:container  text-slate-200">
        <SpotlightCard
          className="w-full md:w-[40%] flex flex-col overflow-hidden"
          spotlightColor="rgba(99, 124, 206, 0.5)"
        >
          <div className="p-4">
            <h4 className="text-lg font-bold mb-1">
              Tu web lista para cualquier dispositivo
            </h4>
            <p className=" text-gray-400">
              Hoy la mayoría de las visitas provienen de teléfonos móviles. Por
              eso desarrollo sitios optimizados para celulares, tablets y
              computadoras, garantizando una experiencia fluida que ayuda a
              generar más consultas y oportunidades de negocio.
            </p>
          </div>
          <div className="flex justify-center">
            <motion.img
              src="/imgs/mockup.jpg"
              height={200}
              width={250}
              className="mt-4 rounded-[30px] border-4 border-gray-300 shadow-lg translate-y-4"
              initial={{ y: 30 }}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 150 }}
            />
          </div>
        </SpotlightCard>

        <SpotlightCard
          spotlightColor="rgba(99, 124, 206, 0.5)"
          className="w-full md:w-[60%] overflow-hidden"
        >
          <div className="p-4">
            <div className="p-4">
              <h4 className="text-lg font-bold mb-1">
                Una web preparada para crecer
              </h4>
              <p className="text-gray-400">
                Conectá tu sitio con las herramientas que tu negocio necesita
                hoy y en el futuro. Desde formularios y paneles de
                administración hasta optimización para buscadores, desarrollo
                soluciones pensadas para acompañar el crecimiento de tu marca.
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <DatabaseMotion />
          </div>
        </SpotlightCard>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4 xl:container mt-4 text-slate-200">
        <SpotlightCard
          spotlightColor="rgba(99, 124, 206, 0.5)"
          className="w-full md:w-[60%] h-[400px] md:h-auto"
        >
          <div className="relative flex size-full items-center justify-center overflow-hidden px-8 pb-64 pt-8 md:px-40 md:pb-60">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl md:text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              Máxima conexión
            </span>
            <Globe className="top-20 md:top-28" />
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
          </div>
        </SpotlightCard>

        <SpotlightCard
          spotlightColor="rgba(99, 124, 206, 0.5)"
          className="w-full md:w-[40%]"
        >
          <div className="p-4">
            <h4 className="text-lg font-bold mb-1">Tu web es 100% tuya</h4>
            <p className="text-gray-400">
              Al finalizar el proyecto recibirás acceso completo al código y a
              todos los recursos necesarios para administrarlo. No dependerás de
              mí para realizar cambios, agregar funcionalidades o continuar el
              desarrollo en el futuro.
            </p>
          </div>
          <CodeIsYour />
        </SpotlightCard>
      </div>

      {/* Stack de trabajo */}

      <div className="sm:container">
        <IconsTuWeb />
      </div>

      <div className="flex flex-col items-center my-20">
        <h4 className="text-slate-200 text-4xl text-center mb-10">
          Preguntas frecuentes
        </h4>
        <Faq />
      </div>

      <SpotlightCard
        className="py-4 flex items-center justify-center text-slate-200"
        spotlightColor="rgba(99, 124, 206, 0.5)"
      >
        <div
          className="container flex lg:items-center gap-10 flex-col lg:flex-row"
          ref={formularioRef}
          id="formulario"
        >
          <div>
            <h2 className="text-2xl mb-2">Contame sobre tu proyecto</h2>
            <h4 className="lg:w-[500px] w-[350px]">
              Podés solicitar un presupuesto detallado o dejar tu email para que
              te asesore personalmente. Elegí la opción que mejor se adapte a tu
              situación.
            </h4>
          </div>
          <ContactPathSelector />
        </div>
      </SpotlightCard>
    </div>
  );
};

export default WebForClient;
