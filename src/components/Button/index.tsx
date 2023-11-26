export default function Button({ text, handleClick }: any) {
  return (
    <button
      onClick={handleClick || (() => {})}
      className="ContinentalStagSans-Medium-Web rounded-full text-black w-full md:w-6/12 p-2 font-bold m-auto block self-center mb-4"
      style={{ background: "#FFA500 0% 0% no-repeat padding-box" }}
    >
      {text || "Get started"}
    </button>
  );
}
