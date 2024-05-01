"use client";
import { useForm } from "react-hook-form";
import BookingFormMap from "./Form/Map";
import BookingFormType from "@/Data/Type/BookingForm";
import BookingBookBtn from "./Button";
import BookingHeader from "./Header/pages";
import { BookingContext } from "@/Data/Context/BookingContext";
import { useState } from "react";
import SideBar from "../Takeout/SideBar/pages";
import BookingSideBar from "./SideBar/pages";

export default function Booking() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const formValue = useForm<BookingFormType>({ mode: "onBlur" });
  return (
    <BookingContext.Provider value={{ openSideBar, setOpenSideBar }}>
      <div className="relative">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-10 max-w-[500px] w-[500px] justify-center my-20">
            <BookingFormMap formValue={formValue} />
            <BookingBookBtn />
          </div>
        </div>
        <BookingHeader />
        {openSideBar && <BookingSideBar />}
      </div>
    </BookingContext.Provider>
  );
}
