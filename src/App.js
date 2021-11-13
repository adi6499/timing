import React, { useState } from 'react';
import "./app.css"
function App() {
  let [time,timeUpdate] = useState(0);
  
  let GetTime =()=>{
   
    setInterval(()=>{
      let timing = new Date().toLocaleTimeString()
      timeUpdate(timing)
    },1000)
   
  }
 
   
      let date = new Date().toLocaleDateString()
  
  return (
   <>
   <div className="contain">
   <h1 className="time">Time: {time}</h1> 
   <button onClick={GetTime}>Get Time</button>

    <h1 className="date">Date:{date}</h1>
   </div>
   </>
  );
}

export default App;
