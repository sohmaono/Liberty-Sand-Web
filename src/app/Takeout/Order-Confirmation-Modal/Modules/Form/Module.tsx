export default function OrderConfirmationFormModule(props: {
  title: string;
  value: string;
}) {
  const { title, value } = props;
  return (
    <div className="flex flex-col items-start gap-[15px]">
      <p className="text-textcolor text-[18px] relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold">
        {title}
      </p>
      <p className="text-[#4e4e4e] text-[22px] [font-family:'Inter-SemiBold',Helvetica] font-semibold">
        {value}
      </p>
    </div>
  );
}
