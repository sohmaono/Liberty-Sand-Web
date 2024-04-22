import { useCustomContext } from "@/Data/Context/Context";
import HeaderTabType from "@/Data/Type/HeaderTab";

export default function HeaderTabModule(props: { tabType: HeaderTabType }) {
  const { tabType } = props;
  const { tab, setTab } = useCustomContext();
  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      onClick={() => setTab(tabType)}
    >
      <div className="relative mt-[-1px] [font-family:'Inter-BlackItalic',Helvetica] font-black italic text-token-header-text-duplicate text-[18px]">
        {tabType}
      </div>
      <div
        className={`flex w-[127px] items-center ${
          tabType === tab ? "opacity-1" : "opacity-0"
        }`}
      >
        <div className="relative flex-1 grow h-[3px] bg-token-header-text-duplicate rounded-[5px]" />
      </div>
    </div>
  );
}
