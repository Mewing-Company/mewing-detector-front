import { User, Link } from "@nextui-org/react";
import Team from "@/constants/Team";

export default function Contact() {
  return (
    <div className="w-full h-full flex justify-center items-end absolute gap-10 p-10">
      {Team.map((programmer) => {
        return (
          <User
            name={programmer.name}
            description={
              <Link href={programmer.github} size="md" isExternal>
                GitHub
              </Link>
            }
          />
        );
      })}
    </div>
  );
}
