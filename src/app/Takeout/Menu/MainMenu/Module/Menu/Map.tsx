import MenuType from "@/Data/Type/Menu";
import MenuModule from "./Module/page";

export default function MenuMap(props: { menuArray: MenuType[] }) {
  const { menuArray } = props;
  return (
    <div className="flex flex-col items-start gap-10">
      {menuArray.map((menuType, index) => (
        <MenuModule key={index} menuType={menuType} />
      ))}
    </div>
  );
}
