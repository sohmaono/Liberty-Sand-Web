import OrderConfirmationMenuModuleDescription from "./description";
import OrderConfirmationMenuModulePrice from "./price";
import OrderConfirmationMenuModuleTitle from "./title";

export default function OrderConfirmationMenuModule() {
  return (
    <div className="flex flex-col items-start gap-[30px]">
      <div className="flex flex-col items-start gap-[20px]">
        <OrderConfirmationMenuModuleTitle />
        <OrderConfirmationMenuModuleDescription />
      </div>
      <OrderConfirmationMenuModulePrice />
    </div>
  );
}
