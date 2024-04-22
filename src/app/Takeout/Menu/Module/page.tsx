import MenuType from "@/Data/Type/Menu";
import MenuModuleButton from "./Modules/Button";
import MenuModuleDetail from "./Modules/Detail";
import MenuModuleImage from "./Modules/Image";
import MenuModulePrice from "./Modules/Price";
import MenuModuleTitle from "./Modules/Title";

export default function MenuModule(props: { menuType: MenuType }) {
  const { menuType } = props;
  return (
    <div className="flex flex-col items-center">
      <MenuModuleImage />
      <div className="flex flex-col items-start gap-[30px] p-[20px] bg-[color:var(--tokens-card-background)] rounded-[0px_0px_10px_10px] w-[477px]">
        <div className="flex flex-col items-start gap-[15px] w-full">
          <MenuModuleTitle menuType={menuType} />
          <MenuModuleDetail menuType={menuType} />
        </div>
        <MenuModulePrice menuType={menuType} />
        <MenuModuleButton menuType={menuType} />
      </div>
    </div>
  );
}
