import AddingMenuType from "@/Data/Type/AddingMenu";

export default function CartMenuModuleAddingsModule(props: {
  addingMenuType: AddingMenuType;
}) {
  const { addingMenuType } = props;
  return (
    <div className="flex items-center gap-[20px] justify-between w-full">
      <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[16px]">
        + {addingMenuType.title}
      </div>
      <div className="flex items-center gap-[10px]">
        <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[16px]">
          {addingMenuType.price}円
        </div>
        <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[14px]">
          税抜き（{addingMenuType.priceWithoutTax}円）
        </div>
      </div>
    </div>
  );
}
