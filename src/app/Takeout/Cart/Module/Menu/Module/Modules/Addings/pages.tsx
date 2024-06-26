import TakeoutOrderType from "@/Data/Type/TakeoutOrder";
import CartMenuModuleAddingsModule from "./Addings";
import CartMenuModuleAddingsDrinkModule from "./Drink";

export default function CartMenuModuleAddings(props: {
  takeoutOrder: TakeoutOrderType;
}) {
  const { takeoutOrder } = props;
  return (
    <div className="flex flex-col items-start gap-2 w-full my-2">
      <div className="flex flex-col items-start gap-1 w-full">
        {takeoutOrder.toppings &&
          takeoutOrder.toppings.map((topping, index) => (
            <CartMenuModuleAddingsModule key={index} addingMenuType={topping} />
          ))}
      </div>
      {takeoutOrder.patty && (
        <CartMenuModuleAddingsModule addingMenuType={takeoutOrder.patty} />
      )}
      {takeoutOrder.drink && (
        <CartMenuModuleAddingsDrinkModule drinkType={takeoutOrder.drink} />
      )}
    </div>
  );
}
