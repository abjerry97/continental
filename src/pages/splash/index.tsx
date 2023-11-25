import React from "react";
import PageBtn from "../../components/PageBtn";

export default function Splash() {
  return (
    <div className="flex items-center justify-center">
      <div
        className=" min-h-screen text-white flex flex-col justify-between  px-4 w-full md:w-8/12   lg:w-4/12 bg-background-party screen bg-cover bg-center bg-no-repeat "
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
            <PageBtn to="/home" text="Get started" />
            <div className="ContinentalStagSans-Light-Web text-center my-1 text-xs">
              Imprint | Data privacy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
