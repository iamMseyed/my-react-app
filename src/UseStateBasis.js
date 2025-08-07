import {useState} from "react";
import Heading from "./Heading";

function countInitial(){
    console.log('Run this!')
    return 4;
    
}
function UseStateBasic(){
    // basic 
  //  const [counter, changeCounter] = useState(4);

  // this console log runs just once
   
  /* const [counter, changeCounter]= useState( () => 
        {console.log('Run this!')
        return 4;
        })
  */

    // this logs console every time we react renders this
     //const [counter, changeCounter]= useState(countInitial());

    // this logs only once  again
   // const [counter, changeCounter]= useState(() => countInitial());

/*
    const [state, setState] = useState({count:4,theme:'blue'})
    const count = state.count;
    const theme = state.theme;
*/

    const [count,setCount] = useState(4);
    const [theme, setTheme] = useState('blue');

    function increment(){
        /*
        changeCounter(counter+1);
        changeCounter(counter+1);
        //it should increase counter by 2, but this does only once. 
        */
    //   changeCounter( (prevCount) => (prevCount+1) )
    //  changeCounter( (prevCount) => (prevCount+1) )
       // this will increase two times 
       //(use function only to do this)
        
       //no changes to obj, only count increased
       /* setState(prevState => {
            return {...prevState,count:prevState.count+1}
        }
        )*/

        setCount( (prevCount) => (prevCount+1))
        setTheme('red');
    }

    function decrement(){
        // this will overwrite whole object and put just count
        /*
        setState(prevState => {
            return {count: prevState.count-1}
        })
        */


        // no changes to obj, just count only
        /*setState(prevState => {
            return {...prevState,count:prevState.count-1}
        }
        )*/


        /*
        changeCounter(counter+1); //4+1
        changeCounter(counter+1); //4+1 //same only
        */
    //   changeCounter( (prevCount) => (prevCount-1) )
     //  changeCounter( (prevCount) => (prevCount-1) )
       // this will increase two times
        
        setCount( (prevCount) => (prevCount-1))
        setTheme('blue');

    }
    return (
        <>
            <Heading value='Hooks - useState()'/>
            <button onClick={decrement}> - </button>
            <button> {count} </button>
            <button>{theme}</button>
            <button onClick={increment}> + </button>
        </>
    );
}

export default UseStateBasic;