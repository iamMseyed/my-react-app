import './App.css';
import DisplayExcel from './Components/ReadExcelFileData/DisplayExcel';
// import UseMemo_Counter from './UseMemo_Counter';
// import UseCallbackParent_1 from './UseCallbackParent_1';
// import UseCallback from './UseCallback';
// import UseMemo from './UseMemo';
// import UseRef from './UseRef';
// import UseReducer from './UseReducer';
// import UseEffectCases from './UseEffectCases';
// import UseRefExplained from './UseRefExplained';
// import UseStateElaborated from './UseStateElaborated';
// import { AccessController } from './AccessController';
// import Button from './Button'
// import InputField from './InputField';
// import SimpleArray from './SimpleArray';
// import Playground from './Playground';
//const carArray = ['Ford', 'BMW', 'Audi'];

// import InputFieldForm from "./InputFieldForm";
// import Dropdown from "./Dropdown";
// import ButtonForm from "./ButtonForm";
// import FormUseState from './FormUseState';
// import UseStateBasic from './UseStateBasis';
// import UseEffectFetchData from './UseEffectFetchData';
// import UseEffectBasics from './UseEffectBasics';
// SetThemePart,UseContextExample

// import { SetThemePart, UseContextExample } from './UseContextExample';


// const FormValue = "Form Page",InputName1 = "Username", InputName2= "Password",InputName3="Full Name",
// InputName4="Email", InputMsg1 = "Enter Username", InputMsg2="Enter Password", InputMsg3="Enter Full Name",
// InputMsg4="Enter email", InputTypeText="text",InputTypeMail="email",InputTypePassword="password",
// DropDownValue = ['Male','Female'],
//buttonValue = ['Signup','Signin','Reset'];
/*
import UseContextWith from './UseContextWith';
import UseContextWithout from './UseContextWithout';
*/
// import LoginComponent from './LoginComponent';

// import UseContextPractical from './UseContextPractical';

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

      {/* <FormUseState/> 
       <UseStateBasic/> 
       <UseEffectBasics/>
      <UseEffectFetchData/> */}

      {/* single */}
       {/* <SetThemePart/>
       <UseContextExample/> */}
    {/* 
      <UseContextWithout/>
      <UseContextWith/> */}
       
      {/* <LoginComponent/> */}

      {/* <UseContextPractical/> */}
      {/* <AccessController/> */}
     {/* <UseRefExplained/> */}
     {/* <UseStateElaborated/> */}
     {/* <UseEffectCases/> */}
     {/* <UseReducer/> */}
     {/* <UseRef/> */}
     {/* <UseCallback/>
     <UseMemo/>
     <UseRef/> */}
     {/* <UseCallbackParent_1/> */}
     {/* <UseMemo_Counter/> */}
     <DisplayExcel/>
    </div>
  );
}
export default App;