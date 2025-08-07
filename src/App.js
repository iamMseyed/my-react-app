import './App.css';
// import Button from './Button'
// import InputField from './InputField';
// import SimpleArray from './SimpleArray';
// import Playground from './Playground';
//const carArray = ['Ford', 'BMW', 'Audi'];

import InputFieldForm from "./InputFieldForm";
import Dropdown from "./Dropdown";
import ButtonForm from "./ButtonForm";
import FormUseState from './FormUseState';
import UseStateBasic from './UseStateBasis';

const FormValue = "Form Page",InputName1 = "Username", InputName2= "Password",InputName3="Full Name",
InputName4="Email", InputMsg1 = "Enter Username", InputMsg2="Enter Password", InputMsg3="Enter Full Name",
InputMsg4="Enter email", InputTypeText="text",InputTypeMail="email",InputTypePassword="password",
DropDownValue = ['Male','Female'],
buttonValue = ['Signup','Signin','Reset'];

function App() {
  return (
    <div className="App">
{/* 
      <form>  
        <h2>-- Form --</h2>
          <InputField placeholder="enter username" name='username' valid={true}/>
          <InputField placeholder="enter password" name='password' valid={false}/> 
          <SimpleArray value={carArray}/>
          <Playground/>
          <Button/>
      </form>
*/}
       {/* <form>  
        <label for={InputName1}> {InputName1} 
          <InputFieldForm id={InputName1} type={InputTypeText} name={InputName1} placeholder={InputMsg1} />
        </label>
        <label for={InputName2}> {InputName2} 
          <InputFieldForm name={InputName2}  type={InputTypePassword} id={InputName2} placeholder={InputMsg2} />
        </label>
         <label for={InputName3}> {InputName3} 
          <InputFieldForm id={InputName3}  type={InputTypeText} name={InputName3} placeholder={InputMsg3} />
        </label>
         <label for={InputName4}> {InputName4} 
          <InputFieldForm id={InputName4} type={InputTypeMail} name={InputName3} placeholder={InputMsg4} />
        </label>

        Select Gender <Dropdown value={DropDownValue} />
        <ButtonForm value={buttonValue} />
      </form>*/}

      {/* <FormUseState/> */}
      <UseStateBasic/>
    </div>
  );
}
export default App;