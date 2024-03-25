import ExamplesSection from "./_components/ExamplesSection";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <main className="w-full h-full bg-inherit bg-dot-white/[0.2]">
      <div className="absolute h-full overflow pointer-events-none inset-0 flex items-center justify-center bg-inherit [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col h-full w-full items-center overflow-y-scroll">
        <Hero />
        <ExamplesSection />
        <Footer />
      </div>
    </main>
  );
}
