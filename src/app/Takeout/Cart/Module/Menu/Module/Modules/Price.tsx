import calcTakeoutSumPrice from "@/Data/Function/Takeout-Sum-Price";
import TakeoutOrderType from "@/Data/Type/TakeoutOrder";

export default function CartMenuModulePrice(props: {
  takeoutOrder: TakeoutOrderType;
}) {
  const { takeoutOrder } = props;
  return (
    <div className="flex items-end gap-[20px]">
      <div className="[font-family:'Inter-ExtraBold_Italic',Helvetica] font-extrabold italic text-[color:var(--tokens-card-text)] text-[18px]">
        合計 {calcTakeoutSumPrice(takeoutOrder)[0]}円
      </div>
      <div className="[font-family:'Inter-ExtraBold_Italic',Helvetica] font-extrabold italic text-[color:var(--tokens-card-text)] text-[14px]">
        税抜き（{calcTakeoutSumPrice(takeoutOrder)[1]}円）
      </div>
    </div>
  );
}
