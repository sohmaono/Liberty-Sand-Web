import MenuType from "@/Data/Type/Menu";

export default function MenuModuleTitle(props: { menuType: MenuType }) {
  const { menuType } = props;
  return (
    <div className="flex items-start w-full">
      <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[color:var(--tokens-card-text)] text-[18px] leading-[27px]">
        {menuType.title}
        <br />
        {menuType.titleJP}
      </div>
    </div>
  );
}
