import React from "react";

export default function BackgroundWrapper(props: any) {
  const { children, background } = props;
  return (
    <div
      className={`text-white px-4 ${
        background ? background : "bg-landing-party"
      }  h-screen bg-cover bg-center bg-no-repeat`}
      style={{
        backgroundSize: "100% 100%",
        // filter: "brightness(1.2) contrast(1.2)",
      }}
    >
      {children}
    </div>
  );
}
