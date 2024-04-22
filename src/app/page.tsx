"use client";
import { CustomContext } from "@/Data/Context/Context";
import HeaderTabType from "@/Data/Type/HeaderTab";
import { useState } from "react";
import Takeout from "./Takeout/page";
import TakeoutOrderType from "@/Data/Type/TakeoutOrder";
import Experiment from "./experiment";

export default function Home() {
  const [tab, setTab] = useState<HeaderTabType>("SANDWICH");
  const [selectedTakeout, setSelectedTakeout] =
    useState<TakeoutOrderType | null>(null);
  const [cartItems, setCartItems] = useState<TakeoutOrderType[]>([]);
  return (
    <CustomContext.Provider
      value={{
        tab,
        setTab,
        selectedTakeout,
        setSelectedTakeout,
        cartItems,
        setCartItems,
      }}
    >
      <Takeout />
    </CustomContext.Provider>
  );
}
