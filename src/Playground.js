
const objectArray = [
  {'model':'Audi','color':'red'},
  {'model':'Toyota','color':'Black'},
  {'model':'Suziki','color':'White'},
]

function Playground(){
    return ( 
        <ul>
            {
                objectArray.map((item,index)=>(
                   <li key={index}>{item.model}</li>
                ))
            }
        </ul>
    );
}
export default Playground;