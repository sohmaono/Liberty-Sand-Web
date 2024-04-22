import { SubmitHandler, useForm } from "react-hook-form";
import CartFormMap from "./Module/Form/Map";
import CartItemsCountMessage from "./Module/Items-Count-Message";
import CartOrderBtn from "./Module/Order-Button";
import CartTotalCostMessage from "./Module/Total-Cost-Message";
import CartMenuMap from "./Module/Menu/Map";
import TakeoutFormType from "@/Data/Type/TakeoutForm";

export default function Cart() {
  const formValue = useForm<TakeoutFormType>({
    mode: "onBlur",
  });
  const { handleSubmit } = formValue;
  const onSubmit: SubmitHandler<TakeoutFormType> = (data) => {
    console.log(data);
  };
  return (
    <form
      className="flex flex-col gap-[30px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <CartItemsCountMessage />
      <CartMenuMap />
      <CartTotalCostMessage />
      <CartFormMap formValue={formValue} />
      <CartOrderBtn />
    </form>
  );
}
