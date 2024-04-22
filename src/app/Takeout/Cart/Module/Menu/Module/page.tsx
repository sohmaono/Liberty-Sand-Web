import CartMenuModuleDescription from "./Modules/Description";
import CartMenuModuleImage from "./Modules/Image";
import CartMenuModulePrice from "./Modules/Price";
import CartMenuModuleTitle from "./Modules/Title";

export default function CartMenuModule() {
  return (
    <div className="flex flex-col items-center w-[433px]">
      <CartMenuModuleImage />
      <div className="flex flex-col items-start gap-[20px] p-[20px] bg-[color:var(--tokens-card-background)] rounded-[0px_0px_10px_10px]">
        <CartMenuModuleTitle />
        <CartMenuModuleDescription />
        <CartMenuModulePrice />
      </div>
    </div>
  );
}
