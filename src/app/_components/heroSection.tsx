import { Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function HeroSection() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-5">
      <div className="w-full h-auto flex justify-center items-center gap-2">
        <h1 className="text-[2rem] sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-bold gradient-text text-transparent animate-gradient tracking-wide">
          Mewing Detector
        </h1>
        <span>
          <Sparkles size={45} strokeWidth={1} className="text-[#a855f7]" />
        </span>
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture" className="gradient-text text-transparent animate-gradient text-lg">
          Elegí la Imagen
        </Label>
        <Input
          id="picture"
          type="file"
          accept=".jpg, .png, .HEIC"
          className="bg-[#1d252c] border-none shadow-xl file:text-[#ebf6ff] text-[#ebf6ff]"
        />
      </div>
    </div>
  );
}
