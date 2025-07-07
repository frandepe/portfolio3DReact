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
    answer:
      "Brindo servicios de desarrollo web para clientes de cualquier parte del mundo. No importa dónde te encuentres, puedo ayudarte a crear una página web profesional y adaptada a tus necesidades.",
    // icon: "❤️",
    // iconPosition: "right", // Asegúrate de que esto sea uno de los valores posibles
    id: 1,
    question: "¿En qué zonas ofreces tus servicios?",
  },
  {
    answer:
      "Sí, puedo realizar ajustes y mejoras en páginas web ya creadas. Ya sea que necesites actualizar el diseño, agregar nuevas funciones o mejorar la experiencia de usuario, puedo ayudarte a optimizar tu sitio.",
    iconPosition: "left", // Agregado el valor de iconPosition
    id: 2,
    question: "¿Hacés modificaciones en sitios web existentes?",
  },
  {
    answer:
      "El tiempo de desarrollo varía según la complejidad del proyecto, pero en la mayoría de los casos, tu web puede estar lista en un plazo de hasta 30 días desde la confirmación del trabajo y la entrega de toda la información necesaria.",
    iconPosition: "right", // Agregado el valor de iconPosition
    id: 3,
    question: "¿Cuánto tiempo tarda en estar lista mi página web?",
  },
  {
    answer:
      "Cada proyecto de diseño web es único. El tiempo de desarrollo varía según las necesidades específicas de cada cliente, lo que influye directamente en el costo final. El precio dependerá de factores como la complejidad del diseño, funcionalidades requeridas, sistema de gestión de contenidos, y otros elementos específicos que necesites para tu negocio online.",
    // icon: "⭐",
    // iconPosition: "left", // Correctamente definido
    id: 4,
    question: "¿Cuánto cuesta realizar una página web?",
  },
  {
    answer:
      "A diferencia de las soluciones 'de plantilla' como WordPress, trabajo con tecnologías modernas de desarrollo web que ofrecen mayor rendimiento, seguridad y flexibilidad. Mi stack tecnológico personalizado permite crear sitios web más rápidos, más seguros y completamente adaptados a tus necesidades específicas, sin las limitaciones y vulnerabilidades comunes de los CMS tradicionales. Es como comparar un traje hecho a medida con uno de tienda: ambos te visten, pero solo uno se ajusta perfectamente a ti.",
    icon: "🚀",
    iconPosition: "left",
    id: 5,
    question: "¿Utilizas WordPress para desarrollar tus sitios web?",
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
