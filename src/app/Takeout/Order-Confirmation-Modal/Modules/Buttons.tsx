import { useCustomContext } from "@/Data/Context/Context";

export default function OrderConfirmationButtons() {
  const { setTakeoutForm } = useCustomContext();
  return (
    <div className="flex justify-between items-center w-full md:px-9 px-8">
      <p
        className="[font-family:'Inter-Regular',Helvetica] font-semibold text-black md:text-[20px] cursor-pointer"
        onClick={() => setTakeoutForm(null)}
      >
        キャンセル
      </p>
      <button
        className="flex items-center justify-center px-[40px] py-[10px] bg-primary rounded-[15px]"
        onClick={() => {}}
      >
        <p className="[font-family:'Inter-Regular',Helvetica] font-semibold text-white md:text-[20px]">
          注文する
        </p>
      </button>
    </div>
  );
}
