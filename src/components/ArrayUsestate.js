import React, { useState } from 'react'

export default function ArrayUsestate() {
    const data = [
        {id:0, fName:'Mudassir',lName:'Hussain'},
        {id:1, fName:'Afaq',lName:'Nawaz'},
    ]
    const [clear, setClear] = useState(data)
    const clearData = ()=>{
        setClear([])
    }
  return (
    <>
      {
        clear.map((x)=><h1 key={x.id}>{x.fName}</h1>
        )
      }
      <button onClick = {clearData}>Clear</button>
    </>
  )
}
