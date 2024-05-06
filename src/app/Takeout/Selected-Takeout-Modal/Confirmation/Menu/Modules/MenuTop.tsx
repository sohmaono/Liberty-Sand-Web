import { useCustomContext } from "@/Data/Context/Context";
import ModalConfirmationAddings from "./Addings/pages";

export default function ModalConfirmationMenuTop() {
  const { selectedTakeout } = useCustomContext();
  return (
    <div className="flex flex-col items-start gap-[20px]">
      <div className="flex flex-col items-start md:gap-[20px] gap-[12px]">
        <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[color:var(--tokens-card-text)] md:text-[18px] text-[17px]">
          {selectedTakeout?.menu?.title}
          <br />（{selectedTakeout?.menu?.titleJP}）
        </div>
        <p className="[font-family:'Inter-ExtraBold_Italic',Helvetica] font-extrabold italic text-[color:var(--tokens-card-text)] md:text-[14px] text-[12px]">
          {selectedTakeout?.menu?.description}
        </p>
      </div>
      <ModalConfirmationAddings />
    </div>
  );
}
