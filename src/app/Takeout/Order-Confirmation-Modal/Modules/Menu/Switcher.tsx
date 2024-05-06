import TakeoutOrderType from "@/Data/Type/TakeoutOrder";
import OrderConfirmationMenuModule from "./Module/pages";
import OrderConfirmationMenuDrinkModule from "./DrinkModule/pages";

export default function OrderConfirmationMenuSwitcher(props: {
  takeoutOrder: TakeoutOrderType;
}) {
  const { takeoutOrder } = props;
  return takeoutOrder.menu ? (
    <OrderConfirmationMenuModule takeoutOrder={takeoutOrder} />
  ) : (
    <OrderConfirmationMenuDrinkModule takeoutOrder={takeoutOrder} />
  );
}
