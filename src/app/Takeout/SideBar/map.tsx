"use client";
import { useCustomContext } from "@/Data/Context/Context";
import SideBarModule from "./module";
import "./styles.css";
import { useEffect, useRef } from "react";

export default function SideBarMap() {
  const { setOpenSideBar } = useCustomContext();
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpenSideBar(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [setOpenSideBar]);
  return (
    <div
      ref={wrapperRef}
      className="flex flex-col items-start gap-[30px] bg-primary pr-[60px] pl-[20px] py-[60px] h-full slide-in absolute top-0 left-0"
    >
      {sideBarArray.map((sideBar, index) => (
        <SideBarModule key={index} title={sideBar[0]} link={sideBar[1]} />
      ))}
    </div>
  );
}

const sideBarArray: [string, string][] = [
  ["席のご予約", "Booking"],
  ["アクセス", ""],
  ["お問い合わせ", ""],
];
