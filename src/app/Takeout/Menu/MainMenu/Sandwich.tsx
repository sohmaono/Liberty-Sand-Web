import sandwichMainMenuArray from "@/Data/Array/Sandwich";
import MainMenuModule from "./Module/pages";

export default function MainMenuSandwich() {
  return (
    <div className="flex flex-col items-center gap-10">
      {sandwichMainMenuArray.map((mainMenu, index) => (
        <MainMenuModule key={index} mainMenu={mainMenu} />
      ))}
    </div>
  );
}
