function ButtonForm(props) {
    return (
        <>
            {props.value.map((val, index) => (
                <button key={index}>{val}</button>
            ))}
        </>
    );
}

export default ButtonForm;