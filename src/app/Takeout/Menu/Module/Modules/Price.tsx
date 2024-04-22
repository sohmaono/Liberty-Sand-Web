import MenuType from "@/Data/Type/Menu";

export default function MenuModulePrice(props: { menuType: MenuType }) {
  const { menuType } = props;
  return (
    <div className="flex items-end gap-[20px] w-full">
      <div className="items-end">
        <div className="[font-family:'Inter-ExtraBold_Italic',Helvetica] font-extrabold italic text-[color:var(--tokens-card-text)] text-[18px]">
          {menuType.price}円
        </div>
      </div>
      <div className="items-end">
        <div className="[font-family:'Inter-ExtraBold_Italic',Helvetica] font-extrabold italic text-[color:var(--tokens-card-text)] text-[14px]">
          税抜き（{menuType.priceWithoutTax}円）
        </div>
      </div>
    </div>
  );
}
