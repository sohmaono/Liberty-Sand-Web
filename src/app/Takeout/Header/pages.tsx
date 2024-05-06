import HeaderTabMap from "./Tab/Map";
import HeaderTitle from "./Top/Module/Title";
import HeaderTop from "./Top/pages";

export default function Header() {
  return (
    <div
      className="flex flex-col justify-between pt-2 bg-token-header-backgound w-full"
      style={{
        height: "11vh",
      }}
    >
      <HeaderTop />
      <HeaderTabMap />
    </div>
  );
}
