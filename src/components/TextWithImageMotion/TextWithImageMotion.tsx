export function TextWithImage() {
  return (
    <section className="container mx-auto px-4 md:px-8 py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300 mb-4">
            Experiencia profesional
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 leading-tight">
            Experiencia en el eCommerce líder de cosmética de Latinoamérica
          </h2>

          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            Actualmente me desempeño como Frontend Developer en Natura,
            participando en el desarrollo y mantenimiento de experiencias
            digitales utilizadas por millones de usuarios en distintos países de
            Latinoamérica.
          </p>

          <p className="mt-4 text-slate-400 leading-relaxed">
            Esta experiencia me permite aplicar estándares profesionales de
            desarrollo, rendimiento, accesibilidad y experiencia de usuario en
            cada proyecto.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
              Frontend
            </span>

            <span className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
              eCommerce
            </span>

            <span className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
              UX
            </span>

            <span className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
              Performance
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-slate-500/10 blur-3xl rounded-full" />

          <img
            src="/assets/natura-banner.jpg"
            alt="Oficinas de Natura"
            draggable={false}
            className="relative rounded-3xl border border-slate-700 shadow-2xl object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
}
