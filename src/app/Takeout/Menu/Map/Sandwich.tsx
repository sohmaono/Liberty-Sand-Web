import sandwichMenuArray from "@/Data/Array/Sandwich";
import MenuModule from "../Module/page";

export default function MenuMapSandwich() {
  return (
    <div className="flex flex-col items-start gap-10">
      {sandwichMenuArray.map((menuType, index) => (
        <MenuModule key={index} menuType={menuType} />
      ))}
    </div>
  );
}
