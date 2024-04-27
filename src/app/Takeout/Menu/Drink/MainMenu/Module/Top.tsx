import DrinkType from "@/Data/Type/Drink";

export default function MenuDrinkModuleTop(props: { drink: DrinkType }) {
  const { drink } = props;
  return (
    <div className="flex justify-between items-center gap-[10px] w-full">
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[18px]">
            {drink.title}
          </p>
          {drink.note && (
            <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[16px]">
              ({drink.note})
            </p>
          )}
        </div>
        <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[13px] ml-4">
          （{drink.titleJP}）
        </p>
      </div>
      <div className="flex flex-col items-end">
        <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[15px]">
          {drink.price}円
        </div>
        <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[14px]">
          税抜き {drink.priceWithoutTax}円
        </div>
      </div>
    </div>
  );
}
