import { Sparkles } from "lucide-react";
import UploadImage from "./UploadImage";
import { IoSparklesSharp } from "react-icons/io5";

export default function Hero() {
  return (
    <div className="w-full h-auto flex justify-center items-center flex-col gap-2 relative z-10 mt-[4rem]">
      <div className="w-full flex justify-center items-center xl:gap-2 sm:gap-1 ">
        <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold gradient-text text-transparent animate-gradient tracking-wide p-2 text-center">
          Mewing Detector
        </h1>
        <span className="text-4xl">
          <IoSparklesSharp color="#a855f7" className="w-[30px] h-[30px] sm:h-[30px] sm:w-[30px] md:h-[40px] md:w-[40px] lg:h-[40px] lg:w-[40px] xl:w-[45px] xl:h-[45px]"/>
          {/* <Sparkles
            strokeWidth={1}
            className="text-[#a855f7] fill-[#a855f7] sm:h-[30px] sm:w-[30px] md:h-[40px] md:w-[40px] lg:h-[40px] lg:w-[40px] xl:w-[45px] xl:h-[45px]"
          /> */}
          {/* 🤫🧏🏻‍♂️ */}
        </span>
      </div>

      <div className="w-[80%] sm:w-full md:w-full lg:w-full xl:w-full h-auto flex justify-center items-center">
        <p className="text-[#ebf6ff] font-light text-lg text-center">Test your mewing right now to see if you are a Gigachad.</p>
      </div>

      <UploadImage />
    </div>
  );
}
//#71717A
