import Team from "@/constants/Team";
import Dev from "./Dev";

export default function Footer() {
  return (
    <div className="w-full h-full flex justify-center items-center gap-10 p-10">
      {Team.map((dev) => {
        return (
          <Dev
            name={dev.name}
            description={dev.profession}
            image={dev.image}
            linkedin={dev.linkedin}
            instagram={dev.instagram}
            github={dev.github}
            twitter={dev.twitter}
            key={dev.name}
          />
        );
      })}
    </div>
  );
}
