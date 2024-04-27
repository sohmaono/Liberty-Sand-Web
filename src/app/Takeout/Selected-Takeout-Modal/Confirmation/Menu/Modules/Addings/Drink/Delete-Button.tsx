import { useCustomContext } from "@/Data/Context/Context";

export default function ModalConfirmationDrinkDeleteBtn() {
  const { setSelectedTakeout } = useCustomContext();
  const handleDeleteDrink = () => {
    setSelectedTakeout((prev) => ({ ...prev!, drink: null }));
  };
  return (
    <button
      className="flex h-6 w-14 bg-primary items-center justify-center rounded-full"
      onClick={handleDeleteDrink}
    >
      <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-white text-[13px]">
        削除
      </p>
    </button>
  );
}
