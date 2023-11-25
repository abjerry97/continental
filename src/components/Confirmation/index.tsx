import React from "react";
import FormInput from "../FormInput";
import PageBtn from "../PageBtn";
import ConfitmationImage from "../../assets/background/images/Confirmation/Illustration_Confirmed.png"
export default function Confirmation() {
  return (
    <div className=" min-h-screen container">
      <div className=" bg-header-party  bg-cover bg-center p-4 bg-no-repeat h-52"
       style={{
        backgroundSize: "100% 100%",
        // filter: "brightness(1.2) contrast(1.2)",
      }}>
        <h3 className="font-semibold text-sm">I’ll inform you about the next milestones</h3>
      </div>
 <div className=" text-[#555555] flex flex-col items-center justify-between p-4">
  <div className="">Something went wrong.</div>

<div className=" h-32 w-32">
  <img src={ConfitmationImage} alt=""  width="100%"/>
  </div>
  <div className="mb-4 text-xs font-semibold">Let’s try again. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>
        <PageBtn />
      </div>
    </div>
  );
}
