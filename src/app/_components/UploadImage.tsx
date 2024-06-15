"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button as MovingBorders } from "@/components/ui/moving-borders";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { predict } from "../_actions/actions";
import ResultCard from "./ResultCard";

export default function UploadImage() {
  const [picture, setPicture] = useState<string | null>(null);
  const [percentage, setPercentage] = useState<number | null>(null);

  const handleImage = async (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img: any = new Image();
        img.src = e.target?.result;
        img.onload = () => {
          setPicture(img.src);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadPhoto = async (photo: string) => {
    const data = await predict({ image: photo });
    setPercentage(data);
  };
  return (
    <div className="grid w-[22rem] sm:w-[26rem] md:w-[30rem] lg:w-[30rem] xl:w-[30rem] items-center gap-1 mt-7">
      <Label htmlFor="picture" className="gradient-text text-transparent animate-gradient text-lg">
        Picture
      </Label>
      <MovingBorders className="bg-transparent p-0 overflow-hidden" borderRadius="1rem">
        <Input
          id="picture"
          type="file"
          accept=".jpg, .png"
          className="bg-[rgba(32,33,35,.5)] border-none shadow-xl file:text-[#ebf6ff] text-[#ebf6ff] cursor-pointer"
          onChange={handleImage}
        />
      </MovingBorders>
      <div className="w-full flex flex-col gap-y-5 justify-center items-center">
        {picture ? (
          <Button
            onClick={() => uploadPhoto(picture)}
            isDisabled={percentage !== null}
            className="border-none bg-gradient-to-tr from-violet-500 to-fuchsia-500 text-[#ebf6ff] w-[240px] mt-5"
          >
            Test
          </Button>
        ) : (
          ""
        )}
        {percentage ? <ResultCard percentage={percentage}/> : ""}
      </div>
    </div>
  );
}
