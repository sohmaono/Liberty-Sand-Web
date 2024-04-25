import OrderConfirmationMenuModuleImage from "./Image";
import OrderConfirmationMenuModuleDescription from "./description";
import OrderConfirmationMenuModulePrice from "./price";
import OrderConfirmationMenuModuleTitle from "./title";

export default function OrderConfirmationMenuModule() {
  return (
    <div className="flex flex-col">
      <OrderConfirmationMenuModuleImage />
      <div className="flex flex-col items-start gap-[30px] min-w-[433px] w-[433px] bg-white p-[20px]">
        <div className="flex flex-col items-start gap-[20px]">
          <OrderConfirmationMenuModuleTitle />
          <OrderConfirmationMenuModuleDescription />
        </div>
        <OrderConfirmationMenuModulePrice />
      </div>
    </div>
  );
}
