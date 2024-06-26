import DrinkType from "@/Data/Type/Drink";

export default function CartMenuModuleAddingsDrinkModule(props: {
  drinkType: DrinkType;
}) {
  const { drinkType } = props;
  return (
    <div className="flex flex-col w-full justify-between">
      <div className="flex items-center self-start flex-col md:flex-row">
        <div className="flex items-center gap-2 self-start">
          <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[16px]">
            + {drinkType.title}
          </p>
          {drinkType.note && (
            <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[16px]">
              {drinkType.note}
            </p>
          )}
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
