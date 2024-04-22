import TakeoutFormType from "@/Data/Type/TakeoutForm";
import { UseFormReturn } from "react-hook-form";

export default function CartFormModule(props: {
  title: string;
  formValue: UseFormReturn<TakeoutFormType, any, undefined>;
  propertyName: keyof TakeoutFormType;
  inputType: string;
}) {
  const { title, formValue, propertyName, inputType } = props;
  const {
    formState: { errors },
  } = formValue;
  return (
    <div className="flex flex-col items-start gap-[11px]">
      <div className="items-start ">
        <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[color:var(--tokens-card-text)] text-[18px]">
          {title}
        </p>
      </div>
      <div className="flex flex-col items-end gap-2 w-full">
        <div className="flex items-start w-full">
          <input
            type={inputType}
            className="flex-1 h-[40px] bg-[color:var(--tokens-card-background)] rounded-[10px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#4e4e4e] text-[22px] px-2"
            {...formValue.register(propertyName, {
              required: true,
              pattern: propertyName === "mailAddress" ? /^S+@S+$/i : undefined,
            })}
          />
        </div>
        {errors[propertyName] ? (
          <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-red-600 text-[14px]">
            {title}を{propertyName === "mailAddress" ? "正しく" : null}
            入力してください
          </p>
        ) : null}
      </div>
    </div>
  );
}
