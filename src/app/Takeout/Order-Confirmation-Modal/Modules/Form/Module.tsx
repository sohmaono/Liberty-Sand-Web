export default function OrderConfirmationFormModule(props: {
  title: string;
  value: string;
}) {
  const { title, value } = props;
  return (
    <div className="flex flex-col items-start md:gap-[12px] gap-[4px]">
      <p className="text-black md:text-[18px] text-[15px] [font-family:'Inter-SemiBold',Helvetica] font-semibold">
        {title}
      </p>
      <p className="text-[#4e4e4e] md:text-[20px] text-[19px] [font-family:'Inter-SemiBold',Helvetica] font-semibold">
        {value}
      </p>
    </div>
  );
}
