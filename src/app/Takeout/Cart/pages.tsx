import { SubmitHandler, useForm } from "react-hook-form";
import CartFormMap from "./Module/Form/Map";
import CartItemsCountMessage from "./Module/Items-Count-Message";
import CartOrderBtn from "./Module/Order-Button";
import CartTotalCostMessage from "./Module/Total-Cost-Message";
import CartMenuMap from "./Module/Menu/Map";
import TakeoutFormType from "@/Data/Type/TakeoutForm";
import { useCustomContext } from "@/Data/Context/Context";

export default function Cart() {
  const { takeoutForm, setTakeoutForm } = useCustomContext();
  const formValue = useForm<TakeoutFormType>({
    mode: "onBlur",
  });
  const { handleSubmit } = formValue;
  const onSubmit: SubmitHandler<TakeoutFormType> = (data) => {
    setTakeoutForm(data);
    console.log(takeoutForm);
  };
  return (
    <form
      className="overflow-y-scroll w-full py-5"
      style={{ height: "89vh" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-[30px] h-max">
        <CartItemsCountMessage />
        <CartMenuMap />
        <CartTotalCostMessage />
        <CartFormMap formValue={formValue} />
        <CartOrderBtn />
      </div>
    </form>
  );
}
