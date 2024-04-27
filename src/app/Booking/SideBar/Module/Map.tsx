"use client";
import { useBookingContext } from "@/Data/Context/BookingContext";
import { useEffect, useRef } from "react";
import BookingSideBarModule from "./Module";
import "./styles.css";

export default function BookingSideBarMap() {
  const { setOpenSideBar } = useBookingContext();
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
        <BookingSideBarModule
          key={index}
          title={sideBar[0]}
          link={sideBar[1]}
        />
      ))}
    </div>
  );
}

const sideBarArray: [string, string][] = [
  ["テイクアウトのご予約", ""],
  ["アクセス", ""],
  ["お問い合わせ", ""],
];
