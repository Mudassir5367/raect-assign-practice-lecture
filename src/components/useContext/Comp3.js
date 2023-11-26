import React,{useContext} from 'react'
import { Data } from './Comp1'

export default function Comp3() {
    // console.log(data);
    const receiveData = useContext(Data)
  return (
    <>
    <h1>{receiveData}</h1>
    <h1>Hello from Component 3 </h1>
    </>
  )
}
