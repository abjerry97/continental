import React from 'react'
import HomeDetails from '../HomeDetails'

import homeDetailsData from "../../assets/homeDetails.json"
export default function HomeDetailsWrapper() {
  return (
    <div>
        {homeDetailsData.map((data,index)=>{
            return ( <HomeDetails key={index} data={data} />)
        })} </div>
  )
}
