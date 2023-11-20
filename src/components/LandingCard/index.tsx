import React from "react";

export default function LandingCard() {
  return (
    <div
      className="flex w-full mb-2 p-4 text-white bg-white"
      style={{
        background:
          "transparent linear-gradient(91deg, #042857 0%, #134280 100%) 0% 0% no-repeat padding-box",
        clipPath:
          "polygon(  0% 15px, 15px 0%,  calc(100% - 15px) 0%, 100% 15px, 100% calc(100% - 15px),  calc(100% - 15px) 100%, 15px 100%,   0 calc(100% - 15px) )" /* bottom left */,
      }}
    >
      <div className="w-8/12">
        <h3 className=" font-semibold">Brunch @ Honey Salt</h3>
        <p className=" text-xs">
          Get upgraded to an entirely new skill level with the professional
          instructions by Bike Guide
        </p>
      </div>
      <div
        className="w-4/12 "
        // style={{
        //   backgroundImage:
        //    ,
        // }}
      >
        dsd
      </div>
    </div>
  );
}
