import { useCustomContext } from "@/Data/Context/Context";
import AddingMenuType from "@/Data/Type/AddingMenu";
import ModalAddingTitle from "./Modules/Title";
import { addingPattyArray, addingToppingArray } from "@/Data/Array/Adding";
import ModalAddingItemModule from "./Modules/Item";

export default function ModalPatty() {
  const { selectedTakeout, setSelectedTakeout } = useCustomContext();
  const addingFunc = (addingMenuType: AddingMenuType) => {
    if (selectedTakeout?.patty === addingMenuType) {
      setSelectedTakeout((prev) => ({ ...prev!, patty: null }));
    } else {
      setSelectedTakeout((prev) => ({ ...prev!, patty: addingMenuType }));
    }
  };
  const calcSelected = (addingMenuType: AddingMenuType) => {
    return selectedTakeout?.patty === addingMenuType;
  };
  return (
    <div className="flex flex-col gap-[40px] bg-white rounded-[20px] py-[30px] w-[600px] px-[20px]">
      <ModalAddingTitle title={"パティを追加できます！"} />
      <div className="flex flex-col gap-[24px]">
        {addingPattyArray.map((addingMenuType, index) => (
          <ModalAddingItemModule
            key={index}
            addingMenuType={addingMenuType}
            addingFunc={addingFunc}
            selected={calcSelected(addingMenuType)}
          />
        ))}
      </div>
    </div>
  );
}
