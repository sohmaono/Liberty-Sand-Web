import { useCustomContext } from "@/Data/Context/Context";

export default function CartItemsCountMessage() {
  const { cartItems } = useCustomContext();
  return (
    <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[color:var(--tokens-card-text)] text-[18px] w-[509px] mx-5">
      ご注文頂く商品（{cartItems.length}点）
    </div>
  );
}
