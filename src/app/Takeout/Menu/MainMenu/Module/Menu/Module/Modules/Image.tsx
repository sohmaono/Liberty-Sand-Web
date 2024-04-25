import MenuType from "@/Data/Type/Menu";
import Image from "next/image";

export default function MenuModuleImage(props: { menuType: MenuType }) {
  const { menuType } = props;
  return menuType.showPicture ? (
    <Image
      alt="MenuPic"
      src={`/MenuPics/${menuType.picture}.jpeg`}
      width={477}
      height={327}
    />
  ) : null;
}
