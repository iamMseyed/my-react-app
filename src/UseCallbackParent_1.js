import { useCallback, useState } from "react";
import UCBTitle_4 from "./UCBTitle_4";
import UCBButton_3 from "./UCBButton_3";
import UCBCount_2 from "./UCBCount_2";

function UseCallbackParent_1(){
    const [age, setAge] = useState(20);
    const [salary, setSalary] = useState(30000);

    const incrementAge = useCallback( () => {
        setAge(age+1)
    },[age]) // callback to memoize the functional call and then passed to child component

    const incrementSalary = useCallback(
        () =>{
        setSalary(salary+1000)
    },[salary]) //callback to memoize the functional call and then passed to child component

    return (
        <div>
            <UCBTitle_4/>

            <UCBCount_2 text = "Age" count = {age}/>
            <UCBButton_3 handleClick={incrementAge}>Increment Age</UCBButton_3>
            
            <UCBCount_2 text = "Salary" count = {salary}/>
            <UCBButton_3 handleClick={incrementSalary}>Increment Slary</UCBButton_3>
        </div>
    )
}

export default UseCallbackParent_1