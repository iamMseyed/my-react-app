import {useState} from "react";
import "./App.css";

function UseStateElaborated(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState(
        {
            firstName:'',
            lastName:''
        }
    );

    const [updatedName, setUpdatedName] = useState(
        {
            firstName:'',
            lastName:''
        }
    )

     const [items,setNewItem] = useState([]);

    const addElement = () =>{
        setNewItem([...items,{ // get old array and append the values added here
            id: items.length,
            value: Math.ceil(Math.random() * 20) 
        }]);
    };
    return (
        <div>
            <h2>useState with previous hook</h2> <hr/>
            <h3>Current Count : {count}</h3>
             <button onClick={
                () => 
                setCount(
                    prevCount => prevCount+1
                )
            }>Increment</button>
            
            <button onClick={
                () => 
                setCount(
                    prevCount => prevCount-1
                )
            }>Decrement</button>

            <h2>useState with object</h2><hr/>
            <p> This will update only one field, and remove other and vice versa</p>
            <input type="text" value = {name.firstName} onChange={
                (e) => {
                    setName({firstName: e.target.value})
                }
            } placeholder="enter first name"/>
            
            <input type="text" value = {name.lastName} onChange={
                (e) => {
                    setName({lastName: e.target.value})
                }
            } placeholder="enter last name" />
            <h3>
                First name is: {name.firstName} <br/>
                Last name is: {name.lastName}
            </h3> <hr/>


             <p> This will update both fields wher ever necessary</p>
            <input type="text" value = {updatedName.firstName} onChange={
                (e) => {
                    setUpdatedName({...updatedName, firstName: e.target.value}) // first get all previous array elements, and udpate firstname only
                }
            } placeholder="enter first name"/>
            
            <input type="text" value = {updatedName.lastName} onChange={
                (e) => {
                    setUpdatedName({...updatedName, lastName: e.target.value}) // .. update lastname only
                }
            } placeholder="enter last name" />
            <h3>
                First name is: {updatedName.firstName} <br/>
                Last name is: {updatedName.lastName}
            </h3> <hr/>

             <h2>useState with array</h2><hr/>

             <div>
                <button onClick={addElement}>Add Random Number to list</button>
                <table className="Table">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Item</td>
                        </tr>                        
                    </thead>
                    <tbody>
                        {items.map( (item) =>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.value}</td>
                            </tr>
                        ) )}
                    </tbody>
                </table>
             </div>
             
        </div>
    );
}

export default UseStateElaborated;