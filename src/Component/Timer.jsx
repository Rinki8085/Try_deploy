import { useEffect, useRef, useState } from "react";
import '../style.css';

function Timer() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const timerRef = useRef(null);
  useEffect(() => {
    // cleanup
    return stopTimer;
  }, []);

  const startTimer = () => {
    setShow(false);
    if (timerRef.current !== null) return;
    timerRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };

  const stopTimer = () => {
    setShow(true);
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setCount(0);
  };

  const handleChange = () =>{
    //console.log('Hii')
  }

  return (
    <div className="Timer">
      <h3>Timer</h3>
      <h1>{count}</h1>
     
      <div style={{display:"flex"}}>
        <label for="min"><input type='text' onChange={handleChange}/>m</label>
        <label for="min"><input type='text' onChange={handleChange}/>s</label>
      </div>
      <div>
        {show?<button onClick={startTimer}>START</button>: <button onClick={stopTimer}>STOP</button>}
        {/* <button onClick={startTimer}>START</button>
        <button onClick={stopTimer}>STOP</button> */}
        <button onClick={resetTimer}>RESET</button>
      </div>
    </div>
  );
}

export default Timer;
