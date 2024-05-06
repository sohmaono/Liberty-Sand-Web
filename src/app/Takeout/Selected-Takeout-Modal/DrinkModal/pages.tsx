import ModalDrinkTop from "./Top";
import ModalDrinkButton from "./Button";
import { useCustomContext } from "@/Data/Context/Context";
import { useEffect, useRef } from "react";

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
      <div
        className="flex flex-col p-[20px] rounded-md bg-white md:w-[433px] w-[360px] items-center gap-6"
        ref={wrapperRef}
      >
        <ModalDrinkTop drink={selectedTakeout.drink} />
        <ModalDrinkButton drink={selectedTakeout.drink} />
      </div>
    )
  );
}
