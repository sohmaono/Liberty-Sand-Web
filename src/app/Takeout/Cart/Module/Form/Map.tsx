import { UseFormReturn } from "react-hook-form";
import CartFormModule from "./Module";
import TakeoutFormType from "@/Data/Type/TakeoutForm";

export default function CartFormMap(props: {
  formValue: UseFormReturn<TakeoutFormType, any, undefined>;
}) {
  const { formValue } = props;
  return (
    <div className="flex flex-col gap-6 md:w-[509px] w-[330px] mx-5">
      <CartFormModule
        title="お名前"
        formValue={formValue}
        propertyName="name"
        inputType="text"
      />
      <CartFormModule
        title="電話番号"
        formValue={formValue}
        propertyName="phoneNumber"
        inputType="tel"
      />
      <CartFormModule
        title="メールアドレス"
        formValue={formValue}
        propertyName="mailAddress"
        inputType="email"
      />
    </div>
  );
}
