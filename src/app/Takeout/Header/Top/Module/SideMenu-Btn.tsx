import { useCustomContext } from "@/Data/Context/Context";
import Image from "next/image";

export default function HeaderTopSideMenuBtn() {
  const { setOpenSideBar } = useCustomContext();
  const handleOpenFunc = () => {
    setOpenSideBar(true);
  };
  return (
    <div
      className="inline-flex flex-col items-center justify-center gap-[6px] relative flex-[0_0_auto] cursor-pointer"
      onClick={handleOpenFunc}
    >
      <Image
        alt="Menu"
        src="/Header/Header-SideMenu-Line.png"
        width={25}
        height={3}
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <Image
        alt="Menu"
        src="/Header/Header-SideMenu-Line.png"
        width={25}
        height={3}
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <Image
        alt="Menu"
        src="/Header/Header-SideMenu-Line.png"
        width={25}
        height={3}
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
    </div>
  );
}
