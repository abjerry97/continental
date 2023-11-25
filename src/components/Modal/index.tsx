import { usePageModal } from "../../context/PageModalProvider";

export default function Modal(props:any) {
  const {isOpen,toggleModalState } = usePageModal()
  return (
    <>
      {isOpen ? (
        <div className="block m-auto items-center w-full md:w-6/12 lg:w-4/12 inset-0 max-h-screen  fixed bg-black ">
        <div className="h-[calc(100%-36px)] m-3 z-50 bg-white opacity-100 rounded-xl border-2 border-white overflow-hidden">
          <button
            className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            onClick={() => toggleModalState()}
          >
            <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
              ×
            </span>
          </button> 
          {props.children}
        </div></div>
      ) : (
        <></>
      )}
    </>
  );
}
