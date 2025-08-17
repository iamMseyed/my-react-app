import { useEffect, useState } from "react";

function UseEffectCases(){
    const [counter, setCounter] = useState(0);

    useEffect(
        () =>{
            document.title = `Clicked ${counter} times`
        },[counter]
    )
    return (
        <button onClick={
            () => setCounter(counter => counter+1)  
        }> You clicked {counter} times </button>
    )
}

export default UseEffectCases;