import hamburgerMainMenuArray from "@/Data/Array/Hamburger";
import MainMenuModule from "./Module/page";

export default function MainMenuHamburger() {
  return (
    <div className="flex flex-col items-center gap-5">
      {hamburgerMainMenuArray.map((mainMenu, index) => (
        <MainMenuModule key={index} mainMenu={mainMenu} />
      ))}
    </div>
  );
}
