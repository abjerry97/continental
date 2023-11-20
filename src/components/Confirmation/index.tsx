import React from "react";
import FormInput from "../FormInput";
import PageBtn from "../PageBtn";

export default function Confirmation() {
  return (
    <div className=" container px-4">
      <h3>Thanks for you request. You will shortly receive a confirmation.</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <FormInput />
      <FormInput />
      <FormInput />
      <FormInput />
      <FormInput />
      <PageBtn />
    </div>
  );
}
