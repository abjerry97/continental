import React from 'react'

import { Link, Navigate } from "react-router-dom";
export default function PageBtn() {
  return (
    <Link to="/home">
    <button onClick={()=>{
    //  return <Navigate to="/home" replace={true} />
    }}
    className=" rounded-full w-full md:w-6/12 p-2 font-bold m-auto block self-center mb-4"
    style={{ background: "#FFA500 0% 0% no-repeat padding-box" }}
  >
    Get started
  </button>
  </Link>
  )
}
