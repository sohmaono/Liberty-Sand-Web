import Image from "next/image";

export default function ComponentCloseBtn(props: { closeFunc: () => void }) {
  const { closeFunc } = props;
  return (
    <button
      className="bg-black bg-opacity-50 rounded-full h-max w-max p-2"
      onClick={closeFunc}
    >
      <div className="w-4 h-4 relative">
        <Image
          alt="Close"
          src={`/Components/close-icon-2.svg`}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </button>
  );
}
