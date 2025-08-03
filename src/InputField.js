function InputField(props){
     return ( 
         <>
        { !props.valid &&                
            <input type="text" placeholder={props.placeholder} name={props.name}/>
        }
      </>
      );
}
export default InputField;