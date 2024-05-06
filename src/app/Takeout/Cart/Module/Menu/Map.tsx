import { useCustomContext } from "@/Data/Context/Context";
import CartMenuModuleSwitcher from "./Switcher";

export default function CartMenuMap() {
  const { cartItems } = useCustomContext();
  return (
    <div
      className="flex gap-5 overflow-x-scroll px-6"
      style={{ width: "100vw" }}
    >
      {cartItems.map((item, index) => (
        <CartMenuModuleSwitcher key={index} takeoutOrder={item} />
      ))}
    </div>
  );
}
