import { useCustomContext } from "@/Data/Context/Context";
import calcTakeoutSumPrice from "@/Data/Function/Takeout-Sum-Price";

export default function CartTotalCostMessage() {
  const { cartItems } = useCustomContext();
  const sumPrice = cartItems.reduce(
    (acc, curr) => acc + calcTakeoutSumPrice(curr)[0],
    0
  );
  const sumPriceWithoutTax = cartItems.reduce(
    (acc, curr) => acc + calcTakeoutSumPrice(curr)[1],
    0
  );
  return (
    <div className="flex items-center gap-8 w-[509px] mx-5">
      <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[color:var(--tokens-card-text)] text-[16px]">
        合計金額
      </p>
      <p className="[font-family:'Inter-Bold',Helvetica] font-bold text-[color:var(--tokens-card-text)] text-[22px]">
        {sumPrice}円
      </p>
    </div>
  );
}
