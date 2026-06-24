import { FaqAccordion } from "@/components/ui/faq-chat-accordion";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
  icon?: string;
  iconPosition?: "left" | "right"; // Hacer que sea opcional
};

const defaultData: FAQItem[] = [
  {
    id: 1,
    question: "¿En qué zonas ofrecés tus servicios?",
    answer:
      "Trabajo de forma remota con clientes de cualquier lugar. Podemos coordinar todo el proyecto online, desde la primera consulta hasta la entrega final.",
  },
  {
    id: 2,
    question: "¿Hacés modificaciones en sitios web existentes?",
    answer:
      "Sí. Puedo ayudarte a mejorar una web ya publicada, corregir errores, actualizar el diseño, sumar funcionalidades u optimizar su rendimiento.",
    iconPosition: "left",
  },
  {
    id: 3,
    question: "¿Cuánto tiempo tarda en estar lista mi página web?",
    answer:
      "Depende del alcance del proyecto. Una web simple puede estar lista en pocas semanas, mientras que un sitio con más secciones o funcionalidades puede requerir más tiempo. Antes de empezar, te indico un plazo estimado claro.",
    iconPosition: "right",
  },
  {
    id: 4,
    question: "¿Cuánto cuesta realizar una página web?",
    answer:
      "El precio depende del tipo de sitio, cantidad de secciones, diseño y funcionalidades necesarias. Por eso trabajo con presupuestos personalizados según cada proyecto.",
  },
  {
    id: 5,
    question: "¿Voy a poder administrar mi sitio web?",
    answer:
      "Sí. Si el proyecto lo requiere, puedo implementar un panel de administración para que puedas actualizar contenido, imágenes o información sin conocimientos técnicos.",
    iconPosition: "left",
  },
  {
    id: 6,
    question: "¿La web queda a mi nombre?",
    answer:
      "Sí. El dominio, hosting, accesos y código pueden quedar bajo tu propiedad. Mi objetivo es que tengas control real sobre tu sitio y no dependas de mí para todo.",
  },
];

function Faq() {
  return (
    <FaqAccordion
      data={defaultData}
      className="max-w-[700px]"
      questionClassName="bg-secondary hover:bg-secondary/80 text-slate-200"
      answerClassName="bg-secondary text-secondary-foreground text-gray-400"
    />
  );
}

export { Faq };
