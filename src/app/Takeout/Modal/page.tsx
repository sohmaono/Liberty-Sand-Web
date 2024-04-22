import { useEffect, useRef } from "react";
import ModalTopping from "./Adding/Topping";
import ModalDrink from "./Drink/Drink";
import { useCustomContext } from "@/Data/Context/Context";

export default function Modal() {
  const { setSelectedTakeout } = useCustomContext();
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setSelectedTakeout(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [setSelectedTakeout]);

  return (
    <div className="fixed inset-0 h-full w-full bg-black bg-opacity-40 z-20">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-auto h-full">
        <div className="flex flex-col gap-10 my-10" ref={wrapperRef}>
          <ModalTopping />
          <ModalDrink />
        </div>
      </div>
    </div>
  );
}
