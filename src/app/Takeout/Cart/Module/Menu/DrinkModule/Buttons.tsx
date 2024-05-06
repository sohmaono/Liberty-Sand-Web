import { useCustomContext } from "@/Data/Context/Context";
import TakeoutOrderType from "@/Data/Type/TakeoutOrder";

export default function CartMenuDrinkModuleBtns(props: {
  takeoutOrder: TakeoutOrderType;
}) {
  const { takeoutOrder } = props;
  const { setSelectedTakeout, setCartItems } = useCustomContext();
  const handleDeleteFunc = () => {
    setCartItems((prev) => prev.filter((prev) => takeoutOrder !== prev));
  };
  return (
    <div className="flex">
      <div
        className="flex justify-center py-[6px] px-5 rounded-xl bg-gray-500 cursor-pointer"
        onClick={handleDeleteFunc}
      >
        <div className="text-white font-extrabold text-[14px]">削除</div>
      </div>
    </div>
  );
}
