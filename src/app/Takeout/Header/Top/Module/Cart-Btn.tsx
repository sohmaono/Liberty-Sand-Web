import { useCustomContext } from "@/Data/Context/Context";
import Image from "next/image";

export default function HeaderCartBtn() {
  const { cartItems, tab, setTab } = useCustomContext();
  const selectCart = () => {
    if (cartItems.length !== 0) {
      setTab("CART");
    }
  };
  return (
    <button
      className={`flex items-center gap-3 py-1 px-3 ${
        tab === "CART" && "bg-white bg-opacity-20 rounded-lg"
      } ${cartItems.length === 0 && "opacity-50"}`}
      onClick={selectCart}
    >
      <div className="flex flex-col items-start space-y-[-5px] ">
        <p className="[font-family:'Inter-BlackItalic',Helvetica] font-black italic text-token-header-text-duplicate text-[15px] md:text-[17px]">
          CART
        </p>
        <p className="[font-family:'Inter-BlackItalic',Helvetica] font-semibold italic text-token-header-text-duplicate text-[8px] md:text-[10px]">
          ご注文はこちらから
        </p>
      </div>
      <div className="md:w-[30px] md:h-[30px] w-[25px] h-[25px] relative">
        <Image
          alt="Cart"
          src={`/Header/Header-Cart-Icon.svg`}
          className="rounded-md"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="absolute -top-[2px] -right-[2px] w-[14px] h-[14px] rounded-full bg-black flex items-center justify-center">
          <p className="text-white text-[11px]">{cartItems.length}</p>
        </div>
      </div>
    </button>
  );
}
