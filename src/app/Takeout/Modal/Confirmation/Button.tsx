import { useCustomContext } from "@/Data/Context/Context";

export default function ModalConfirmationButton() {
  const { selectedTakeout, setSelectedTakeout, cartItems, setCartItems, tab } =
    useCustomContext();
  const addFunc = () => {
    if (tab !== "CART") {
      setCartItems((prev) => [...prev, selectedTakeout!]);
      setSelectedTakeout(null);
    } else {
      var index = 0;

      for (const cartItem of cartItems) {
        if (selectedTakeout?.id === cartItem.id) {
          break;
        }
        index += 1;
      }
      var copiedCartItems = cartItems;
      copiedCartItems[index] = selectedTakeout!;
      setCartItems(copiedCartItems);
      setSelectedTakeout(null);
    }
  };
  return <button onClick={addFunc}>追加する</button>;
}
