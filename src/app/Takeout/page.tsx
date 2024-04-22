import { useCustomContext } from "@/Data/Context/Context";
import Header from "./Header/page";
import Menu from "./Menu/page";
import Cart from "./Cart/page";
import Modal from "./Modal/page";

export default function Takeout() {
  const { tab, selectedTakeout } = useCustomContext();
  return (
    <div className="relative w-full h-full">
      <div className="flex items-center flex-col">
        <div className="z-10">
          <Header />
        </div>
        <div className="my-48">{tab === "CART" ? <Cart /> : <Menu />}</div>
      </div>
      {selectedTakeout ? <Modal /> : null}
    </div>
  );
}
