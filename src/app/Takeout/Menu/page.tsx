import { useCustomContext } from "@/Data/Context/Context";
import MenuMapSandwich from "./Map/Sandwich";
import MenuMapHamburger from "./Map/Hamburger";
import MenuMapSideMenu from "./Map/SideMenu";

export default function Menu() {
  const { tab } = useCustomContext();
  return tab === "SANDWICH" ? (
    <MenuMapSandwich />
  ) : tab === "HAMBURGER" ? (
    <MenuMapHamburger />
  ) : tab === "SIDE MENU" ? (
    <MenuMapSideMenu />
  ) : null;
}
