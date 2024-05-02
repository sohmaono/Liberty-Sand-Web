import DrinkType from "@/Data/Type/Drink";

export default function OrderConfirmationMenuAddingsDrinkModule(props: {
  drinkType: DrinkType;
}) {
  const { drinkType } = props;
  return (
    <div className="flex flex-col w-full justify-between">
      <div className="flex items-center self-start">
        <div className="flex items-center gap-2">
          <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[16px]">
            + {drinkType.title}
          </p>
          <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[16px]">
            {drinkType.note && `（${drinkType.note}）`}
          </p>
        </div>
        <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[11px] ml-4">
          （{drinkType.titleJP}）
        </p>
      </div>
      <div className="flex items-end self-end gap-3">
        <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[16px]">
          {drinkType.type === 0 ? 324 : 356}円
        </div>
        <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[14px]">
          税抜き（{drinkType.type === 0 ? 300 : 330}円）
        </div>
      </div>
    </div>
  );
}
