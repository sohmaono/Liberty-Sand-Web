import TakeoutOrderType from "@/Data/Type/TakeoutOrder";
import Image from "next/image";

export default function CartMenuModuleImage(props: {
  takeoutOrder: TakeoutOrderType;
}) {
  const { takeoutOrder } = props;
  return (
    <div className="w-[433px] h-[200px] relative">
      <Image
        alt="Menu"
        src={`/MenuPics/${takeoutOrder.menu?.picture}.jpeg`}
        layout="fill"
        objectFit="cover"
        className="rounded-t-md"
      />
    </div>
  );
}
