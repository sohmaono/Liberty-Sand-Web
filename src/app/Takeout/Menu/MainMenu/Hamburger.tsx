import hamburgerMainMenuArray from "@/Data/Array/Hamburger";
import MainMenuModule from "./Module/pages";

export default function MainMenuHamburger() {
  return (
    <div
      className="flex flex-col items-center gap-10 overflow-y-scroll w-full py-5"
      style={{
        height: "89vh",
      }}
    >
      {hamburgerMainMenuArray.map((mainMenu, index) => (
        <MainMenuModule key={index} mainMenu={mainMenu} />
      ))}
    </div>
  );
}
