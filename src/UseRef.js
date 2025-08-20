 import { useRef,useEffect, useState} from "react";

function UseRef(){
    // const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    const inputRef = useRef(null)
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect ( ()=>{
        inputRef.current.focus()
    },[inputRef])

    useEffect (
        ()=>{
             intervalRef.current = setInterval(
                () =>{
                    setTimer(prevTimer => prevTimer+1)
                },1000 
            )
            return () => {
                clearInterval(intervalRef.current)
            };
        },[]
    )
    /*
       useEffect(() => {
    count.current = count.current + 1;
  });
  */

    return (
        <>
        <h3>Focused automatically</h3> 
        <input type="text" ref={inputRef}/>
        <hr/>
        <h3>Timer: <span>{timer}</span></h3>
        <button onClick={
            ()=>setTimer(0) // set timer value to 0
        }>Clear Timer</button>

        <button onClick={
            ()=>clearInterval(intervalRef.current) // not defined as interval is within useEffect
        }>Stop Timer</button>

{/* 
         <p>Type in the input field:</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
       */}
        </>
        
    ) 
}
export default UseRef;