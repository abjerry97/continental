export default function HomeDetails({ data }: any) {
  return (
    <div className="bg-[#F0F0F0] mb-5 ContinentalStagSans-Medium-Web">
      <div className="py-3 px-4 bg-[#EECFA1] font-semibold">
        {data.title || ""}
      </div>
      <p className="px-4 py-6 ">{data.content || ""}</p>
    </div>
  );
}
