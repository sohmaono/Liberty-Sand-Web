import { useCustomContext } from "@/Data/Context/Context";
import calcTakeoutSumPrice from "@/Data/Function/Takeout-Sum-Price";

export default function ModalConfirmationMenuBottom() {
  const { selectedTakeout, setSelectedTakeout, setCartItems } =
    useCustomContext();
  const handleAddToCart = () => {
    setCartItems((prev) => [...prev, selectedTakeout!]);
    setSelectedTakeout(null);
  };
  return (
    <div className="flex items-center justify-between w-full gap-5">
      <div className="flex items-end gap-[30px]">
        <div className="flex items-center gap-2">
          <p className="[font-family:'Inter-ExtraBold_Italic',Helvetica] font-extrabold italic text-[color:var(--tokens-card-text)] text-[15px]">
            合計
          </p>
          <p className="[font-family:'Inter-ExtraBold_Italic',Helvetica] font-extrabold italic text-[color:var(--tokens-card-text)] text-[20px]">
            {calcTakeoutSumPrice(selectedTakeout!)[0]}円
          </p>
        </div>
        <p className="[font-family:'Inter-ExtraBold_Italic',Helvetica] font-extrabold italic text-[color:var(--tokens-card-text)] text-[16px]">
          税抜き（{calcTakeoutSumPrice(selectedTakeout!)[1]}円）
        </p>
      </div>
      <button
        className="w-max py-2 px-10 rounded-full bg-primary [font-family:'Inter-ExtraBold_Italic',Helvetica] font-extrabold italic text-white text-[14px]"
        onClick={handleAddToCart}
      >
        +追加する
      </button>
    </div>
  );
}
