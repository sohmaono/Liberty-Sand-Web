import TakeoutOrderType from "@/Data/Type/TakeoutOrder";

export default function CartMenuModulePrice(props: {
  takeoutOrder: TakeoutOrderType;
}) {
  const { takeoutOrder } = props;
  return (
    <div className="flex items-end gap-[20px]">
      <div className="[font-family:'Inter-ExtraBold_Italic',Helvetica] font-extrabold italic text-[color:var(--tokens-card-text)] text-[18px]">
        {takeoutOrder.menu!.price}円
      </div>
      <div className="[font-family:'Inter-ExtraBold_Italic',Helvetica] font-extrabold italic text-[color:var(--tokens-card-text)] text-[14px]">
        税抜き（{takeoutOrder.menu!.priceWithoutTax}円）
      </div>
    </div>
  );
}
