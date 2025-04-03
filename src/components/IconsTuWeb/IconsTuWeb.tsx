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
      title: "Diseño gráfico",
      description: "Branding y diseño para una marca atractiva y profesional.",
    },
    {
      icon: <MdExtension />,
      title: "Tecnología ampliable",
      description:
        "Escalabilidad asegurada. Tu web crecerá junto a tu negocio.",
    },
    {
      icon: <MdCloud />,
      title: "Alojamiento web",
      description:
        "Te ayudo a encontrar el mejor dominio y hosting con SSL al mejor precio.",
    },
  ];

  return (
    <section className="mt-40">
      <h2 className="text-4xl text-center mb-6 text-slate-200">
        Características clave
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
