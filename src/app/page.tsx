"use client";
import { CustomContext } from "@/Data/Context/Context";
import HeaderTabType from "@/Data/Type/HeaderTab";
import { useState } from "react";
import Takeout from "./Takeout/page";
import TakeoutOrderType from "@/Data/Type/TakeoutOrder";
import Experiment from "./experiment";
import SlideInElement from "./Experiment/experiment";

export default function Home() {
  const [tab, setTab] = useState<HeaderTabType>("SANDWICH");
  const [selectedTakeout, setSelectedTakeout] =
    useState<TakeoutOrderType | null>(null);
  const [cartItems, setCartItems] = useState<TakeoutOrderType[]>([]);
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  return (
    <CustomContext.Provider
      value={{
        tab,
        setTab,
        selectedTakeout,
        setSelectedTakeout,
        cartItems,
        setCartItems,
        openSideBar,
        setOpenSideBar,
      }}
    >
      <Takeout />
    </CustomContext.Provider>
  );
}
