import React from "react";
import FormInput from "../FormInput";
import PageBtn from "../PageBtn";
import ConfirmationImage from "../../assets/background/images/Confirmation/Illustration_Confirmed.png";
import AuthModalWrapper from "../AuthModalWrapper";
export default function ConfirmationLayout({title,message,image}:any) {
  return (
    <AuthModalWrapper
      header={
        <>
          I’ll inform you <br />
          about the next milestones
        </>
      }
    >
      <div className=" text-[#555555] flex flex-col items-center justify-between p-4">
        <div className=" text-center ContinentalStagSans-Medium-Web text-xl my-4">
       {title|| ""}
        </div>

        <div className=" h-32 w-32 my-4">
          <img src={image || ""} alt="" width="100%" />
        </div>
        <div className="mb-10 text-center ContinentalStagSans-Medium-Web text-xl">
         {message}
        </div>
        <PageBtn  text="Close"/>
      </div>
    </AuthModalWrapper>
  );
}
