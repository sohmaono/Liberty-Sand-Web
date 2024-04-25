import { useCustomContext } from "@/Data/Context/Context";

export default function OrderConfirmationButtons() {
  const { setTakeoutForm } = useCustomContext();
  return (
    <div className="flex justify-between items-center w-full px-9">
      <div
        className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-[22px] cursor-pointer"
        onClick={() => setTakeoutForm(null)}
      >
        キャンセル
      </div>
      <button
        className="flex items-center justify-center px-[50px] py-[15px] bg-primary rounded-[20px]"
        onClick={() => {}}
      >
        <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-white text-[22px]">
          注文する
        </div>
      </button>
    </div>
  );
}
