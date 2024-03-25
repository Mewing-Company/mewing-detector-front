import CardExamples from "./CardExamples";
import ArrayImages from "@/constants/ArrayImages";

export default function ExamplesSection() {
  return (
    <div className="w-full h-auto flex justify-center items-center gap-x-5 flex-wrap p-10 mt-1">
      {ArrayImages.map((example) => {
        return <CardExamples image={example.image} id={example.id} mewing={example.mewing} key={example.id} example={example.example}/>;
      })}
    </div>
  );
}
