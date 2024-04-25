import BookingSideBarMap from "./Module/Map";

export default function BookingSideBar() {
  return (
    <div className="w-full h-full fixed inset-0 bg-black bg-opacity-50 z-30">
      <BookingSideBarMap />
    </div>
  );
}
