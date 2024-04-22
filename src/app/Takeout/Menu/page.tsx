import { useCustomContext } from "@/Data/Context/Context";
import MenuMapSandwich from "./Map/Sandwich";
import MenuMapHamburger from "./Map/Hamburger";

export default function Menu() {
  const { tab } = useCustomContext();
  return tab === "SANDWICH" ? (
    <MenuMapSandwich />
  ) : tab === "HAMBURGER" ? (
    <MenuMapHamburger />
  ) : null;
}
