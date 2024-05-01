import DrinkMainMenu from "@/Data/Type/DrinkMainMenu";
import MainMenuDrinkTitle from "./Title";
import MenuDrinkMap from "./Map";

export default function MainMenuDrinkModule(props: {
  mainMenu: DrinkMainMenu;
}) {
  const { mainMenu } = props;
  return (
    <div className="flex flex-col items-center gap-2">
      <MainMenuDrinkTitle mainMenu={mainMenu} />
      <MenuDrinkMap drinks={mainMenu.drinks} />
    </div>
  );
}
