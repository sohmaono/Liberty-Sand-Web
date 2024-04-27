import { useCustomContext } from "@/Data/Context/Context";
import ModalConfirmationAddings from "./Addings/page";

export default function ModalConfirmationMenuTop() {
  const { selectedTakeout } = useCustomContext();
  return (
    <div className="flex flex-col items-start gap-[20px]">
      <div className="flex flex-col items-start gap-[20px]">
        <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[color:var(--tokens-card-text)] text-[18px]">
          {selectedTakeout?.menu?.title}
          <br />（{selectedTakeout?.menu?.titleJP}）
        </div>
        <p className="[font-family:'Inter-ExtraBold_Italic',Helvetica] font-extrabold italic text-[color:var(--tokens-card-text)] text-[14px]">
          {selectedTakeout?.menu?.description}
        </p>
      </div>
      <ModalConfirmationAddings />
    </div>
  );
}
