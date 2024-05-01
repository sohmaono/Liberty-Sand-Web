import sideMenuMainMenuArray from "@/Data/Array/SideMenu";
import MainMenuModule from "./Module/pages";

export default function MainMenuSideMenu() {
  return (
    <div className="flex flex-col items-center gap-5">
      {sideMenuMainMenuArray.map((mainMenu, index) => (
        <MainMenuModule key={index} mainMenu={mainMenu} />
      ))}
    </div>
  );
}
