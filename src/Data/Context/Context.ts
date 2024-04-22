import { Dispatch, SetStateAction, createContext, useContext } from "react";
import HeaderTabType from "../Type/HeaderTab";
import TakeoutOrderType from "../Type/TakeoutOrder";

type ContextType = {
  tab: HeaderTabType;
  setTab: Dispatch<SetStateAction<HeaderTabType>>;
  selectedTakeout: TakeoutOrderType | null;
  setSelectedTakeout: Dispatch<SetStateAction<TakeoutOrderType | null>>;
};

export const CustomContext = createContext<ContextType | undefined>(undefined);

export const useCustomContext = () => {
  const context = useContext(CustomContext);
  if (!context) {
    throw new Error();
  }
  return context;
};
