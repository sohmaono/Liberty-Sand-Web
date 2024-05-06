import MainMenuType from "@/Data/Type/MainMenu";
import MenuMap from "./Menu/Map";
import MainMenuTitle from "./Title";

export default function MainMenuModule(props: { mainMenu: MainMenuType }) {
  const { mainMenu } = props;
  return (
    <div className="flex flex-col items-center space-y-[-10px] mx-10">
      {(mainMenu.title || mainMenu.subtitle) && (
        <MainMenuTitle mainMenu={mainMenu} />
      )}
      <MenuMap menuArray={mainMenu.menus} />
    </div>
  );
}
