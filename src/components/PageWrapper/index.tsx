import Modal from "../Modal";

export default function PageWrapper(props: any) {
  return (
    <div className=" min-h-screen flex items-center justify-center bg-white">
      <div className="w-full md:w-8/12 lg:w-4/12">{props.children}</div>
      <Modal/>
    </div>
  );
}
