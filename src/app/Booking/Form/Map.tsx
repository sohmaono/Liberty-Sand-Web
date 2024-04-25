import { UseFormReturn } from "react-hook-form";
import BookingFormModule from "./Module";
import BookingFormType from "@/Data/Type/BookingForm";

export default function BookingFormMap(props: {
  formValue: UseFormReturn<BookingFormType, any, undefined>;
}) {
  const { formValue } = props;
  return (
    <div className="flex flex-col items-start gap-[40px] w-full">
      <BookingFormModule
        title="お名前"
        property="name"
        formValue={formValue}
        type="text"
      />
      <BookingFormModule
        title="電話番号"
        property="phoneNumber"
        formValue={formValue}
        type="tel"
      />
      <BookingFormModule
        title="メールアドレス"
        property="mailAddress"
        formValue={formValue}
        type="email"
      />
    </div>
  );
}
