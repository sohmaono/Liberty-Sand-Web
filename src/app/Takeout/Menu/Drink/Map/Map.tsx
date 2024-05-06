import { drinkMainMenuArray } from "@/Data/Array/Drink";
import MainMenuDrinkModule from "../MainMenu/pages";

export default function MainMenuDrinkMap() {
  return (
    <div
      className="flex flex-col items-center gap-10 overflow-y-scroll w-full py-5"
      style={{
        height: "89vh",
      }}
    >
      {drinkMainMenuArray.map((mainMenu, index) => (
        <MainMenuDrinkModule key={index} mainMenu={mainMenu} />
      ))}
    </div>
  );
}
