import React from "react";
import FormInput from "../FormInput";
import PageBtn from "../PageBtn";
import FormCheckbox from "../FormCheckbox";
import { usePageModal } from "../../context/PageModalProvider";
import Confirmation from "../ConfirmationWrapper";
import AuthModalWrapper from "../AuthModalWrapper";
import ErrorConfirmation from "../ErrorConfirmation";
import SuccessConfirmation from "../SuccessConfirmation";

export default function Registration() {
  const { showModal } = usePageModal();
  return (
    <AuthModalWrapper
      header={
        <>
          I’ll inform you <br />
          about the next milestones
        </>
      }
    >
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
          <div className="flex items-center gap-2 mt-12 mb-6">
            <FormCheckbox />
            <p className="text-xs ContinentalStagSans-Medium-Web">
              Data privacy consent (Read more)
            </p>
          </div>
        </div>
        <PageBtn text="Register now" handleClick={showModal(<SuccessConfirmation />)} />
      </div>
    </AuthModalWrapper>
  );
}
