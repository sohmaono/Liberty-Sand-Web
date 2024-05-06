import { useCustomContext } from "@/Data/Context/Context";
import DrinkType from "@/Data/Type/Drink";

export default function ModalDrinkItemModule(props: { drinkType: DrinkType }) {
  const { drinkType } = props;
  const { selectedTakeout, setSelectedTakeout } = useCustomContext();
  const selectFunc = () => {
    if (selectedTakeout?.drink === drinkType) {
      setSelectedTakeout((prev) => ({ ...prev!, drink: null }));
    } else {
      setSelectedTakeout((prev) => ({ ...prev!, drink: drinkType }));
    }
  };
  if (drinkType.type === 0 || drinkType.type === 1) {
    return (
      <div
        className="flex items-center gap-[15px] cursor-pointer w-full"
        onClick={selectFunc}
      >
        <div className="flex justify-center items-center w-[14px] h-[14px] bg-[#dedede] rounded-full">
          {selectedTakeout?.drink === drinkType ? (
            <div className="w-[9px] h-[9px] rounded-full bg-token-header-backgound" />
          ) : null}
        </div>
        <div className="flex md:flex-row flex-col items-center md:gap-[20px] gap-1 w-full md:justify-between">
          <div className="flex flex-col self-start">
            <div className="flex items-center gap-2">
              <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[16px]">
                {drinkType.title}
              </p>
              <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[16px]">
                {drinkType.note && `（${drinkType.note}）`}
              </p>
            </div>
            <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[11px] ml-4">
              （{drinkType.titleJP}）
            </p>
          </div>
          <div className="flex items-center gap-[10px] self-end">
            <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[16px]">
              {drinkType.type === 0 ? 324 : 356}円
            </div>
            <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[14px]">
              税抜き（{drinkType.type === 0 ? 300 : 330}円）
            </div>
          </div>
        </div>
      </div>
    );
  }
}
