import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/moving-borders";

export default function UploadImage() {
  return (
    <div className="grid w-[22rem] sm:w-[26rem] md:w-[30rem] lg:w-[30rem] xl:w-[30rem] items-center gap-5">
      <Label htmlFor="picture" className="gradient-text text-transparent animate-gradient text-lg">
        Elegí la Imagen
      </Label>
      <Button className="bg-transparent p-0 overflow-hidden" borderRadius="1rem">
        <Input
          id="picture"
          type="file"
          accept=".jpg, .png, .HEIC"
          className="bg-[rgba(32,33,35,.5)] border-none shadow-xl file:text-[#ebf6ff] text-[#ebf6ff] cursor-pointer"
        />
      </Button>
    </div>
  );
}
