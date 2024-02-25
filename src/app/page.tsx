import CarouselMewings from "./_components/Carousel";
import HeroSection from "./_components/HeroSection";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="w-full h-full bg-inherit bg-dot-white/[0.2]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-inherit [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col h-full w-full items-center justify-center">
        {/* <CarouselMewings /> */}
        <HeroSection />
        <Footer />
      </div>
    </main>
  );
}
