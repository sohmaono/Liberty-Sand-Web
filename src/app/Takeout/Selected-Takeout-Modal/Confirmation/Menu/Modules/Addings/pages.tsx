import { useCustomContext } from "@/Data/Context/Context";
import ModalConfirmationMenuDrinks from "./Drink/pages";
import ModalConfirmationMenuAddings from "./Addings/pages";

export default function ModalConfirmationAddings() {
  const { selectedTakeout } = useCustomContext();
  return (
    <div className="flex flex-col items-start gap-5 w-max">
      {selectedTakeout?.patty && (
        <ModalConfirmationMenuAddings
          title="パティ"
          addings={[selectedTakeout.patty]}
        />
      )}
      {selectedTakeout?.toppings && (
        <ModalConfirmationMenuAddings
          title="トッピング"
          addings={selectedTakeout.toppings}
        />
      )}
      {selectedTakeout?.drink && <ModalConfirmationMenuDrinks />}
      {!selectedTakeout?.toppings &&
        !selectedTakeout?.drink &&
        !selectedTakeout?.patty && (
          <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[color:var(--tokens-card-text)] text-[17px] opacity-70 mx-6">
            追加なし
          </p>
        )}
    </div>
  );
}
