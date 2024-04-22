import MenuType from "@/Data/Type/Menu";

export default function MenuModuleDetail(props: { menuType: MenuType }) {
  const { menuType } = props;
  return (
    <div className="flex items-start w-full">
      <div className="[font-family:'Inter-ExtraBold_Italic',Helvetica] font-extrabold italic text-[color:var(--tokens-card-text)] text-[14px] leading-[21px]">
        {menuType.description}
      </div>
    </div>
  );
}
