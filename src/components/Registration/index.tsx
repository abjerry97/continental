import React from "react";
import FormInput from "../FormInput";
import PageBtn from "../PageBtn";

export default function Registration() {
  return (
    <div className="">
      <div className="bg-header-party px-4 bg-cover bg-no-repeat bg-center h-60">
        <h3>I’ll inform you about the next milestones</h3>
      </div>

      <div className="px-4 text-black">
        <p className="text-black mb-4">
          The developments of the Continental eTravel Companion is at full speed
          and we’ll be soon reaching the next milestone. If you want to be
          informed first hand, share some information and we’ll inform you
          exclusively.
        </p>

        <FormInput />
        <FormInput />
        <FormInput />
        <FormInput /> 
        <div className="flex gap-2 mb-2">
        <input type="checkbox" name="" id="" /> <p>Data privacy consent (Read more)</p>
        </div>
        <PageBtn />
      </div>
    </div>
  );
}
