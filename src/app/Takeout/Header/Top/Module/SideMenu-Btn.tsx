import { useCustomContext } from "@/Data/Context/Context";
import Image from "next/image";

export default function HeaderTopSideMenuBtn() {
  const { setOpenSideBar, screenWidth } = useCustomContext();
  const handleOpenFunc = () => {
    setOpenSideBar(true);
  };
  return (
    <div
      className="flex flex-col justify-center gap-[5px] md:gap-[6px] cursor-pointer mr-14"
      onClick={handleOpenFunc}
    >
      <Image
        alt="Menu"
        src="/Header/Header-SideMenu-Line.png"
        width={screenWidth === 0 ? 25 : 18}
        height={screenWidth === 0 ? 3 : 3}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <Image
        alt="Menu"
        src="/Header/Header-SideMenu-Line.png"
        width={screenWidth === 0 ? 25 : 18}
        height={screenWidth === 0 ? 3 : 3}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <Image
        alt="Menu"
        src="/Header/Header-SideMenu-Line.png"
        width={screenWidth === 0 ? 25 : 18}
        height={screenWidth === 0 ? 3 : 3}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}
