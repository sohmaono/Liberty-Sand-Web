import { useCustomContext } from "@/Data/Context/Context";
import CartMenuModule from "./Module/page";

export default function CartMenuMap() {
  const { cartItems } = useCustomContext();
  return (
    <div
      className="flex gap-5 overflow-x-scroll px-6"
      style={{ width: "100vw" }}
    >
      {cartItems.map((item, index) => (
        <CartMenuModule key={index} takeoutOrder={item} />
      ))}
    </div>
  );
}
