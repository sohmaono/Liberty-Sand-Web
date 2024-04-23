import sideMenuArray from "@/Data/Array/SideMenu";
import MenuModule from "../Module/page";

export default function MenuMapSideMenu() {
  return (
    <div className="flex flex-col items-start gap-10">
      {sideMenuArray.map((menuType, index) => (
        <MenuModule key={index} menuType={menuType} />
      ))}
    </div>
  );
}
