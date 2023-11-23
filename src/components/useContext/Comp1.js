import React, { createContext } from 'react'
import Comp2 from './Comp2'

const Data = createContext()
 function Comp1() {
  // console.log({data});
  return (
    <>
    <Data.Provider value = {'Data is accessed from Comp1 using Context'}>
      <Comp2 />

    </Data.Provider>
    </>
  );
}
export default Comp1;
export { Data };
