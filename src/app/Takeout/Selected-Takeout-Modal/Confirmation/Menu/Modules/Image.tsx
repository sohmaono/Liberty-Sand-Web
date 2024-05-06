import { useCustomContext } from "@/Data/Context/Context";
import Image from "next/image";

export default function ModalConfirmationMenuImage() {
  const { selectedTakeout } = useCustomContext();
  return (
    <div className="md:w-[600px] w-[360px] md:h-[200px] h-[140px] relative">
      <Image
        alt="SELECTED MENU"
        src={`/MenuPics/${selectedTakeout?.menu?.picture}.jpeg`}
        className="rounded-t-md"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
}
