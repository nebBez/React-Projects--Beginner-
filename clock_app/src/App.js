import './App.css';
import {useState, useEffect} from 'react';

function App() {

  // const d = new Date();
 // const timeRN = (d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());


  const [time, changeTime] = useState(new Date());


  useEffect(()=>{

    setInterval(()=>changeTime(new Date()), 1000) 
    // SetInterval works by executing a function after the specified time 
  }, []
  )

  return (

    <div className="app">
      <h2>Simple Clock App</h2>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>

  )

}

export default App;
