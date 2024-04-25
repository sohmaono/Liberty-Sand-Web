import MenuType from "@/Data/Type/Menu";
import Image from "next/image";

export default function MenuModuleImage(props: { menuType: MenuType }) {
  const { menuType } = props;
  return menuType.showPicture ? (
    <div className="w-[477px] h-[327px] relative">
      <Image
        alt="MenuPic"
        src={`/MenuPics/${menuType.picture}.jpeg`}
        layout="fill"
        objectFit="cover"
      />
    </div>
  ) : null;
}
