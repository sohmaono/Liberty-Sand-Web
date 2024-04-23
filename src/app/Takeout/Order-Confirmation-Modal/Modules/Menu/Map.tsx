import { useCustomContext } from "@/Data/Context/Context";
import OrderConfirmationMenuModule from "./Module/page";

export default function OrderConfirmationMenu() {
  const { cartItems } = useCustomContext();
  return (
    <div className="flex gap-[10px]">
      {cartItems.map((takeoutOrder, index) => (
        <OrderConfirmationMenuModule key={index} />
      ))}
    </div>
  );
}
