import SideBarMap from "./map";

export default function SideBar() {
  return (
    <div className="w-full h-full fixed inset-0 bg-black bg-opacity-50 z-30">
      <SideBarMap />
    </div>
  );
}
