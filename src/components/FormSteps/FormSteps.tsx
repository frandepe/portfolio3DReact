import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperTrigger,
} from "../ui/stepper";
import { ToastContainer, toast } from "react-toastify";
import LoaderOne from "@/utils/Loading";

const { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY } = import.meta.env;

const supabase = createClient(
  VITE_SUPABASE_URL as string,
  VITE_SUPABASE_ANON_KEY as string
);

const steps = [
  {
    key: "type_of_web",
    question: "¿Qué tipo de web necesitas?",
    options: [
      "Página informativa",
      "Tienda online",
      "Blog",
      "Plataforma de reservas",
      "Red social",
      "Foro",
      "Portfolio",
      "Plataforma educativa",
      "Sitio de membresía",
      "Directorio de empresas",
      "Marketplace",
      "Landing page",
      "Web de noticias",
      "Intranet",
      "Sitio de crowdfunding",
      "Otro",
    ],
    type: "select",
  },
  {
    key: "operation",
    question: "¿Cómo debería funcionar tu web?",
    description:
      "Web estática: Sencilla y rápida. Web dinámica: Con funcionalidades avanzadas.",
    options: ["Web estática", "Web dinámica"],
    type: "select",
  },
  {
    key: "referencia",
    question: "¿Tienes alguna referencia de diseño o estilo que te guste?",
    options: [
      "Sí, tengo ejemplos",
      "No, pero quiero sugerencias",
      "Minimalista",
      "Llamativo",
      "Moderno",
      "Clásico",
      "Elegante",
      "Tecnológico",
    ],
    type: "select",
  },
  {
    key: "sections",
    question: "¿Qué secciones debe tener tu web?",
    options: [
      "Inicio",
      "Sobre nosotros",
      "Servicios / Productos",
      "Blog",
      "Contacto",
      "Testimonios",
      "Preguntas Frecuentes",
      "Otra (Especificar)",
    ],
    type: "checkbox",
  },
  {
    key: "functionalities",
    question: "¿Qué funciones especiales necesita tu web?",
    options: [
      "Formulario de contacto",
      "Chat en vivo",
      "Registro e inicio de sesión de usuarios",
      "Pasarela de pagos (PayPal, Mercado Pago, Stripe)",
      "Integración con redes sociales",
      "Blog con sistema de publicaciones",
      "Sistema de reservas o citas",
      "Multilenguaje",
      "Otra (Especificar)",
    ],
    type: "checkbox",
  },
  {
    key: "budget",
    question: "¿Tienes un presupuesto estimado? (USD)",
    options: [
      "No estoy seguro",
      "Menos de $500",
      "Entre $500 y $1000",
      "Más de $1000",
    ],
    type: "select",
  },
  {
    key: "message",
    question:
      "Cuéntame más sobre tu idea, ¿algún detalle especial que no hayamos cubierto?",
    type: "textarea",
  },
  {
    key: "name",
    question: "Tu nombre:",
    type: "text",
  },
  {
    key: "email",
    question: "Tu email de contacto:",
    type: "text",
  },
  {
    key: "tel",
    question: "Tu número de teléfono:",
    type: "text",
  },
];

type AnswerType = Record<string, string | string[]>;

