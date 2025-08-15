// function InputField(props){
//     return ( 
//         //<> shorthand of <React.Fragment> this doesn't create additonal dom element, preffered if you don't want to add addtional filteration

//         //<div> this creates additional dom element
//         // since this is sinlge input tag, but using component filteration, thus need to use <> or <div>..

//          <div>  
//             { !props.valid &&                
//                 <input type="text" placeholder={props.placeholder} name={props.name}/>
//             }
//         </div>
//     );
// }
// export default InputField;

/*
function InputField (props){
const test = props.valid;
// console.log(test);
return(
       <> 
       {test ? <input type="text" placeholder={props.placeholder} name={props.name}/>:
                       <input type="text" placeholder={props.placeholder} name={props.name}/> }
        </>
);

/*
         return (
                <>
                    {
                     console.log(props.valid,'->',props.valid)
                    }
                    <input type="text" placeholder={props.placeholder} name = {props.name}/>
                </>
            );
        if(!props.valid) {
        return (
            <>
                {
                  console.log(props.valid,'->',props.valid)
                }
                <input type="text" placeholder={props.placeholder} name = {props.name}/>
            </>
        );
        }   

}
*/

function InputField({ type, placeholder, name, value, onChange }) {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required
        />
    );
}


export default InputField;