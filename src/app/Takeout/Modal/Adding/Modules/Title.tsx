export default function ModalAddingTitle(props: { title: string }) {
  const { title } = props;
  return (
    <div className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-[#4d4d4d] text-[18px]">
      {title}
    </div>
  );
}
