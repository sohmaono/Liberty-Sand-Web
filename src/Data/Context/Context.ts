"use client";
import { Dispatch, SetStateAction, createContext, useContext } from "react";
import HeaderTabType from "../Type/HeaderTab";
import TakeoutOrderType from "../Type/TakeoutOrder";
import TakeoutFormType from "../Type/TakeoutForm";

type ContextType = {
  tab: HeaderTabType;
  setTab: Dispatch<SetStateAction<HeaderTabType>>;
  selectedTakeout: TakeoutOrderType | null;
  setSelectedTakeout: Dispatch<SetStateAction<TakeoutOrderType | null>>;
  cartItems: TakeoutOrderType[];
  setCartItems: Dispatch<SetStateAction<TakeoutOrderType[]>>;
  openSideBar: boolean;
  setOpenSideBar: Dispatch<SetStateAction<boolean>>;
  takeoutForm: TakeoutFormType | null;
  setTakeoutForm: Dispatch<SetStateAction<TakeoutFormType | null>>;
  screenWidth: number;
};

export const CustomContext = createContext<ContextType | undefined>(undefined);

export const useCustomContext = () => {
  const context = useContext(CustomContext);
  if (!context) {
    throw new Error();
  }
  return context;
};
