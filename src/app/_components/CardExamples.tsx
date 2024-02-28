import { Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";

export default function CardExamples(props: { image: StaticImageData; id: number; mewing: boolean; example: string }) {
  return (
    <Card className="py-4 glass">
      <CardHeader className="pb-0 pt-1 px-4 flex-col items-center mb-3">
        <h1 className="font-bold text-xl text-[#a855f7] text-center">{props.example}</h1>
        <h4 className="font-bold text-xl bg-gradient-to-t from-[#ebf6ff] to-[#d0d0d6] bg-clip-text text-transparent text-center">Example {props.id}</h4>
      </CardHeader>
      <CardBody className="overflow-hidden py-2 h-[150px] w-[270px]">
        <Image alt="Card background" src={props.image} fill sizes="100vw" style={{ objectFit: "cover" }} className="px-3 rounded-xl" />
      </CardBody>
      <CardFooter className="justify-between shadow-small ml-1 z-10">
        <p className={`text-sm ${props.mewing ? 'text-[#a855f7]' : 'text-red-500'}`}>{props.mewing ? "Mewing" : "No Mewing"}</p>
      </CardFooter>
    </Card>
  );
}
