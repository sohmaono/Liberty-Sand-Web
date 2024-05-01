import DrinkType from "@/Data/Type/Drink";
import ModalDrinkTop from "./Top";
import ModalDrinkButton from "./Button";
import { useCustomContext } from "@/Data/Context/Context";

export default function ModalConfirmationDrink() {
  const { selectedTakeout } = useCustomContext();
  return (
    selectedTakeout?.drink && (
      <div className="flex flex-col p-[20px] rounded-md bg-white w-[433px] items-center gap-6 my-40">
        <ModalDrinkTop drink={selectedTakeout.drink} />
        <ModalDrinkButton drink={selectedTakeout.drink} />
      </div>
    )
  );
}
