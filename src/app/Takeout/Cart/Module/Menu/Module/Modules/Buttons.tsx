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
    <div className="flex justify-between">
      <div onClick={handleChangeFunc}>変更</div>
      <div onClick={handleDeleteFunc}>削除</div>
    </div>
  );
}
