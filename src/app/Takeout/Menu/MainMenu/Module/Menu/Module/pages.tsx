import MenuType from "@/Data/Type/Menu";
import MenuModuleButton from "./Modules/Button";
import MenuModuleDetail from "./Modules/Detail";
import MenuModuleImage from "./Modules/Image";
import MenuModulePrice from "./Modules/Price";
import MenuModuleTitle from "./Modules/Title";

export default function MenuModule(props: { menuType: MenuType }) {
  const { menuType } = props;
  return (
    <div
      className={`flex flex-col items-center ${menuType.showPicture && "mt-6"}`}
    >
      <MenuModuleImage menuType={menuType} />
      <div className="flex flex-col items-start gap-[30px] p-[20px] bg-[color:var(--tokens-card-background)] rounded-b-md md:w-[477px] w-[330px]">
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
