import { useCustomContext } from "@/Data/Context/Context";
import TakeoutOrderType from "@/Data/Type/TakeoutOrder";

export default function CartMenuModuleButtons(props: {
  takeoutOrder: TakeoutOrderType;
}) {
  const { takeoutOrder } = props;
  const { setSelectedTakeout, setCartItems } = useCustomContext();
  const handleChangeFunc = () => {
    setSelectedTakeout(takeoutOrder);
  };
  const handleDeleteFunc = () => {
    setCartItems((prev) => prev.filter((prev) => takeoutOrder !== prev));
  };
  return (
    <div className="flex justify-between w-full">
      <div
        className="flex justify-center py-[6px] px-5 rounded-xl bg-gray-500 cursor-pointer"
        onClick={handleDeleteFunc}
      >
        <div className="text-white font-extrabold text-[14px]">削除</div>
      </div>
      <div
        className="flex justify-center py-[6px] px-5 rounded-xl bg-primary cursor-pointer"
        onClick={handleChangeFunc}
      >
        <div className="text-white font-extrabold text-[14px]">変更</div>
      </div>
    </div>
  );
}
