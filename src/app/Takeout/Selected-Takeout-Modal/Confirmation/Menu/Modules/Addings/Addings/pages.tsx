import AddingMenuType from "@/Data/Type/AddingMenu";
import ModalConfirmationAddingsDeleteBtn from "./Delete-Button";
import ModalConfirmationAddingsModule from "./Module";
import ModalConfirmationAddingsTitle from "./Title";
import { useCustomContext } from "@/Data/Context/Context";

export default function ModalConfirmationMenuAddings(props: {
  title: string;
  addings: AddingMenuType[];
}) {
  const { title, addings } = props;
  const { setSelectedTakeout } = useCustomContext();
  const handleDeleteFunc = (addingMenu: AddingMenuType) => {
    setSelectedTakeout((prev) => {
      if (addingMenu === prev?.patty) {
        return { ...prev, patty: null };
      } else if (prev?.toppings?.some((topping) => topping === addingMenu)) {
        if (prev.toppings.length === 1) {
          return { ...prev, toppings: null };
        } else {
          return {
            ...prev,
            toppings: prev.toppings.filter((topping) => topping !== addingMenu),
          };
        }
      } else if (prev) {
        return { ...prev };
      } else {
        return null;
      }
    });
  };
  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <ModalConfirmationAddingsTitle title={title} />
      {addings.map((addingMenu, index) => (
        <div
          key={index}
          className="flex md:gap-5 gap-2 items-center justify-between w-full md:flex-row flex-col"
        >
          <ModalConfirmationAddingsModule addingMenu={addingMenu} />
          <ModalConfirmationAddingsDeleteBtn
            handleDelete={() => handleDeleteFunc(addingMenu)}
          />
        </div>
      ))}
    </div>
  );
}
