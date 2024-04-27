import AddingMenuType from "@/Data/Type/AddingMenu";

export default function ModalConfirmationAddingsDeleteBtn(props: {
  handleDelete: () => void;
}) {
  const { handleDelete } = props;
  return (
    <button
      className="flex h-6 w-14 bg-primary items-center justify-center rounded-full"
      onClick={handleDelete}
    >
      <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-white text-[13px]">
        削除
      </p>
    </button>
  );
}
