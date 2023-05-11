
import "./App.css"
import {useState} from 'react';
function App(){
  let [age,setAge] = useState(0);


  const increaseAge = ()=>{
   setAge(age+1);

  };
  return (
    <div>
      {age}
      <button onClick={increaseAge}>click Me</button>
    </div>
  )
}

export default App;