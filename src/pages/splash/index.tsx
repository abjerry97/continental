import React from "react";
import PageBtn from "../../components/PageBtn";

export default function Splash() {
  return (
    <div className="   w-screen text-white flex flex-col justify-between  px-4 bg-background-party min-h-screen bg-cover bg-center bg-no-repeat ">
      <div className=" ">
        <div className=" flex justify-between mb-2">
          <div className="">Back</div>
          <div className="">Continental</div>
        </div>
        <div className="  ">
          <h3 className=" text-2xl">
            <span className=" font-semibold"> Hello Friend,</span>
            <br /> Great seeing you again!
          </h3>
        </div>
      </div>

      <div className="  ">
        <div className=" "></div>
        <div className=" py-3">
          <p className="mb-6">
            It’s nice meeting you at CES. It was pretty busy, wasn’t it? Let me
            explain our concept around the Continental eTravel Companion to you
            again at your leisure.
          </p>

          <PageBtn />
          <div className="text-center my-1 text-xs">Imprint | Data privacy</div>
        </div>
      </div>
    </div>
  );
}
