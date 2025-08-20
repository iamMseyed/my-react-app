import { useState,useMemo } from "react";

function UseMemo_Counter(){
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const isEven = useMemo( 
        () => {
            let i = 0
            while(i<2000000000) i++
            return counterOne %2 === 0
        },[counterOne]
    )
    // isEven is now a variable
    const incrementOne = ()=>{
    setCounterOne(counterOne+1)
    }

    const decrementTwo = ()=>{
        setCounterTwo(counterTwo+1)
    }

    // without useMemo
    // const isEven = () =>{
    //     let i = 0
    //     while(i<2000000000) i++
    //     return counterOne %2 === 0
    // }

    return (
        <div>
            <button onClick={incrementOne}>Count One - {counterOne}</button>
            {/* <span>{isEven()?'Even':'Odd'}</span> */}
             <span>{isEven?'Even':'Odd'}</span> 
            <button onClick={decrementTwo}>Count Two - {counterTwo}</button>
        </div>
    )
}


export default UseMemo_Counter;