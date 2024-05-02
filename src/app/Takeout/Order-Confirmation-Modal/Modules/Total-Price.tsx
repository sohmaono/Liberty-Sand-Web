import { useCustomContext } from "@/Data/Context/Context";
import calcTakeoutSumPrice from "@/Data/Function/Takeout-Sum-Price";

export default function OrderConfirmationTotalPrice() {
  const { cartItems } = useCustomContext();
  const totalPrice = cartItems.reduce(
    (currentPrice, cartItem) => calcTakeoutSumPrice(cartItem)[0] + currentPrice,
    0
  );
  const totalPriceWithoutTax = cartItems.reduce(
    (currentPrice, cartItem) => currentPrice + calcTakeoutSumPrice(cartItem)[1],
    0
  );
  return (
    <div className="flex gap-3 items-end">
      <div className="flex items-center gap-[20px]">
        <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-textcolor text-[26px]">
          合計金額
        </div>
        <div className="[font-family:'Inter-Bold',Helvetica] font-bold text-textcolor text-[26px]">
          {totalPrice}円
        </div>
      </div>
      <div className="flex items-center gap-[10px] opacity-60">
        <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-textcolor text-[20px]">
          （税抜
        </div>
        <div className="[font-family:'Inter-Bold',Helvetica] font-bold text-textcolor text-[20px]">
          {totalPriceWithoutTax}円）
        </div>
      </div>
    </div>
  );
}
