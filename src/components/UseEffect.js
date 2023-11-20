import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        if(count >= 1){
            document.title = `Chats ${count}`
        }else{
            document.title = `Chats`
        }
        console.log('useEffect render');
    }, [count])

    useEffect(()=>{
        console.log('another useEffect for another purpose');
    },[])
    console.log('outside the useEffect');
  return (
    <>
      <h1>{count}</h1>
      <button onClick = {()=>setCount(count+1)}>Click</button>
    </>
  )
}
