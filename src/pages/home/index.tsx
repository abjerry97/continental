import React from "react";
import PageBtn from "../../components/PageBtn";
import Modal from "../../components/Modal";
import Registration from "../../components/Registration";
import { usePageModal } from "../../context/PageModalProvider";
import HomeDetails from "../../components/HomeDetails";
import Footer from "../../components/Footer";
import PageWrapper from "../../components/PageWrapper";
import BackgroundWrapper from "../../components/BackgroundWrapper";
import HomeDetailsWrapper from "../../components/HomeDetailsWrapper";
export default function Home() {
  const { showModal } = usePageModal();
  return (
    <PageWrapper>
      <BackgroundWrapper background="bg-landing-party">  
      </BackgroundWrapper>
      <div className="">
        <div className=" px-4 mb-8">
          <p className="mb-4 ContinentalStagSans-Medium-Web">
            <span className=" font-bold "> Our eTravel Companion</span> created
            these in real time based on the requirements and interest you
            assigned to me, Lorem, Lorem, Lorem, Lorem, Lorem, …
          </p>

          <PageBtn text="Download PowerPoint" />

          <PageBtn
            text="Stay informed"
            handleClick={showModal(<Registration />)}
          />
        </div>

        <HomeDetailsWrapper/>
        <Footer />
      </div>
    </PageWrapper>
  );
}
