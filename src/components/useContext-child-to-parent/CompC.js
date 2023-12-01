import React, { createContext, useState } from 'react'
import CompA from './CompA'

const Data = createContext()
 function Comp3() {
    const [item, setItem] = useState('')

    const updateData = (newData) =>{
        setItem(newData)
    }
  return (
    <div>
      <Data.Provider value = {{ item, updateData }}> 
      <CompA/>
    </Data.Provider>
    </div>
  )
}
export { Data, Comp3 };