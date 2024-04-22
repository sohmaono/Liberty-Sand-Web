import hamburgerMenuArray from "@/Data/Array/Hamburger";
import MenuModule from "../Module/page";

export default function MenuMapHamburger() {
  return (
    <div className="flex flex-col items-start gap-10">
      {hamburgerMenuArray.map((menuType, index) => (
        <MenuModule key={index} menuType={menuType} />
      ))}
    </div>
  );
}
