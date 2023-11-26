import React,{useEffect, useState}  from 'react'
import axios from 'axios'

export default function JsonFectingAxios() {
  const[data, setData] = useState([])

  useEffect(()=>{
 axios.get('https://jsonplaceholder.typicode.com/users')
.then((value)=>{
  console.log(value.data);
  setData(value.data);
})
  },[])
  return (
    <>
  <table border='1'>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Username</th>
        <th>Phone</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {data.map((x) => {
        return (
          <tr key={x.id}>
            <td>{x.id}</td>
            <td>{x.name}</td>
            <td>{x.username}</td>
            <td>{x.phone}</td>
            <td>{x.email}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
</>
  );

}
