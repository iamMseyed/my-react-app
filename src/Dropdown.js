function Dropdown(props) {
    return (
        <select className="dropdown" name="dropdown">
            {props.value.map((val, index) => (
                <option key={index} value={val} id={index}>{val}</option>
            ))}
        </select>
    );
}

export default Dropdown;