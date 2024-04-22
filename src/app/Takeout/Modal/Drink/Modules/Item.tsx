import DrinkType from "@/Data/Type/Drink";

export default function ModalDrinkItemModule(props: { drinkType: DrinkType }) {
  const { drinkType } = props;
  return (
    <div className="flex items-center gap-[15px]">
      <div className="relative w-[14px] h-[14px] bg-[#dedede] rounded-full"></div>
      <div className="flex items-center gap-[20px]">
        <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[16px]">
          {drinkType.title}
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[16px]">
            {drinkType.price}円
          </div>
          <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[14px]">
            税抜き（{drinkType.priceWithoutTax}円）
          </div>
        </div>
      </div>
    </div>
  );
}
