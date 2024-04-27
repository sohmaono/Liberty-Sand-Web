import AddingMenuType from "@/Data/Type/AddingMenu";

export default function ModalAddingItemModule(props: {
  addingMenuType: AddingMenuType;
  addingFunc: (addingMenuType: AddingMenuType) => void;
  selected: boolean;
}) {
  const { addingMenuType, addingFunc, selected } = props;
  return (
    <div
      className="flex items-center gap-[15px] cursor-pointer w-full"
      onClick={() => addingFunc(addingMenuType)}
    >
      <div className="flex justify-center items-center w-[14px] h-[14px] bg-[#dedede] rounded-full">
        {selected ? (
          <div className="w-[9px] h-[9px] rounded-full bg-token-header-backgound" />
        ) : null}
      </div>
      <div className="flex items-center gap-[20px] justify-between w-full">
        <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[16px]">
          {addingMenuType.title}
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
    </div>
  );
}
