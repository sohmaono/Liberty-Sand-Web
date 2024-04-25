import BookingFormType from "@/Data/Type/BookingForm";
import { UseFormReturn } from "react-hook-form";

export default function BookingFormModule(props: {
  title: string;
  property: keyof BookingFormType;
  formValue: UseFormReturn<BookingFormType, any, undefined>;
  type: string;
}) {
  const { title, property, formValue, type } = props;
  const {
    register,
    formState: { errors },
  } = formValue;
  return (
    <div className="flex flex-col items-start gap-[11px] w-full">
      <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-textcolor text-[18px]">
        {title}
      </div>
      <input
        type={type}
        className="h-[40px] bg-white rounded-[10px] w-full"
        {...register(property, { required: true })}
      />
      {errors[property] ? (
        <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-red-600 text-[14px]">
          {title}を{property === "mailAddress" ? "正しく" : null}
          入力してください
        </p>
      ) : null}
    </div>
  );
}
