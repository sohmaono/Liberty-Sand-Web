import MainMenuType from "@/Data/Type/MainMenu";

export default function MainMenuTitle(props: { mainMenu: MainMenuType }) {
  const { mainMenu } = props;
  return (
    <div className="flex flex-col items-center mx-6">
      {mainMenu.title && (
        <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-black text-[24px] text-center">
          {mainMenu.title}
        </p>
      )}
      {mainMenu.subtitle && (
        <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-black text-[19px] text-center">
          {mainMenu.subtitle}
        </p>
      )}
    </div>
  );
}
