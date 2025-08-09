const InputFieldAPI = (props) => {
  const { type, placeholder, name, value, onChange } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className={`input-${name}`
    }
    />
  );
};

export default InputFieldAPI;