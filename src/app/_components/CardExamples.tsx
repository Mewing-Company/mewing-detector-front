import { Card, CardHeader, CardBody, CardFooter, Chip } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import { CheckIcon } from "../../icons/CheckIcon";
import { IoCloseCircle } from "react-icons/io5";

export default function CardExamples(props: { image: StaticImageData; id: number; mewing: boolean; example: string }) {
  return (
    <Card className="py-4 glass">
      <CardHeader className="pb-0 pt-1 px-4 flex-col items-center mb-3">
        <h1 className="font-bold text-xl text-[#a855f7] text-center">{props.example}</h1>
        <h4 className="font-bold text-xl bg-gradient-to-t from-[#ebf6ff] to-[#d0d0d6] bg-clip-text text-transparent text-center">
          Example {props.id}
        </h4>
      </CardHeader>
      <CardBody className="overflow-hidden py-2 h-[150px] w-[270px]">
        <Image
          alt="Card background"
          src={props.image}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="px-3 rounded-[0.8rem]"
        />
      </CardBody>
      <CardFooter className="justify-between ml-1 z-10">
        <Chip
          startContent={props.mewing ? <CheckIcon size={18} /> : <IoCloseCircle size={18} />}
          variant="flat"
          color={props.mewing ? "secondary" : "danger"}
        >
          {props.mewing ? "Mewing" : "No Mewing"}
        </Chip>
      </CardFooter>
    </Card>
  );
}
