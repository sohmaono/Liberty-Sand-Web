import ModalDrinkTop from "./Top";
import ModalDrinkButton from "./Button";
import { useCustomContext } from "@/Data/Context/Context";
import { useEffect, useRef } from "react";
import ComponentCloseBtn from "@/app/Components/CloseBtn";

export default function ModalConfirmationDrink() {
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
    selectedTakeout?.drink && (
      <div className="flex flex-col items-end gap-3">
        <ComponentCloseBtn closeFunc={() => setSelectedTakeout(null)} />
        <div
          className="flex flex-col rounded-md bg-white md:w-[433px] w-[360px] items-center gap-6 p-[20px]"
          ref={wrapperRef}
        >
          <ModalDrinkTop drink={selectedTakeout.drink} />
          <ModalDrinkButton drink={selectedTakeout.drink} />
        </div>
      </div>
    )
  );
}
