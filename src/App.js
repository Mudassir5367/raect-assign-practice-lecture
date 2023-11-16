import  './App.css';
import React, {  useState } from 'react'
import Child from './components/Child';

function App() {
  const [obj] = useState( {
    name:'Mudassir Hussain',
    id:'40',
    designation:'Software Trainee Engineer'
  })

  return (
    <>
      <div>
   <Child obj1 = {obj}/>
      </div>
    </>
  );
}

export default App;
