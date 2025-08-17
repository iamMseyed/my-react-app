import {useState,useEffect,useRef} from "react";

function UseRefExplained(){
    const [value, setValue] = useState('');
    const y = useRef(0);
    const prevVal = useRef('');

    useEffect( ()=>{
        y.current +=1;
    },[value]);

    useEffect( () =>{
        prevVal.current = value
    });

    return (
        <form>
            <input value={value} onChange={
                (e)=>
                    {
                        setValue(e.target.value);
                    }
            }
            placeholder="Enter any text, you will see this refleted down"/>
            <div>Text entered is: {value}</div>
            <i>(this page rendered {y.current} times)</i>
            {/* <i>(this page rendered {renderCount.current} times)</i> */}
             <i>You are typing this "{value}" and before it was "{prevVal.current}"</i>
        </form>
    )
}

export default UseRefExplained;