import React from 'react'
import Comp3 from './Comp3'

export default function Comp2({props}) {
    // console.log(props);
  return (
    <>
    {/* <h1>{props}</h1> */}
      <Comp3 data = {props}/>
    </>
  )
}
