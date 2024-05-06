import { useCustomContext } from "@/Data/Context/Context";
import Header from "./Header/pages";
import Menu from "./Menu/pages";
import Cart from "./Cart/pages";
import Modal from "./Selected-Takeout-Modal/pages";
import SideBar from "./SideBar/pages";
import OrderConfirmationModal from "./Order-Confirmation-Modal/pages";

export default function Takeout() {
  const { tab, selectedTakeout, openSideBar, takeoutForm } = useCustomContext();
  return (
    <div className="relative w-full h-full">
      <div className="flex items-center flex-col w-full h-full">
        <Header />
        {tab === "CART" ? <Cart /> : <Menu />}
      </div>
      {selectedTakeout && <Modal />}
      {takeoutForm && <OrderConfirmationModal />}
      {openSideBar && <SideBar />}
    </div>
  );
}
