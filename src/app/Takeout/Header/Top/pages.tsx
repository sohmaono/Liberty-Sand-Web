import HeaderCartBtn from "./Module/Cart-Btn";
import HeaderTopSideMenuBtn from "./Module/SideMenu-Btn";
import HeaderTitle from "./Module/Title";

export default function HeaderTop() {
  return (
    <div
      className={`flex items-center justify-between px-[10px] md:px-[20px] w-full`}
    >
      <HeaderTopSideMenuBtn />
      <HeaderTitle />
      <HeaderCartBtn />
    </div>
  );
}
