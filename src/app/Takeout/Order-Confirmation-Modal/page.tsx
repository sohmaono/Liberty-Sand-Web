import OrderConfirmationButtons from "./Modules/Buttons";
import OrderConfirmationFormMap from "./Modules/Form/Map";
import OrderConfirmationMenu from "./Modules/Menu/Map";
import OrderConfirmationTotalPrice from "./Modules/Total-Price";
import OrderConfirmationTitle from "./Modules/title";

export default function OrderConfirmationModal() {
  return (
    <div className="flex flex-col items-start gap-[30px] bg-slate-300">
      <OrderConfirmationTitle />
      <OrderConfirmationFormMap />
      <OrderConfirmationMenu />
      <div className="flex flex-col items-start gap-[70px]">
        <OrderConfirmationTotalPrice />
        <OrderConfirmationButtons />
      </div>
    </div>
  );
}
