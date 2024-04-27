import { drinkMainMenuArray } from "@/Data/Array/Drink";
import MainMenuDrinkModule from "../MainMenu/page";

export default function MainMenuDrinkMap() {
  return (
    <div className="flex flex-col items-center gap-4">
      {drinkMainMenuArray.map((mainMenu, index) => (
        <MainMenuDrinkModule key={index} mainMenu={mainMenu} />
      ))}
    </div>
  );
}
