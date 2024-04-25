import { useCustomContext } from "@/Data/Context/Context";
import OrderConfirmationButtons from "./Modules/Buttons";
import OrderConfirmationFormMap from "./Modules/Form/Map";
import OrderConfirmationMenu from "./Modules/Menu/Map";
import OrderConfirmationTotalPrice from "./Modules/Total-Price";
import OrderConfirmationTitle from "./Modules/title";
import { useEffect, useRef } from "react";

export default function OrderConfirmationModal() {
  const { setTakeoutForm } = useCustomContext();
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setTakeoutForm(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  return (
    <div className="fixed inset-0 h-full w-full bg-black bg-opacity-40 z-20 justify-center items-center">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-auto h-full">
        <div
          className="flex flex-col items-start gap-[30px] bg-gray-200 my-12 py-8 rounded-md"
          ref={wrapperRef}
        >
          <div className="flex flex-col items-start gap-[30px] pl-4">
            <OrderConfirmationTitle />
            <OrderConfirmationFormMap />
          </div>
          <OrderConfirmationMenu />
          <div className="flex flex-col items-start gap-[70px] w-full mx-4">
            <OrderConfirmationTotalPrice />
            <OrderConfirmationButtons />
          </div>
        </div>
      </div>
    </div>
  );
}
