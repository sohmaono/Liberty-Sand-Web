import { useCustomContext } from "@/Data/Context/Context";
import calcTakeoutSumPrice from "@/Data/Function/Takeout-Sum-Price";

export default function OrderConfirmationTotalPrice() {
  const { cartItems } = useCustomContext();
  const totalPrice = cartItems.reduce(
    (currentPrice, cartItem) => calcTakeoutSumPrice(cartItem)[0] + currentPrice,
    0
  );
  return (
    <div className="flex items-center gap-[20px]">
      <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-textcolor text-[26px]">
        合計金額
      </div>
      <div className="[font-family:'Inter-Bold',Helvetica] font-bold text-textcolor text-[26px]">
        {totalPrice}円
      </div>
    </div>
  );
}
