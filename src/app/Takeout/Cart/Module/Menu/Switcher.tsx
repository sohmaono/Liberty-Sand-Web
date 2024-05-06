import TakeoutOrderType from "@/Data/Type/TakeoutOrder";
import CartMenuModule from "./Module/pages";
import CartMenuDrinkModule from "./DrinkModule/pages";

export default function CartMenuModuleSwitcher(props: {
  takeoutOrder: TakeoutOrderType;
}) {
  const { takeoutOrder } = props;
  return takeoutOrder.menu ? (
    <CartMenuModule takeoutOrder={takeoutOrder} />
  ) : (
    <CartMenuDrinkModule takeoutOrder={takeoutOrder} />
  );
}
