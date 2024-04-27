import { useCustomContext } from "@/Data/Context/Context";
import Image from "next/image";

export default function ModalConfirmationMenuImage() {
  const { selectedTakeout } = useCustomContext();
  return (
    <div className="w-[600px] h-[200px] relative">
      <Image
        alt="SELECTED MENU"
        src={`/MenuPics/${selectedTakeout?.menu?.picture}.jpeg`}
        layout="fill"
        objectFit="cover"
        className="rounded-t-md"
      />
    </div>
  );
}
