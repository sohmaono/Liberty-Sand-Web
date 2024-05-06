import ModalConfirmationMenuTop from "./Modules/MenuTop";
import ModalConfirmationMenuImage from "./Modules/Image";
import ModalConfirmationMenuBottom from "./Modules/MenuBottom";

export default function ModalConfirmationMenu() {
  return (
    <div className="flex flex-col items-center w-[360px] md:w-[600px] rounded-md">
      <ModalConfirmationMenuImage />
      <div className="flex flex-col items-center w-full p-[20px] bg-white rounded-b-md gap-5">
        <ModalConfirmationMenuTop />
        <ModalConfirmationMenuBottom />
      </div>
    </div>
  );
}
