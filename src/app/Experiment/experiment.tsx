import Image from "next/image";

export default function Experiment1() {
  return (
    <div className="w-[433px] h-[230px] relative">
      <Image
        src={"/MenuPics/リバティクラブハウスサンド.jpeg"}
        alt="menuPic"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
