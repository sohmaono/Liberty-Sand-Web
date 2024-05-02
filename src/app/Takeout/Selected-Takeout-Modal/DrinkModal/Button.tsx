import { useCustomContext } from "@/Data/Context/Context";
import DrinkType from "@/Data/Type/Drink";

export default function ModalDrinkButton(props: { drink: DrinkType }) {
  const { drink } = props;
  const { selectedTakeout, setSelectedTakeout, setCartItems } =
    useCustomContext();
  const handleAddFunc = () => {
    setCartItems((prev) => [...prev, selectedTakeout!]);
    setSelectedTakeout(null);
  };
  return (
    <button
      className="flex items-center justify-center py-1 w-full mx-6 rounded-full bg-primary [font-family:'Inter-BlackItalic',Helvetica] font-black italic text-white"
      onClick={handleAddFunc}
    >
      +カートに追加する
    </button>
  );
}
