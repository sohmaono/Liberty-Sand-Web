import { useCustomContext } from "@/Data/Context/Context";
import MenuType from "@/Data/Type/Menu";

export default function MenuModuleButton(props: { menuType: MenuType }) {
  const { menuType } = props;
  const { setSelectedTakeout } = useCustomContext();
  const handleOrder = () => {
    setSelectedTakeout({
      id: Math.random(),
      menu: menuType,
      drink: null,
      toppings: null,
      patty: null,
    });
  };
  return (
    <button
      className="flex items-center justify-center px-[40px] py-[10px] w-full bg-[color:var(--tokens-button-backgound)] rounded-[20px]"
      onClick={handleOrder}
    >
      <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[color:var(--tokens-button-text)] text-[14px]">
        +注文に追加する
      </p>
    </button>
  );
}
