import { drinkMenuArray } from "@/Data/Array/Drink";
import ModalDrinkItemModule from "./Modules/Item";
import ModalDrinkTitle from "./Modules/Title";

export default function ModalDrink() {
  return (
    <div className="flex flex-col gap-[40px] bg-white rounded-[20px] py-[30px] md:w-[600px] w-[360px] px-[20px]">
      <ModalDrinkTitle />
      <div className="flex flex-col gap-[24px] w-full">
        {drinkMenuArray.map((drinkType, index) => (
          <ModalDrinkItemModule key={index} drinkType={drinkType} />
        ))}
      </div>
    </div>
  );
}
