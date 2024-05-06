import TakeoutOrderType from "@/Data/Type/TakeoutOrder";
import OrderConfirmationMenuAddings from "./Addings/pages";
import OrderConfirmationMenuModuleImage from "./Image";
import OrderConfirmationMenuModuleDescription from "./description";
import OrderConfirmationMenuModulePrice from "./price";
import OrderConfirmationMenuModuleTitle from "./title";

export default function OrderConfirmationMenuModule(props: {
  takeoutOrder: TakeoutOrderType;
}) {
  const { takeoutOrder } = props;
  return (
    <div className="flex flex-col">
      <OrderConfirmationMenuModuleImage takeoutOrder={takeoutOrder} />
      <div className="flex flex-col items-start gap-[30px] md:min-w-[433px] md:w-[433px] w-[330px] min-w-[330px] bg-white p-[20px] rounded-b-md">
        <div className="flex flex-col items-start gap-[20px]">
          <OrderConfirmationMenuModuleTitle takeoutOrder={takeoutOrder} />
          <OrderConfirmationMenuModuleDescription takeoutOrder={takeoutOrder} />
          <OrderConfirmationMenuAddings takeoutOrder={takeoutOrder} />
        </div>
        <OrderConfirmationMenuModulePrice takeoutOrder={takeoutOrder} />
      </div>
    </div>
  );
}
