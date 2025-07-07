import Button from "@/components/Button/Button";
import { CarouselTechFreelance } from "@/components/CarouselTech/CarouselTechFreelance";
import { CodeIsYour } from "@/components/CodeIsYour/CodeIsYour";
import { DatabaseMotion } from "@/components/DatabaseMotion/DatabaseMotion";
import { Faq } from "@/components/Faq/Faq";
import FormSteps from "@/components/FormSteps/FormSteps";
import IconsTuWeb from "@/components/IconsTuWeb/IconsTuWeb";

import ScrollVelocity from "@/components/ScrollVelocity/ScrollVelocity";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import StarsCanvas from "@/components/StarsBackground/StarBackground";
import { TextWithImageMotion } from "@/components/TextWithImageMotion/TextWithImageMotion";
import AnimatedWordCycle from "@/components/ui/animated-text-cycle";
import { Globe } from "@/components/ui/globe";
import { createClient } from "@supabase/supabase-js";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const WebForClient = () => {
  const formularioRef = useRef<HTMLDivElement | null>(null);
  const [filas, setFilas] = useState<number>(0)

  const { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY } = import.meta.env;

  const supabase = createClient(
    VITE_SUPABASE_URL as string,
    VITE_SUPABASE_ANON_KEY as string
  );

  const getListForm =  async () => {
    const { count, error } = await supabase
      .from("WebClientSteps")
      .select("*", { count: "exact", head: true });
    
    if (error) {
      console.error("Error al contar filas:", error.message);
    } else if (typeof count === "number") {
      console.log("Cantidad de filas:", count);
      setFilas(count);
    }
  }

  useEffect(() => {
    getListForm()
  }, [])
  

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
      <div className="flex flex-col md:flex-row justify-center gap-4 xl:container mt-20 md:mt-64 text-slate-200">
        <SpotlightCard
          className="w-full md:w-[40%] flex flex-col overflow-hidden"
          spotlightColor="rgba(99, 124, 206, 0.5)"
        >
          <div className="p-4">
            <h4 className="text-lg font-bold mb-1">
              Responsive y Mobile First
            </h4>
            <p className=" text-gray-400">
              Transformo tu sitio web para que se adapte perfectamente a
              cualquier dispositivo. Con un diseño mobile-first, aseguro que tu
              página ofrezca una experiencia óptima tanto en móviles como en
              computadoras, priorizando la velocidad y la usabilidad en todos
              los tamaños de pantalla.
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
                Transforma Tu Proyecto Digital
              </h4>
              <p className="text-gray-400">
                Conecta tu web a un CMS, optimízala para SEO, mejora la
                experiencia de usuario y hazla más segura. Te ofrezco soluciones
                personalizadas que llevarán tu presencia online al siguiente
                nivel.
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
            <h4 className="text-lg font-bold mb-1">El Código Es Tuyo</h4>
            <p className="text-gray-400">
              Una vez entregado tendrás total libertad para personalizarlo y
              adaptarlo a tus necesidades. Siéntete libre de hacer cualquier
              modificación y mejora que consideres necesaria.
            </p>
          </div>
          <CodeIsYour />
        </SpotlightCard>
      </div>

      {/* Stack de trabajo */}
      <div className="mt-60">
        <h4 className="text-slate-200 text-4xl text-center mb-10">
          Mi Stack de trabajo
        </h4>
        <CarouselTechFreelance />
      </div>
      <div className="sm:container">
        <IconsTuWeb />
      </div>
      <TextWithImageMotion />

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
            <h2 className="text-2xl mb-2">¿Comenzamos?</h2>
            <h4 className="lg:w-[500px] w-[350px]">
              Cuéntame sobre tu web ideal. Completa el formulario con los
              detalles clave para que pueda entender tus necesidades y brindarte
              un presupuesto acorde a tu proyecto.
            </h4>
          <p className="mt-4 text-sm text-muted-foreground flex items-center gap-2">
            <span className="w-7 h-7 flex items-center justify-center bg-[var(--primary)] text-white font-semibold rounded-full shadow-sm text-base border border-black]">
              {filas}
            </span>
            clientes confiaron para presupuestar su web.
          </p>
          </div>
          <FormSteps />
        </div>
      </SpotlightCard>

      <div className="flex flex-col items-center my-20">
        <h4 className="text-slate-200 text-4xl text-center mb-10">
          Preguntas frecuentes
        </h4>
        <Faq />
      </div>
      {/* <CountUp
        from={0}
        to={100}
        separator=","
        direction="up"
        duration={1}
        className="count-up-text"
      /> */}
      {/* <ShuffleCards /> */}
      {/* <CircularText
        text="REACT*BITS*COMPONENTS*"
        onHover="speedUp"
        spinDuration={20}
        className="custom-class"
      /> */}
    </div>
  );
};

export default WebForClient;
