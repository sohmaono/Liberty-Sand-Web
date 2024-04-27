import DrinkType from "@/Data/Type/Drink";
import MenuDrinkModuleButton from "./Button";
import MenuDrinkModuleTop from "./Top";

export default function MenuDrinkModule(props: { drink: DrinkType }) {
  const { drink } = props;
  return (
    <div className="flex flex-col p-[20px] rounded-md bg-white w-[433px] items-center gap-6">
      <MenuDrinkModuleTop drink={drink} />
      <MenuDrinkModuleButton drink={drink} />
    </div>
  );
}
