import React from "react";
import LandingCard from "../../components/LandingCard";
import PageBtn from "../../components/PageBtn";
import Modal from "../../components/Modal";
import Registration from "../../components/Registration";

export default function Home() {
  return (
    <div
      className="text-white flex flex-col justify-between  px-4 bg-background-party h-screen bg-cover bg-center bg-no-repeat "
      // style={{ backgroundSize: "100%" }}
    >
      {/* <Modal>
      <Registration/>
      </Modal> */}

      <div className="">
        <div className="flex justify-between items-center">
          <div className="text-xs">Back</div>
          <div className="">Continental</div>
        </div>
        <div className="mt-3">
          <h3 className=" font-semibold text-2xl">Remember <br/> these packages?</h3>
        </div>
      </div>
        <Modal>
      <Registration/>
      </Modal>
      <div className="">
        <div className="">
          <LandingCard />
          <LandingCard />
          <LandingCard />
          <LandingCard />
        </div>
        {/* <PageBtn />
        <div className="text-center text-xs py-2"> Imprint | Data privacy</div> */}
      </div>
    </div>
  );
}
//   style={{
//     clipPath:
//       "polygon(0 10%, 10% 0,  90% 0,  100% 10%, 100% 90%,  90% 100%,  10% 100%, 0% 90%, 0% 10%)",
//   }}
