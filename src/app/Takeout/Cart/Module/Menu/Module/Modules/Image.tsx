import TakeoutOrderType from "@/Data/Type/TakeoutOrder";
import Image from "next/image";

export default function CartMenuModuleImage(props: {
  takeoutOrder: TakeoutOrderType;
}) {
  const { takeoutOrder } = props;
  return (
    <Image
      alt="Menu"
      src={`/MenuPics/${takeoutOrder.menu?.picture}.jpeg`}
      width={433}
      height={247}
    />
  );
}
