function InputFieldForm(props){
    return (
        <>
        <label for={props.for}>
            <input type = {props.type} id = {props.id} name = {props.name} placeholder = {props.placeholder} required/>
        </label>
        </>
    );
}

export default InputFieldForm;