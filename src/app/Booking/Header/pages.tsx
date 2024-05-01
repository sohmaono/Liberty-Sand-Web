import BookingHeaderSideBarBtn from "./Modules/SideBarBtn";
import BookingHeaderTitle from "./Modules/Title";

export default function BookingHeader() {
  return (
    <div className="flex flex-col items-center gap-[25px] py-[10px] bg-primary w-full fixed left-0 top-0">
      <div className="flex items-center justify-between px-[20px] w-full">
        <BookingHeaderSideBarBtn />
        <BookingHeaderTitle />
        <div />
      </div>
    </div>
  );
}
