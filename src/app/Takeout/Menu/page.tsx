import { useCustomContext } from "@/Data/Context/Context";
import MainMenuSandwich from "./MainMenu/Sandwich";
import MainMenuHamburger from "./MainMenu/Hamburger";
import MainMenuSideMenu from "./MainMenu/SideMenu";

export default function Menu() {
  const { tab } = useCustomContext();
  return tab === "SANDWICH" ? (
    <MainMenuSandwich />
  ) : tab === "HAMBURGER" ? (
    <MainMenuHamburger />
  ) : tab === "SIDE MENU" ? (
    <MainMenuSideMenu />
  ) : null; // <MenuMapSideMenu />
}
