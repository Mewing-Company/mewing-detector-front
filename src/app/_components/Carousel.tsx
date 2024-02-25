import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import ArrayImages from "@/constants/ArrayImages";

export default function CarouselMewings() {
  return (
    <Carousel className="w-[70%] sm:w-[84%] md:w-[88%] lg:w-[90%] xl:w-[92%] top-0 z-10">
      <CarouselContent className="w-full z-10">
        {ArrayImages.map((image) => (
          <CarouselItem key={image.id} className="w-full z-10">
            <Card className="bg-[rgba(32,33,35,.5)] border-transparent w-full z-10">
              <CardContent className="flex items-center justify-center p-6 h-[200px] w-full z-10">
                <Image src={image.image} alt="GigaChad" height={200} width={200}/>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-[#a855f7] z-10" />
      <CarouselNext className="text-[#a855f7] z-10" />
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
