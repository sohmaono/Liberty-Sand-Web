import sandwichMainMenuArray from "@/Data/Array/Sandwich";
import MainMenuModule from "./Module/pages";

export default function MainMenuSandwich() {
  return (
    <div
      className="flex flex-col items-center gap-10 overflow-y-scroll w-full py-5"
      style={{
        height: "89vh",
      }}
    >
      {sandwichMainMenuArray.map((mainMenu, index) => (
        <MainMenuModule key={index} mainMenu={mainMenu} />
      ))}
    </div>
  );
}
