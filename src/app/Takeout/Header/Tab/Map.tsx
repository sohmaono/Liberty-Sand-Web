import HeaderTabType from "@/Data/Type/HeaderTab";
import HeaderTabModule from "./Module";

export default function HeaderTabMap() {
  return (
    <div className="flex h-[35px] items-center gap-[20px] px-[20px] w-full justify-around overflow-x-auto">
      {tabTypeArray.map((tabType, index) => (
        <HeaderTabModule key={index} tabType={tabType} />
      ))}
    </div>
  );
}

const tabTypeArray: HeaderTabType[] = [
  "SANDWICH",
  "HAMBURGER",
  "SIDE MENU",
  "DRINKS",
];
