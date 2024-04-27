import Image from "next/image";

export default function OrderConfirmationMenuModuleImage() {
  return (
    <div className="w-[433px] h-[220px] relative">
      <Image
        alt="メニュー"
        src={"/MenuPics/リバティクラブハウスサンド.jpeg"}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover"
        }} />
    </div>
  );
}
