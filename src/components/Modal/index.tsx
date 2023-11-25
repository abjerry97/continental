import React from "react";
import { usePageModal } from "../../context/PageModalProvider";

export default function Modal(props:any) {
  const {isOpen,toggleModalState } = usePageModal()
  return (
    <>
      {isOpen ? (
        <div className=" inset-0 absolute  z-50 bg-white">
          <button
            className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            onClick={() => toggleModalState()}
          >
            <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
              ×
            </span>
          </button>
          {props.children}
        </div>
      ) : (
        // <button
        //   className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        //   type="button"
        //   onClick={() => toggleModalState(true)}
        // > 
        // </button>
        <></>
      )}
    </>
  );
}
