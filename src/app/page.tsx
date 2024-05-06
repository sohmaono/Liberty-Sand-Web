"use client";
import { CustomContext } from "@/Data/Context/Context";
import HeaderTabType from "@/Data/Type/HeaderTab";
import { useEffect, useState } from "react";
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
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 540) {
        setScreenWidth(0);
      } else {
        setScreenWidth(1);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
        screenWidth,
      }}
    >
      <Takeout />
    </CustomContext.Provider>
  );
}
