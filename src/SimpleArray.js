function SimpleArray(props) {
    return (
        <div>
            <ul>
                {
                // console.log( props.value[0])
                props.value.map((car, index) => (
                    <li key={index}> {car} </li> //key is good practice to suppply here 
                ))
                }
            </ul>
        </div>
    );
}

export default SimpleArray;