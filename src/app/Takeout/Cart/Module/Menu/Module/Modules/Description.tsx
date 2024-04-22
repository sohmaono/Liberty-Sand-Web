import TakeoutOrderType from "@/Data/Type/TakeoutOrder";

export default function CartMenuModuleDescription(props: {
  takeoutOrder: TakeoutOrderType;
}) {
  const { takeoutOrder } = props;
  return (
    <div className="[font-family:'Inter-ExtraBold_Italic',Helvetica] font-extrabold italic text-[color:var(--tokens-card-text)] text-[14px] leading-[21px]">
      {takeoutOrder.menu!.description}
    </div>
  );
}
