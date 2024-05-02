import TakeoutOrderType from "@/Data/Type/TakeoutOrder";
import OrderConfirmationMenuAddingsModule from "./Addings";
import OrderConfirmationMenuAddingsDrinkModule from "./Drinks";

export default function OrderConfirmationMenuAddings(props: {
  takeoutOrder: TakeoutOrderType;
}) {
  const { takeoutOrder } = props;
  return (
    <div className="flex flex-col items-start gap-2 w-full my-2">
      {takeoutOrder.toppings &&
        takeoutOrder.toppings.map((topping, index) => (
          <OrderConfirmationMenuAddingsModule
            key={index}
            addingMenuType={topping}
          />
        ))}
      {takeoutOrder.patty && (
        <OrderConfirmationMenuAddingsModule
          addingMenuType={takeoutOrder.patty}
        />
      )}
      {takeoutOrder.drink && (
        <OrderConfirmationMenuAddingsDrinkModule
          drinkType={takeoutOrder.drink}
        />
      )}
    </div>
  );
}
