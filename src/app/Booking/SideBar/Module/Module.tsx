import Link from "next/link";

export default function BookingSideBarModule(props: { title: string, link: string }) {
  const { title, link } = props;
  return (
    <Link href={`/${link}`} className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-white text-[18px] cursor-pointer">
      {title}
    </Link>
  );
}
