import { FaMobileAlt, FaSearch } from "react-icons/fa";
import {
  MdBrush,
  MdBuild,
  MdCloud,
  MdExtension,
  MdShoppingCart,
  MdTune,
} from "react-icons/md";

export default function IconsTuWeb() {
  const cualidades = [
    {
      icon: <MdShoppingCart />,
      title: "eCommerce",
      description:
        "Tiendas online atractivas y efectivas para aumentar tus ventas.",
    },
    {
      icon: <MdTune />,
      title: "Sitios autoadministrables",
      description:
        "Gestiona tu sitio de forma fácil y sin depender de terceros.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Diseño responsivo",
      description:
        "Funciona y se ve genial en cualquier dispositivo y pantalla.",
    },
    {
      icon: <MdBuild />,
      title: "Mantenimiento web",
      description: "Mantén tu web siempre actualizada, segura y optimizada.",
    },
    {
      icon: <FaSearch />,
      title: "Optimizado para Buscadores",
      description:
        "Mejoramos tu visibilidad para que seas fácilmente encontrado en Google.",
    },
    {
      icon: <MdBrush />,
      title: "Diseño profesional",
      description: "Una interfaz moderna y cuidada que transmita confianza.",
    },
    {
      icon: <MdExtension />,
      title: "Preparada para crecer",
      description:
        "Tu web podrá incorporar nuevas funcionalidades a medida que tu negocio evolucione.",
    },
    {
      icon: <MdCloud />,
      title: "Hosting y dominio",
      description: "Te asesoro en la elección del dominio y hosting adecuados.",
    },
  ];

  return (
    <section className="mt-40">
      <h2 className="text-4xl text-center mb-6 text-slate-200">
        ¿Qué incluye tu proyecto?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6">
        {cualidades.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 max-w-[400px] w-full mx-auto"
          >
            <div className="text-3xl text-[var(--primary)] mb-2">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold mb-1 text-slate-200">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
