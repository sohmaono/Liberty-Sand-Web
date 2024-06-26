import TakeoutOrderType from "@/Data/Type/TakeoutOrder";
import Image from "next/image";

export default function OrderConfirmationMenuModuleImage(props: {
  takeoutOrder: TakeoutOrderType;
}) {
  const { takeoutOrder } = props;
  return (
    <div className="md:w-[433px] md:h-[200px] w-[330px] h-[150px] relative">
      <Image
        alt="メニュー"
        src={`/MenuPics/${takeoutOrder.menu!.picture}.jpeg`}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
        className="rounded-t-md"
      />
    </div>
  );
}
