import TakeoutOrderType from "@/Data/Type/TakeoutOrder";
import CartMenuDrinkModuleTop from "./Top";
import CartMenuDrinkModuleBtns from "./Buttons";

export default function CartMenuDrinkModule(props: {
  takeoutOrder: TakeoutOrderType;
}) {
  const { takeoutOrder } = props;
  return (
    <div className="flex flex-col p-[20px] rounded-md bg-white md:min-w-[433px] min-w-[300px] items-center gap-4 h-max">
      <CartMenuDrinkModuleTop drink={takeoutOrder.drink!} />
      <CartMenuDrinkModuleBtns takeoutOrder={takeoutOrder} />
    </div>
  );
}
