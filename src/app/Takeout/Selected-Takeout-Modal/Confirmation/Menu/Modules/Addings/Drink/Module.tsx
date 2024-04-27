import { useCustomContext } from "@/Data/Context/Context";

export default function ModalConfirmationDrinkModule() {
  const { selectedTakeout } = useCustomContext();
  return (
    <div className="flex items-center gap-[20px] ml-5">
      <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[16px]">
        +
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[16px]">
            {selectedTakeout?.drink?.title}
          </p>
          <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[16px]">
            {selectedTakeout?.drink?.note &&
              `（${selectedTakeout?.drink?.note}）`}
          </p>
        </div>
        <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[11px] ml-4">
          （{selectedTakeout?.drink?.titleJP}）
        </div>
      </div>
      <div className="flex items-center gap-[10px] ml-0">
        <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[16px]">
          {selectedTakeout?.drink?.price}円
        </div>
        <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[14px]">
          税抜き（{selectedTakeout?.drink?.priceWithoutTax}円）
        </div>
      </div>
    </div>
  );
}
