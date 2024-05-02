import { useCustomContext } from "@/Data/Context/Context";
import OrderConfirmationMenuModule from "./Module/pages";

export default function OrderConfirmationMenu() {
  const { cartItems } = useCustomContext();
  return (
    <div className="flex gap-[10px] w-[563px] overflow-x-scroll px-6">
      {cartItems.map((takeoutOrder, index) => (
        <OrderConfirmationMenuModule key={index} takeoutOrder={takeoutOrder} />
      ))}
    </div>
  );
}
