import { Sparkles } from "lucide-react";
import UploadImage from "./UploadImage";

export default function HeroSection() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-5 relative z-10">
      <div className="w-full h-auto flex justify-center items-center gap-2">
        <h1 className="text-[2rem] sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-bold gradient-text text-transparent animate-gradient tracking-wide">
          Mewing Detector
        </h1>
        <span className="text-4xl">
          <Sparkles size={45} strokeWidth={1} className="text-[#a855f7] fill-[#a855f7]" />
          {/* 🤫🧏🏻‍♂️ */}
        </span>
      </div>
      <UploadImage />
    </div>
  );
}
