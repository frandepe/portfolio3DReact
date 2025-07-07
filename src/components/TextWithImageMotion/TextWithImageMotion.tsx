import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function TextWithImageMotion() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-2xl md:text-4xl font-semibold text-slate-200 dark:text-white mx-4">
              Experiencia en el eCommerce líder de cosmética en Latinoamérica
            </h1>
          </>
        }
      >
        <img
          src={`/assets/natura-banner.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
