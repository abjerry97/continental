import React from "react";
import FormInput from "../FormInput";
import PageBtn from "../PageBtn";
import ErrorConfirmationImage from "../../assets/background/images/Confirmation/Illustration_Confirmed.png";
import AuthModalWrapper from "../AuthModalWrapper";
import ConfirmationLayout from "../ConfirmationWrapper";
export default function ErrorConfirmation() {
  return (
    <ConfirmationLayout
      header="  Something went wrong.
    <br /> Let’s try again."
      message="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua."
      image={ErrorConfirmationImage}
    />
  );
}
