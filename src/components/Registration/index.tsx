import React from "react";
import FormInput from "../FormInput";
import PageBtn from "../PageBtn";

export default function Registration() {
  return (
    <div className=" container h-full">
      <div
        className=" bg-header-party  bg-cover bg-center p-4 bg-no-repeat h-52"
        style={{
          backgroundSize: "100% 100%", 
        }}
      >
        <h3 className="font-semibold text-xl ContinentalStagSans-Medium-Web">
          I’ll inform you <br/>about the next milestones
        </h3>
      </div>

      <div className="px-4 text-black flex flex-col justify-between ">
        <p className="text-black mb-4 text-sm ContinentalStagSans-Medium-Web mt-5">
          The developments of the Continental eTravel Companion is at full speed
          and we’ll be soon reaching the next milestone. If you want to be
          informed first hand, share some information and we’ll inform you
          exclusively.
        </p>
        <div className="mt-5 mb-4">
          <FormInput name="" placeholder="First name" type="" />
          <FormInput name="" placeholder="Last name (optional)" type="" />
          <FormInput name="" placeholder="Email" type="email" />
          <div className="flex gap-2 mt-12 mb-6">
            <input type="checkbox" name="" id="" />{" "}
            <p className="text-xs">Data privacy consent (Read more)</p>
          </div>
        </div>
        <PageBtn />
      </div>
    </div>
  );
}
