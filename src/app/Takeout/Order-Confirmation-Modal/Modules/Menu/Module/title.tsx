import TakeoutOrderType from "@/Data/Type/TakeoutOrder";

export default function OrderConfirmationMenuModuleTitle(props: {
  takeoutOrder: TakeoutOrderType;
}) {
  const { takeoutOrder } = props;
  return (
    <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[color:var(--tokens-card-text)] text-[18px]">
      {takeoutOrder.menu?.title}
      <br />（{takeoutOrder.menu?.titleJP}）
    </div>
  );
}
