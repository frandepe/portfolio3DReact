import { GooeyText } from "@/components/ui/gooey-text-morphing";

function GooeyTextDemo() {
  return (
    <div className="h-[200px] flex items-center justify-center">
      <GooeyText
        texts={["Creativity", "Flexibility", "Proactivity", ":)"]}
        morphTime={1}
        cooldownTime={0.35}
        className="font-bold"
      />
    </div>
  );
}

export { GooeyTextDemo };
