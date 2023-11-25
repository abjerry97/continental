import React from "react";
import LandingCard from "../../components/LandingCard";
import PageBtn from "../../components/PageBtn";
import Modal from "../../components/Modal";
import Registration from "../../components/Registration";
import { usePageModal } from "../../context/PageModalProvider";
import Confirmation from "../../components/Confirmation";
import HomeDetails from "../../components/HomeDetails";

export default function Home() {
  const { toggleModalState } = usePageModal();
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="w-full md:w-8/12 lg:w-4/12">
        <div
          className="text-white px-4 bg-landing-party h-screen bg-cover bg-center bg-no-repeat "
          style={{
            backgroundSize: "100% 100%",
            // filter: "brightness(1.2) contrast(1.2)",
          }}
        >
          <Modal>
            <Registration/>
            {/* <Confirmation /> */}
          </Modal> 
        </div>
        <div className="">
          <div className=" px-4 mb-8">
            <p className="mb-4">
              <span className=" font-bold"> Our eTravel Companion</span> created
              these in real time based on the requirements and interest you
              assigned to me, Lorem, Lorem, Lorem, Lorem, Lorem, …
            </p>

            <PageBtn text="Download PowerPoint" />

            <PageBtn text="Stay informed" handleClick={toggleModalState} />
          </div>

          <HomeDetails />
          <HomeDetails />
          <HomeDetails />
          <div className=" my-4 text-center text-xs">
            Imprint | Data privacy
          </div>
        </div>
      </div>
    </div>
  );
}
