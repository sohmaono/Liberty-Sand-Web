import TakeoutOrderType from "@/Data/Type/TakeoutOrder";
import Image from "next/image";

export default function CartMenuModuleImage(props: {
  takeoutOrder: TakeoutOrderType;
}) {
  const { takeoutOrder } = props;
  return (
    <div className="w-[477px] h-[220px] relative">
      <Image
        alt="Menu"
        src={`/MenuPics/${takeoutOrder.menu?.picture}.jpeg`}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
