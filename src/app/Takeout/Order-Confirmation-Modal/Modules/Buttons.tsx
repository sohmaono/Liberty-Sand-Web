export default function OrderConfirmationButtons() {
  return (
    <div className="flex justify-between items-center">
      <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-[22px]">
        キャンセル
      </div>
      <div className="flex items-center justify-center px-[50px] py-[15px] bg-primary rounded-[20px]">
        <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-white text-[22px]">
          注文する
        </div>
      </div>
    </div>
  );
}
