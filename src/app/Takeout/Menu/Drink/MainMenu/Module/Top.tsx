import DrinkType from "@/Data/Type/Drink";

export default function MenuDrinkModuleTop(props: { drink: DrinkType }) {
  const { drink } = props;
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:gap-[10px] gap-1 w-full">
      <div className="flex flex-col self-start">
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
      <div className="flex md:flex-col items-end gap-5 md:gap-0 self-end">
        <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[15px]">
          {drink.price}円
        </p>
        <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[14px]">
          税抜き {drink.priceWithoutTax}円
        </p>
      </div>
    </div>
  );
}
