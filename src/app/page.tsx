import ExamplesSection from "./_components/ExamplesSection";
import HeroSection from "./_components/HeroSection.tsx"

export default function Home() {
  return (
    <main className="w-full h-full bg-inherit overflow-y-scroll bg-dot-white/[0.2]">
      <div className="absolute h-full overflow pointer-events-none inset-0 flex items-center justify-center bg-inherit [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col h-full w-full items-center gap-10">
        <HeroSection />
        {/* <CarouselMewings /> */}
        <ExamplesSection />
      </div>
    </main>
  );
}
