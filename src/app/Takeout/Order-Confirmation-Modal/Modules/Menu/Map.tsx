import { useCustomContext } from "@/Data/Context/Context";
import OrderConfirmationMenuSwitcher from "./Switcher";

export default function OrderConfirmationMenu() {
  const { cartItems } = useCustomContext();
  return (
    <div className="flex gap-[10px] w-full overflow-x-scroll px-6">
      {cartItems.map((takeoutOrder, index) => (
        <OrderConfirmationMenuSwitcher
          key={index}
          takeoutOrder={takeoutOrder}
        />
      ))}
    </div>
  );
}
