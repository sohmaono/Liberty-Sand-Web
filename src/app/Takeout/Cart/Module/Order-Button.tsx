export default function CartOrderBtn() {
  return (
    <button
      type="submit"
      className="flex items-center justify-center py-[15px] bg-[color:var(--tokens-header-background)] rounded-[20px]"
    >
      <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[color:var(--tokens-card-background)] text-[22px]">
        注文する
      </div>
    </button>
  );
}
