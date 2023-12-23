import React from 'react'

export default function Child(props) {
    // console.log(props);
    const obj = {name:'Mudassir Hussain', age:24}
  return (
    <div>
      <button onClick={()=> props.fn(obj)}>Click Me</button>
    </div>
  )
}
