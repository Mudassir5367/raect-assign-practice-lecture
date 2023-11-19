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
    const removeData = (id) =>{
        console.log(id);
        const newData = clear.filter((value)=>{
            return value.id !== id;
        })
        setClear(newData)
    }
  return (
    <>
      {
        clear.map((x)=>{
        return(
            <h1 key={x.id}>{x.fName}
            <button onClick = {() => {removeData(x.id)}}>remove</button>
            </h1>
        )
      })
      }
      <button onClick = {clearData}>Clear</button>
    </>
  )
}
