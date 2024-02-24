import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import gigachad from "../../../public/gigachad2.jpg";

export default function CarouselMewings() {
  return (
    <Carousel className="w-[70%] sm:w-[84%] md:w-[88%] lg:w-[90%] xl:w-[92%] absolute top-0">
      <CarouselContent className="w-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="w-full">
            <Card className="bg-[rgba(32,33,35,.5)] border-transparent w-full">
              <CardContent className="flex items-center justify-center p-6 h-[200px] w-full">
                <Image src={gigachad} alt="GigaChad" height={200} width={200}/>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-[#a855f7]" />
      <CarouselNext className="text-[#a855f7]" />
    </Carousel>
  );
}

{
  /* <CarouselItem key={index}>
  <Card className="bg-[rgba(32,33,35,.5)] border-transparent">
    <CardContent className="flex items-center justify-center p-6 h-[200px]">
      <span className="text-4xl font-semibold">{index + 1}</span>
    </CardContent>
  </Card>
</CarouselItem>; */
}
