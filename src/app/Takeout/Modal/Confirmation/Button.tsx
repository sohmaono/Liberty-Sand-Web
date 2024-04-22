import { useCustomContext } from "@/Data/Context/Context";

export default function ModalConfirmationButton() {
  const { selectedTakeout, setSelectedTakeout, setCartItems } =
    useCustomContext();
  const addFunc = () => {
    setCartItems((prev) => [...prev, selectedTakeout!]);
    setSelectedTakeout(null);
  };
  return <button onClick={addFunc}>追加する</button>;
}
