export function TextWithImage() {
  return (
    <section className="w-full overflow-hidden px-4 py-12 sm:px-6 md:py-16 lg:py-24">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="text-center lg:text-left">
          <span className="mb-4 inline-flex max-w-full items-center rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 sm:text-sm">
            Experiencia profesional
          </span>

          <h2 className="text-balance text-2xl font-bold leading-tight text-slate-100 sm:text-3xl md:text-4xl lg:text-5xl">
            Experiencia en el eCommerce líder de cosmética de Latinoamérica
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0">
            Actualmente me desempeño como Frontend Developer en Natura,
            participando en el desarrollo y mantenimiento de experiencias
            digitales utilizadas por millones de usuarios en distintos países de
            Latinoamérica.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base lg:mx-0">
            Esta experiencia me permite aplicar estándares profesionales de
            desarrollo, rendimiento, accesibilidad y experiencia de usuario en
            cada proyecto.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
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

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute inset-0 bg-slate-500/10 blur-3xl rounded-full" />

          <img
            src="/assets/natura-banner.jpg"
            alt="Oficinas de Natura"
            draggable={false}
            className="relative aspect-[4/3] w-full rounded-2xl border border-slate-700 object-cover shadow-2xl sm:aspect-video sm:rounded-3xl lg:aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
}
