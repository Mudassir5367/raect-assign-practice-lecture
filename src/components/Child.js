import React, { useState } from 'react'

export default function Child(props) {
    console.log(props);
    const [btn, setBtn] = useState()
    const submit = () =>{
      setBtn(props.obj1.name = 'MH', props.obj1.id = '12',props.obj1.designation = 'Software Engineer')
    }
  return (
    <>
       <div style={{backgroundColor:'indigo',color:'gold',textAlign:'center'}}>
       <h1>{props.obj1.name}</h1>
        <h1>{props.obj1.id}</h1>
        <h1>{props.obj1.designation}</h1>
       <button onClick={submit}>Submit</button>
       </div>
    </>
  )
}
