export default function AuthModalWrapper(props: any) {
  return (
    <div className=" container h-full">
      <div
        className=" bg-header-party  bg-cover bg-center p-4 bg-no-repeat h-52"
        style={{
          backgroundSize: "100% 100%",
        }}
      >
        <h3 className="font-semibold text-xl ContinentalStagSans-Medium-Web text-white">
          {props.header}
        </h3>
      </div>

      {props.children}
    </div>
  );
}
