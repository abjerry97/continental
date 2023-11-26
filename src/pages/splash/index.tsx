import React from "react";
import PageBtn from "../../components/PageBtn";
import Footer from "../../components/Footer";
import PageWrapper from "../../components/PageWrapper";
import PageBtnWithLink from "../../components/PageBtnWithLink";

export default function Splash() {
  return (
    <PageWrapper>
      <div
        className=" min-h-screen text-white flex flex-col justify-between  px-4 w-full bg-background-party bg-cover bg-center bg-no-repeat "
        style={{
          backgroundSize: "100% 100%",
        }}
      >
        <div className=" ">
          <div className=" flex justify-between mb-2 h-10">
            <div className="">{/* Back */}</div>
            <div className="">{/* Continental */}</div>
          </div>
          <div className="  ">
            <h3 className="text-2xl text ContinentalStagSans-Medium-Web">
              <span className=" font-semibold "> Hello Friend,</span>
              <br /> Great seeing you again!
            </h3>
          </div>
        </div>

        <div className="  "> 
          <div className=" py-3">
            <p className="mb-6 ContinentalStagSans-Medium-Web">
              It’s nice meeting you at CES. It was pretty busy, wasn’t it? Let
              me explain our concept around the Continental eTravel Companion to
              you again at your leisure.
            </p>
            <PageBtnWithLink to="/home" text="Get started" />
            
            <Footer/>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
