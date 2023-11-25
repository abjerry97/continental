import React from "react";

export default function FormInput({ name, type, placeholder, value }: any) {
  return (
    <div
      className="flex items-center justify-center py-3 px-4 rounded-full mb-2"
      style={{
        background: "#F0F0F0 0% 0% no-repeat padding-box",
      }}
    >
      <input
        name={name || ""}
        type={type || "text"}
        className="text-xs w-full border-none bg-inherit"
        placeholder={placeholder || ""}
      />
    </div>
  );
}
