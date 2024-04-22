"use client";
import { CustomContext } from "@/Data/Context/Context";
import HeaderTabType from "@/Data/Type/HeaderTab";
import { useState } from "react";
import Takeout from "./Takeout/page";
import TakeoutOrderType from "@/Data/Type/TakeoutOrder";

export default function Home() {
  const [tab, setTab] = useState<HeaderTabType>("SANDWICH");
  const [selectedTakeout, setSelectedTakeout] =
    useState<TakeoutOrderType | null>(null);
  return (
    <CustomContext.Provider
      value={{ tab, setTab, selectedTakeout, setSelectedTakeout }}
    >
      <Takeout />
    </CustomContext.Provider>
  );
}
