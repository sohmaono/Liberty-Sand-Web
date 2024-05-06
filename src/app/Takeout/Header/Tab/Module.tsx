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
      <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-white text-[16px] md:text-[18px] mx-3 whitespace-nowrap">
        {tabType}
      </p>
      <div
        className={`w-full ${
          tabType === tab ? "opacity-1" : "opacity-0"
        } h-[3px] bg-white rounded-full`}
      />
    </div>
  );
}
