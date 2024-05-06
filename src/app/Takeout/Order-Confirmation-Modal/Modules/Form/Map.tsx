import { useCustomContext } from "@/Data/Context/Context";
import OrderConfirmationFormModule from "./Module";

export default function OrderConfirmationFormMap() {
  const { takeoutForm } = useCustomContext();
  if (takeoutForm) {
    return (
      <div className="flex flex-col items-start gap-[25px]">
        <OrderConfirmationFormModule title="お名前" value={takeoutForm.name} />
        <OrderConfirmationFormModule
          title="電話番号"
          value={takeoutForm.phoneNumber}
        />
        <OrderConfirmationFormModule
          title="メールアドレス"
          value={takeoutForm.mailAddress}
        />
      </div>
    );
  }
}
