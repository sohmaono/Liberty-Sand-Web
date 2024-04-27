"use client";
import { useEffect, useRef } from "react";
import ModalTopping from "./Adding/Topping";
import ModalDrink from "./Drink/Drink";
import { useCustomContext } from "@/Data/Context/Context";
import ModalPatty from "./Adding/Patty";
import ModalConfirmation from "./Confirmation/page";
import ModalConfirmationDrink from "./DrinkModal/page";

export default function Modal() {
  const { selectedTakeout, setSelectedTakeout } = useCustomContext();
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
        {selectedTakeout?.menu ? (
          <div className="flex flex-col gap-10 my-10" ref={wrapperRef}>
            {selectedTakeout?.menu?.type === 0 ? <ModalTopping /> : null}
            {selectedTakeout?.menu?.type === 2 ? <ModalPatty /> : null}
            {selectedTakeout?.menu?.type !== 3 ? <ModalDrink /> : null}
            <ModalConfirmation />
          </div>
        ) : (
          selectedTakeout?.drink && (
            <div
              className="flex items-center justify-center h-full"
              ref={wrapperRef}
            >
              <ModalConfirmationDrink />
            </div>
          )
        )}
      </div>
    </div>
  );
}
