function Button(){
    return (
        <> 
            <button type='submit'>Signin</button>
            <br/>
            <button onClick={alertSomething}>Click for Alert</button>
            <br/>
            <button onClick={alertSomething('Hello')}>Click for alert with message</button>
            <br/>
            <label>
                On Key Down <input type="text" onKeyDown={()=>keyDown()}/>
            </label>
        </>
    );
}

function alertSomething(){
    alert('Alert something!');
}

function alertWithMsg(value){
    alert('Alert: ' + value);
}

function keyDown(x){
    alert('Key down!');
}

export default Button;