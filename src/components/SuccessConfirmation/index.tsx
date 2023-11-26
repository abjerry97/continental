import SuccessConfirmationImage from "../../assets/background/images/Confirmation/Illustration_Confirmed.png";
import { usePageModal } from "../../context/PageModalProvider";
import ConfirmationLayout from "../ConfirmationWrapper";
import ErrorConfirmation from "../ErrorConfirmation";
import PageBtn from "../PageBtn";
export default function SuccessConfirmation() {
  const { showModal } = usePageModal();
  return (
    <ConfirmationLayout
      title={
        <>
          Thanks for you request. You will
          <br /> shortly receive a confirmation.
        </>
      }
      message="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua."
      image={SuccessConfirmationImage}
      button={
        <PageBtn text="Close" handleClick={showModal(<ErrorConfirmation />)} />
      }
    />
  );
}
