import DrinkMainMenu from "@/Data/Type/DrinkMainMenu";

export default function MainMenuDrinkTitle(props: { mainMenu: DrinkMainMenu }) {
  const { mainMenu } = props;
  return (
    <div className="flex md:w-[500px] w-[330px] md:items-end items-start justify-between gap-11">
      <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-black text-[24px]">
        {mainMenu.title}
      </p>
      <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-black text-[14px]">
        {mainMenu.subtitle}
      </p>
    </div>
  );
}
