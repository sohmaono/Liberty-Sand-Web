import ModalConfirmationDrinkDeleteBtn from "./Delete-Button";
import ModalConfirmationDrinkModule from "./Module";
import ModalConfirmationDrinksTitle from "./Title";

export default function ModalConfirmationMenuDrinks() {
  return (
    <div className="flex flex-col items-start w-full">
      <ModalConfirmationDrinksTitle />
      <div className="flex gap-5 items-center w-full justify-between">
        <ModalConfirmationDrinkModule />
        <ModalConfirmationDrinkDeleteBtn />
      </div>
    </div>
  );
}
