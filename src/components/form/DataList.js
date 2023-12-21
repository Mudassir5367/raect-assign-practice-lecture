import React, { useState } from "react";

export default function DataList() {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const [arrData, setArrData] = useState([]);

  const changeInput = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    console.log(name, val);
    setUserData({ ...userData, [name]: val });
  };

  const submitData = (e) => {
    e.preventDefault();

    const data = { ...userData, id: new Date().getTime().toString() };
    console.log(data);
    setArrData([...arrData, data]);
    setUserData({  name: "", age: "", email: "",})
  };
  return (
    <>
      <form onSubmit={submitData}>
        <br />
        <br />
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={changeInput}
          placehoder="Enter Name"
        />
        <br />
        <br />
        <input
          type="tel"
          name="age"
          value={userData.age}
          onChange={changeInput}
          placehoder="Enter Age"
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={changeInput}
          placehoder="Enter email"
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
      <br />
      {arrData.map((data) => {
        return (
          <>
            <table border = '1'>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
              </tr>
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.email}</td>
              </tr>
            </table>
          </>
        );
      })}
    </>
  );
}





// import React, { useState } from "react";

// export default function DataList() {
//   const [data, setData] = useState({
//     userData: {
//       name: "",
//       age: "",
//       email: "",
//     },
//     arrData: [],
//   });

//   const changeInput = (e) => {
//     const name = e.target.name;
//     const val = e.target.value;
//     console.log(name, val);
    
//     setData((prevData) => ({
//       ...prevData,
//       userData: { ...prevData.userData, [name]: val },
//     }));
//   };

//   const submitData = (e) => {
//     e.preventDefault();

//     const newData = {
//       ...data.userData,
//       id: new Date().getTime().toString(),
//     };

//     setData((prevData) => ({
//       userData: { name: "", age: "", email: "" },
//       arrData: [...prevData.arrData, newData],
//     }));
//   };

//   return (
//     <>
//       <form onSubmit={submitData}>
//         <br />
//         <br />
//         <input
//           type="text"
//           name="name"
//           value={data.userData.name}
//           onChange={changeInput}
//           placeholder="Enter Name"
//         />
//         <br />
//         <br />
//         <input
//           type="tel"
//           name="age"
//           value={data.userData.age}
//           onChange={changeInput}
//           placeholder="Enter Age"
//         />
//         <br />
//         <br />
//         <input
//           type="email"
//           name="email"
//           value={data.userData.email}
//           onChange={changeInput}
//           placeholder="Enter email"
//         />
//         <br />
//         <br />
//         <button>Submit</button>
//       </form>
//       <br />
//       {data.arrData.map((item) => (
//         <table key={item.id} border="1">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Age</th>
//               <th>Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>{item.name}</td>
//               <td>{item.age}</td>
//               <td>{item.email}</td>
//             </tr>
//           </tbody>
//         </table>
//       ))}
//     </>
//   );
// }
