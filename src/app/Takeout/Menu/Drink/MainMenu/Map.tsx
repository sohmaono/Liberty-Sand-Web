import MenuDrinkModule from "./Module/page";
import DrinkType from "@/Data/Type/Drink";

export default function MenuDrinkMap(props: { drinks: DrinkType[] }) {
  const { drinks } = props;
  return (
    <div className="flex flex-col gap-5">
      {drinks.map((drink, index) => (
        <MenuDrinkModule key={index} drink={drink} />
      ))}
    </div>
  );
}
