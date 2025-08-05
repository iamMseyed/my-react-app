function ObjectArray(props){
    return (
        <>
            <ul>
               {props.value.map((car, index) => (
                  <li key={index}> {car} </li> //key is good practice to suppply here 
               ))}
            </ul>
        </>
    );
}

export default ObjectArray;