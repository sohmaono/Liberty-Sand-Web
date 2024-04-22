import Image from "next/image";

export default function HeaderTopSideMenuBtn() {
  return (
    <div className="inline-flex flex-col items-center justify-center gap-[6px] relative flex-[0_0_auto]">
      <Image
        alt="Menu"
        src="/Header/Header-SideMenu-Line.png"
        width={25}
        height={3}
      />
      <Image
        alt="Menu"
        src="/Header/Header-SideMenu-Line.png"
        width={25}
        height={3}
      />
      <Image
        alt="Menu"
        src="/Header/Header-SideMenu-Line.png"
        width={25}
        height={3}
      />
    </div>
  );
}