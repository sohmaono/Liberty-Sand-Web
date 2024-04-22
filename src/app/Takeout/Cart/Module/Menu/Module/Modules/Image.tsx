import TakeoutOrderType from "@/Data/Type/TakeoutOrder";
import Image from "next/image";

export default function CartMenuModuleImage(props: {
  takeoutOrder: TakeoutOrderType;
}) {
  return (
    <Image
      alt="Menu"
      src={`/MenuPics/リバティクラブハウスサンド.jpeg`}
      width={433}
      height={327}
    />
  );
}
