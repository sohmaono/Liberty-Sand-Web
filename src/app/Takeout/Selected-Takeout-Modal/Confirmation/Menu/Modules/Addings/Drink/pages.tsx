import ModalConfirmationDrinkDeleteBtn from "./Delete-Button";
import ModalConfirmationDrinkModule from "./Module";
import ModalConfirmationDrinksTitle from "./Title";

export default function ModalConfirmationMenuDrinks() {
  return (
    <div className="flex flex-col items-start w-full">
      <ModalConfirmationDrinksTitle />
      <div className="flex md:gap-5 gap-2 items-center w-full md:justify-between flex-col md:flex-row">
        <ModalConfirmationDrinkModule />
        <ModalConfirmationDrinkDeleteBtn />
      </div>
    </div>
  );
}
