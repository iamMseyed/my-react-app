import { useReducer } from "react";

const initialStateSim = 0;
const initialStateObj = {
    firstCounter:0
};
const reducerSim = (currentStateSim, actionSim) => { // action is instruction to reducer function, currently having 3 that is inc, dec, resest 
    switch(actionSim){
        case "increment":
            return (currentStateSim + 1)
        case "decrement":
            return (currentStateSim - 1)
        case "reset":
            return initialStateSim
        default:
            return currentStateSim
    }
}

const reducerObj = (currentStateObj, actionObj)=>{
    switch(actionObj.type){
        case "Increment":
            return ({firstCounter:currentStateObj.firstCounter + actionObj.value})
        case "Decrement":
            return ({firstCounter:currentStateObj.firstCounter - actionObj.value})
        case "Reset":
            return initialStateObj
        default:
            return currentStateObj
    }
}
function UseReducer(){
    const [countSim, dispatchSim] = useReducer(reducerSim, initialStateSim); // reducer itself is a function. It returns value in count and dispatcher checks for which method exactly
    const [countObj,dispatchObj] = useReducer(reducerObj, initialStateObj);
    return (
        <div>
            <h2>Example 1 - Simple</h2><hr/>
            <h3>Value is: {countSim}</h3>
            <button onClick={()=>dispatchSim('increment')}>Increment</button>
            <button onClick={()=>dispatchSim('decrement')}>Decrement</button>
            <button onClick={()=>dispatchSim('reset')}>Reset</button>

            <h2>Example 2 - Object</h2><hr/>
             <h3>Value is: {countObj.firstCounter}</h3>
            <button onClick={()=>dispatchObj({type:'Increment',value:1})}>Increment</button>
            <button onClick={()=>dispatchObj({type:'Decrement',value:1})}>Decrement</button>

            <button onClick={()=>dispatchObj({type:'Increment',value:5})}>Increment by 5</button>
            <button onClick={()=>dispatchObj({type:'Decrement',value:5})}>Decrement by 5</button>

            <button onClick={()=>dispatchObj({type:'Reset'})}>Reset</button>
        </div>
    )
}

export default UseReducer;