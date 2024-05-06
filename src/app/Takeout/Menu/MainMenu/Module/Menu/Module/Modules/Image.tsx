import MenuType from "@/Data/Type/Menu";
import Image from "next/image";

export default function MenuModuleImage(props: { menuType: MenuType }) {
  const { menuType } = props;
  return menuType.showPicture ? (
    <div className="md:w-[477px] w-[330px] md:h-[327px] h-[230px] relative">
      <Image
        alt="MenuPic"
        src={`/MenuPics/${menuType.picture}.jpeg`}
        className="rounded-t-md"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  ) : null;
}
