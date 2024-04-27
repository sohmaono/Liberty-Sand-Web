"use client"
import { Dispatch, SetStateAction, createContext, useContext } from "react";

type ContextType = {
  openSideBar: boolean;
  setOpenSideBar: Dispatch<SetStateAction<boolean>>;
};

export const BookingContext = createContext<ContextType | undefined>(undefined);

export const useBookingContext = () => {
  const bookingContext = useContext(BookingContext);
  if (!bookingContext) {
    throw new Error();
  }
  return bookingContext;
};
