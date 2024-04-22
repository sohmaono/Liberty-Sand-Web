import HeaderTabMap from "./Tab/Map";
import HeaderTitle from "./Top/Module/Title";
import HeaderTop from "./Top/page";

export default function Header() {
  return (
    <div className="flex flex-col items-center gap-[25px] pt-[20px] bg-token-header-backgound fixed left-0 top-0 w-full">
      <HeaderTop />
      <HeaderTabMap />
    </div>
  );
}