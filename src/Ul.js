
// function Ul(props){
//     return (
//         <div>
//             <ul>
//                 {props.value.map((car, index) => (
//                     <li key={index}> {car} </li> //key is good practice to suppply here 
//                 ))}
//             </ul>
//         </div>
//     );
// }

function Ul(props) {

  let cars = props.value;
  if(cars.length>0){
    return (
        <>
        <h1>Garage</h1> 
        {cars.length > 0 &&
            <h2>
            You have {cars.length} cars in your garage.
            </h2>
        }
        </>
    );
  }
  else{
    cars = 0;
    return (
        <>
        <h1>Garage</h1> 
            <h2>
            Your Garage is empty!
            </h2>
        </>
    );
  }
}

export default Ul;