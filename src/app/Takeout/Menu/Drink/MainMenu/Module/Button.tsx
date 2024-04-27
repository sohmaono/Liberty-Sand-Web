import { useCustomContext } from "@/Data/Context/Context";
import DrinkType from "@/Data/Type/Drink";

export default function MenuDrinkModuleButton(props: { drink: DrinkType }) {
  const { drink } = props;
  const { setSelectedTakeout } = useCustomContext();
  const handleAddFunc = () => {
    setSelectedTakeout({
      id: Math.random(),
      menu: null,
      drink: drink,
      toppings: null,
      patty: null,
    });
  };
  return (
    <button
      className="flex items-center justify-center py-1 w-full mx-6 rounded-full bg-primary [font-family:'Inter-BlackItalic',Helvetica] font-black italic text-white"
      onClick={handleAddFunc}
    >
      +追加する
    </button>
  );
}
