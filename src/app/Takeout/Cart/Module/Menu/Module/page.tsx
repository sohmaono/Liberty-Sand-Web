import TakeoutOrderType from "@/Data/Type/TakeoutOrder";
import CartMenuModuleDescription from "./Modules/Description";
import CartMenuModuleImage from "./Modules/Image";
import CartMenuModulePrice from "./Modules/Price";
import CartMenuModuleTitle from "./Modules/Title";
import CartMenuModuleButtons from "./Modules/Buttons";

export default function CartMenuModule(props: {
  takeoutOrder: TakeoutOrderType;
}) {
  const { takeoutOrder } = props;
  return (
    <div className="flex-col items-center min-w-[433px] w-[433px] flex">
      <CartMenuModuleImage takeoutOrder={takeoutOrder} />
      <div className="flex flex-col items-start gap-[20px] p-[20px] bg-[color:var(--tokens-card-background)] rounded-[0px_0px_10px_10px]">
        <CartMenuModuleTitle takeoutOrder={takeoutOrder} />
        <CartMenuModuleDescription takeoutOrder={takeoutOrder} />
        <CartMenuModulePrice takeoutOrder={takeoutOrder} />
        <CartMenuModuleButtons takeoutOrder={takeoutOrder} />
      </div>
    </div>
  );
}
