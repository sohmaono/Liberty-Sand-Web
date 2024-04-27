import AddingMenuType from "@/Data/Type/AddingMenu";

export default function ModalConfirmationAddingsModule(props: {
  addingMenu: AddingMenuType;
}) {
  const { addingMenu } = props;
  return (
    <div
      className={`flex items-center gap-[12px] ml-5 ${
        addingMenu.type === 0 && "w-[300px]"
      }`}
    >
      <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[16px]">
        +
      </div>
      <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[16px]">
        {addingMenu.title}
      </div>
      <div className="flex items-center gap-[10px] ml-2">
        <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[16px]">
          {addingMenu.price}円
        </div>
        <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[14px]">
          税抜き（{addingMenu.priceWithoutTax}円）
        </div>
      </div>
    </div>
  );
}