export default function FormSteps() {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<AnswerType>({});
  const [customTypeForSections, setCustomTypeForSections] =
    useState<string>("");
  const [customTypeForWeb, setCustomTypeForWeb] = useState<string>("");
  const [customReference, setCustomReference] = useState<string>("");
  const [customFuncionality, setCustomFuncionality] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleChange = (value: string) => {
    setAnswers({ ...answers, [steps[step].key]: value });
  };

  const handleCheckboxChange = (key: string, value: string) => {
    const newAnswers = { ...answers };
    const currentValue: string[] = Array.isArray(newAnswers[key])
      ? (newAnswers[key] as string[])
      : [];

    if (currentValue.includes(value)) {
      newAnswers[key] = currentValue.filter((item) => item !== value);
    } else {
      newAnswers[key] = [...currentValue, value];
    }

    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    if (submitted) return;
    setLoading(true);
    // Usamos finalAnswers directamente
    const finalAnswers = { ...answers };

    if (Array.isArray(finalAnswers["sections"])) {
      const otherIndex = finalAnswers["sections"].indexOf("Otra (Especificar)");
      if (otherIndex !== -1 && customTypeForSections) {
        // Creamos una nueva copia del array antes de modificarlo
        finalAnswers["sections"] = [...finalAnswers["sections"]];
        finalAnswers["sections"][otherIndex] = customTypeForSections;
      }
    }

    // Continuamos con el mismo patrón para funcionalidades
    if (Array.isArray(finalAnswers["functionalities"])) {
      const otherIndex =
        finalAnswers["functionalities"].indexOf("Otra (Especificar)");
      if (otherIndex !== -1 && customFuncionality) {
        finalAnswers["functionalities"] = [...finalAnswers["functionalities"]];
        finalAnswers["functionalities"][otherIndex] = customFuncionality;
      }
    }

    if (
      finalAnswers["referencia"] === "Sí, tengo ejemplos" &&
      customReference
    ) {
      finalAnswers["referencia"] = customReference;
    }

    if (finalAnswers["type_of_web"] === "Otro" && customTypeForWeb) {
      finalAnswers["type_of_web"] = customTypeForWeb;
    }

    const { error } = await supabase
      .from("WebClientSteps")
      .insert([finalAnswers]);

    if (!error) {
      toast.success(
        "¡Gracias por tu interés! Recibí tu solicitud y me pondré en contacto contigo a la brevedad para conversar sobre tu proyecto."
      );
      setSubmitted(true); // Deshabilita el botón tras el envío exitoso
    } else {
      toast.error(
        "No se pudo enviar tu solicitud. Verifica los campos e inténtalo otra vez, o escribime a frandepaulo23@gmail.com"
      );
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="w-full md:w-[500px] h-[500px] mx-auto p-6 rounded-xl border-[0.5px] border-gray-500 flex flex-col justify-center items-center">
        <h2 className="text-lg font-bold mb-4 text-center">
          ¡Gracias por tu interés!
        </h2>
        <p className="text-gray-400 text-center">
          Recibí tu solicitud y me pondré en contacto contigo a la brevedad para
          conversar sobre tu proyecto.
        </p>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="w-full md:w-[500px] h-[500px] mx-auto p-6 rounded-xl border-[0.5px] border-gray-500 flex flex-col justify-center items-center">
        <h2 className="text-lg font-bold mb-4 text-center flex items-end gap-1">
          Enviando{" "}
          <div className="mb-1.5">
            <LoaderOne />
          </div>
        </h2>

        <p className="text-gray-400 text-center">
          Por favor, espera un momento.
        </p>
      </div>
    );
  }
  return (
    <motion.div
      className="w-full md:w-[500px] h-[500px] mx-auto p-6 rounded-xl border-[0.5px] border-gray-500 flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ToastContainer position="bottom-center" limit={1} />
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-400 text-sm">
          Paso {step + 1} de {steps.length}
        </span>
      </div>
      <Stepper value={step + 1} onValueChange={setStep} className="mb-4 mt-1">
        {steps.slice(0, steps.length - 1).map((_, index) => (
          <StepperItem key={index} step={index + 1} className="flex-1">
            <StepperTrigger className="w-full flex-col items-start gap-2">
              <StepperIndicator className="h-2 w-full rounded-none bg-border">
                <span className="sr-only">Paso {index + 1}</span>
              </StepperIndicator>
            </StepperTrigger>
          </StepperItem>
        ))}
      </Stepper>

      <h2 className="text-lg font-bold mb-2">{steps[step].question}</h2>
      {steps[step].description && (
        <p className="text-gray-200 mb-4">{steps[step].description}</p>
      )}

      {steps[step].type === "select" && (
        <div className="relative">
          <select
            onChange={(e) => handleChange(e.target.value)}
            className="w-full bg-[#13151a] placeholder:text-slate-400 text-slate-300 border border-slate-300 rounded pl-3 pr-8 py-1.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
            value={answers[steps[step].key] || ""}
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {steps[step]?.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.2"
            stroke="currentColor"
            className="h-5 w-5 ml-1 absolute top-2 right-2.5 text-slate-700"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            />
          </svg>
        </div>
      )}

      {steps[step].type === "checkbox" && (
        <div>
          {steps[step]?.options?.map((option) => (
            // <div key={option} className="flex items-center">
            //   <input
            //     type="checkbox"
            //     value={option}
            //     checked={answers[steps[step].key]?.includes(option)}
            //     onChange={() => handleCheckboxChange(steps[step].key, option)}
            //     className="mr-2"
            //   />
            //   <label>{option}</label>
            // </div>
            <div key={option} className="flex items-center space-x-3 -ml-3">
              <input
                type="checkbox"
                id={option}
                value={option}
                checked={answers[steps[step].key]?.includes(option)}
                onChange={() => handleCheckboxChange(steps[step].key, option)}
                className="hidden"
              />
              <label
                htmlFor={option}
                className="flex items-center space-x-2 cursor-pointer select-none"
              >
                {/* Caja del checkbox personalizada */}
                <div className="w-5 h-5 flex items-center justify-center border-2 border-gray-400 rounded-md transition-all group-hover:border-[var(--tertiary)] bg-white">
                  {/* Ícono check visible solo cuando el checkbox está marcado */}
                  {answers[steps[step].key]?.includes(option) && (
                    <svg
                      className="w-4 h-4 text-[var(--primary)]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  )}
                </div>
                {/* Texto de la opción */}
                <span className="text-gray-300">{option}</span>
              </label>
            </div>
          ))}
        </div>
      )}

      {steps[step].key === "referencia" &&
        answers["referencia"] === "Sí, tengo ejemplos" && (
          <input
            type="text"
            placeholder="Especifica los ejemplos de diseño"
            className="w-full mt-4 bg-transparent placeholder:text-slate-400 text-slate-300  border border-slate-300 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none"
            value={customReference} // Aquí se asegura que el valor se actualice desde el estado correcto
            onChange={(e) => setCustomReference(e.target.value)} // Actualización del estado
          />
        )}

      {steps[step].type === "textarea" && (
        <textarea
          className="w-full h-32 bg-transparent placeholder:text-slate-400 text-slate-300 border border-slate-300 rounded p-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
          placeholder="Comparte cualquier detalle adicional sobre la web"
          value={answers[steps[step].key] || ""}
          onChange={(e) => handleChange(e.target.value)}
        />
      )}

      {steps[step].type === "text" && (
        <input
          type="text"
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-300 border border-slate-300 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
          placeholder={steps[step].question}
          value={answers[steps[step].key] || ""}
          onChange={(e) => handleChange(e.target.value)}
        />
      )}

      {/* Mostrar input si se selecciona "Otro" en la pregunta */}
      {steps[step].key === "type_of_web" &&
        answers["type_of_web"] === "Otro" && (
          <input
            type="text"
            placeholder="Especifica el tipo de web"
            className="w-full mt-4 bg-transparent placeholder:text-slate-400 text-slate-300 border border-slate-300 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none"
            value={customTypeForWeb} // Usamos un estado diferente aquí
            onChange={(e) => setCustomTypeForWeb(e.target.value)} // Cambiamos el manejador de este input
          />
        )}

      {steps[step].key === "sections" &&
        answers["sections"]?.includes("Otra (Especificar)") && (
          <input
            type="text"
            placeholder="Especifica las secciones"
            className="w-full my-4 bg-transparent placeholder:text-slate-400 text-slate-300 border border-slate-300 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none"
            value={customTypeForSections} // Usamos otro estado diferente para este input
            onChange={(e) => setCustomTypeForSections(e.target.value)} // Manejador distinto para el cambio en este input
          />
        )}

      {steps[step].key === "functionalities" &&
        answers["functionalities"]?.includes("Otra (Especificar)") && (
          <input
            type="text"
            placeholder="Especifica las funciones"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-300  border border-slate-300 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none"
            value={customFuncionality}
            onChange={(e) => setCustomFuncionality(e.target.value)}
          />
        )}

      <div className="mt-auto flex justify-between ">
        {step > 0 && (
          <Button variant="variant" title="Atras" onClick={handleBack} />
        )}
        {step < steps.length - 1 ? (
          <Button variant="variant" title="Siguiente" onClick={handleNext} />
        ) : (
          <Button
            variant="default"
            onClick={handleSubmit}
            disabled={loading || submitted} // Se desactiva si está cargando o enviado
            title={loading ? "Enviando..." : submitted ? "Enviado" : "Enviar"}
          />
        )}
      </div>
    </motion.div>
  );
}
