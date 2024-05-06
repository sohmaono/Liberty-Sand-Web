import { addingToppingArray } from "@/Data/Array/Adding";
import ModalAddingItemModule from "./Modules/Item";
import ModalAddingTitle from "./Modules/Title";
import { useCustomContext } from "@/Data/Context/Context";
import AddingMenuType from "@/Data/Type/AddingMenu";

export default function ModalTopping() {
  const { selectedTakeout, setSelectedTakeout } = useCustomContext();
  const addingFunc = (addingMenuType: AddingMenuType) => {
    var toppings: AddingMenuType[] = [];
    if (
      selectedTakeout?.toppings?.some((topping) => topping === addingMenuType)
    ) {
      toppings = selectedTakeout.toppings.filter(
        (topping) => topping !== addingMenuType
      );
    } else if (selectedTakeout?.toppings) {
      toppings = [...selectedTakeout.toppings, addingMenuType];
    } else {
      toppings = [addingMenuType];
    }
    setSelectedTakeout((prev) => ({ ...prev!, toppings }));
  };
  const calcSelected = (addingMenuType: AddingMenuType) => {
    if (!selectedTakeout?.toppings) {
      return false;
    }
    return selectedTakeout.toppings.some(
      (topping) => topping === addingMenuType
    );
  };
  return (
    <div className="flex flex-col gap-[40px] bg-white rounded-[20px] py-[30px] md:w-[600px] w-[360px] px-[20px]">
      <ModalAddingTitle title={"トッピングはいかがですか？"} />
      <div className="flex flex-col gap-[24px] w-max">
        {addingToppingArray.map((addingMenuType, index) => (
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
