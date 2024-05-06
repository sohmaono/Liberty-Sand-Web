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
      <div className="flex items-center gap-[15px]">
        <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-black md:text-[22px] text-[19px]">
          合計金額
        </p>
        <p className="[font-family:'Inter-Bold',Helvetica] font-bold text-black md:text-[22px] text-[19px]">
          {totalPrice}円
        </p>
      </div>
      <div className="flex items-center gap-[10px] opacity-60">
        <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-black md:text-[18px] text-[16px]">
          （税抜
        </p>
        <p className="[font-family:'Inter-Bold',Helvetica] font-bold text-black md:text-[18px] text-[16px]">
          {totalPriceWithoutTax}円）
        </p>
      </div>
    </div>
  );
}
