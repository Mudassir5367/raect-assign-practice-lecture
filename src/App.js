import  './App.css';
import React from 'react'
// import ArrayUsestate from './components/ArrayUsestate';
// import UseEffect from './components/UseEffect';
import UseReducer from './components/UseReducer';
// import Child from './components/Child';
// import ConditionalRandering from './components/ConditionalRandering';

function App() {
  // const [obj] = useState( {
  //   name:'Mudassir Hussain',
  //   id:'40',
  //   designation:'Software Trainee Engineer'
  // })
  // const [obj2] = useState({
  //   name:'Hussain',age:18
  // })

  return (
    <>
      <div>
   {/* <Child obj1 = {obj}/> */}
   {/* <ConditionalRandering obj1 = {obj} obj3 = {obj2} /> */}
   {/* <ArrayUsestate/> */}
   {/* <UseEffect/> */}
   <UseReducer/>

      </div>
    </>
  );
}

export default App;
