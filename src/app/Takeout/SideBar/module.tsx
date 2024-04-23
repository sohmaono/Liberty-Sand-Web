export default function SideBarModule(props: { title: string }) {
  const { title } = props;
  return (
    <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-white text-[18px] cursor-pointer">
      {title}
    </p>
  );
}
