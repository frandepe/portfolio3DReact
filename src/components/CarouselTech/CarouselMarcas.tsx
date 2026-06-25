import "./CarouselMarcas.css";

export const CarouselMarcas = () => {
  const data = [
    {
      icon: "/assets/argreanima/logoargreanima.png",
      brand: "Argreanima",
      width: 120,
    },
    { icon: "/assets/congreso/logoCongreso.png", brand: "Congreso" },
    {
      icon: "/assets/finanflix/finanflixlogo.png",
      brand: "Finanflix",
      width: 120,
    },
    { icon: "/assets/guruia/guruiaLogo.png", brand: "Guruia" },
    { icon: "/assets/ndcapacitaciones/logo4.png", brand: "ND Capacitaciones" },
    { icon: "/assets/agro/iagrologo.png", brand: "IAgro" },
    { icon: "/assets/pilsen/pilsenlogo.png", brand: "Pilsen" },
    { icon: "/assets/natura/avonlogo.png", brand: "Avon" },
    {
      icon: "/assets/insideuco/insideucologo.png",
      brand: "Insideuco",
    },
  ];

  return (
    <div className="brands-carousel" aria-label="Marcas">
      <h2 className="text-center text-gray-400 text-xl md:text-2xl font-bold mb-10">
        La confianza de grandes marcas, aplicada a cada proyecto.
      </h2>
      <div className="brands-carousel__track">
        {[...data, ...data].map((brand, index) => (
          <div
            className="brands-carousel__item"
            key={`${brand.brand}-${index}`}
            aria-hidden={index >= data.length}
          >
            <img
              src={brand.icon}
              alt={brand.brand}
              width={brand.width}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
