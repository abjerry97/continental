import ErrorConfirmationImage from "../../assets/background/images/Confirmation/Illustration_Error.png";
import ConfirmationLayout from "../ConfirmationWrapper";
import PageBtnWithLink from "../PageBtnWithLink";
import { usePageModal } from "../../context/PageModalProvider";
export default function ErrorConfirmation() {
  const { closeModal } = usePageModal();
  return (
    <ConfirmationLayout
      title={
        <>
          {" "}
          Something went wrong.
         Let’s try again."
        </>
      }
      message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua."
      image={ErrorConfirmationImage}
      button={
        <PageBtnWithLink to="/" text="Try Again" handleClick={closeModal} />
      }
    />
  );
}
