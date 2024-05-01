"use client";
import { CustomContext } from "@/Data/Context/Context";
import HeaderTabType from "@/Data/Type/HeaderTab";
import { useState } from "react";
import Takeout from "./Takeout/pages";
import TakeoutOrderType from "@/Data/Type/TakeoutOrder";
import TakeoutFormType from "@/Data/Type/TakeoutForm";
import HeaderCartBtn from "./Takeout/Header/Top/Module/Cart-Btn";

export default function Home() {
  const [tab, setTab] = useState<HeaderTabType>("SANDWICH");
  const [selectedTakeout, setSelectedTakeout] =
    useState<TakeoutOrderType | null>(null);
  const [cartItems, setCartItems] = useState<TakeoutOrderType[]>([]);
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  const [takeoutForm, setTakeoutForm] = useState<TakeoutFormType | null>(null);
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
        takeoutForm,
        setTakeoutForm,
      }}
    >
      <Takeout />
    </CustomContext.Provider>
  );
}
