function ButtonForm(props) {
    return (
        <>
            {props.value.map((val, index) => (
                <button key={index} className="button">{val}</button>
            ))}
        </>
    );
}

export default ButtonForm;