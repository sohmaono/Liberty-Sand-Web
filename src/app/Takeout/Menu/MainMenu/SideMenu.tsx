import sideMenuMainMenuArray from "@/Data/Array/SideMenu";
import MainMenuModule from "./Module/pages";

export default function MainMenuSideMenu() {
  return (
    <div
      className="flex flex-col items-center gap-10 overflow-y-scroll w-full py-5"
      style={{
        height: "89vh",
      }}
    >
      {sideMenuMainMenuArray.map((mainMenu, index) => (
        <MainMenuModule key={index} mainMenu={mainMenu} />
      ))}
    </div>
  );
}
