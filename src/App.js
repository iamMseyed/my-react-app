//import './App.css';
import Button from './Button'
import InputField from './InputField';
import Ul from './Ul';

const cars = ['Ford', 'BMW', 'Audi'];

function App() {
  return (
    <div className="App">
      <h1>Old Class</h1>

      <form>
        <h2>Sign In Form</h2>
          <InputField placeholder="enter username" name='username' valid={true}/>
          <InputField placeholder="enter password" name='password' valid={false}/>
          <Ul value={cars}/>
          <Button />
      </form>
    </div>
  );
}
export default App;