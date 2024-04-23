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
        className="flex items-center gap-[15px] cursor-pointer"
        onClick={selectFunc}
      >
        <div className="flex justify-center items-center w-[14px] h-[14px] bg-[#dedede] rounded-full">
          {selectedTakeout?.drink === drinkType ? (
            <div className="w-[9px] h-[9px] rounded-full bg-token-header-backgound" />
          ) : null}
        </div>
        <div className="flex items-center gap-[20px]">
          <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[16px]">
            {drinkType.title}
          </div>
          <div className="flex items-center gap-[10px]">
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
