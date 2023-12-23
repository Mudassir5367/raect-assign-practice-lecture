import React, { useState } from 'react'
import Child from '../leftingState/Child'

export default function Parent() {
    const [userData, setUserData] = useState({})
    const data = (obj) =>{
        console.log(obj);
        setUserData(obj)
    }
    return (
    <div>
    <h1>Lefting State || Child to Parent </h1>
    <Child fn={data} />
      <h1>{userData.name}</h1>
      <h1>{userData.age}</h1>
    </div>
  )
}
