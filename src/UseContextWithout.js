// without usecontext()

import {useState } from "react"; 

function UseContextWithout(){
    const [theme,setTheme] = useState('light');
    return ( 
        <Layout theme={theme} setTheme={setTheme}/> //pass prop even if they don't use theme
    );
}

function Layout( {theme, setTheme} ){
     return (
        <>
            <Header theme={theme}/>
            <Sidebar theme = {theme} setTheme={setTheme}/>
            <MainComponent theme = {theme}/>
        </>
     );
}

function Header({theme}){
    return (
        <>
        <h1>Without UseContext()</h1>
        <hr/>
        <header>
            <h2>Header - Current theme : {theme}</h2>
            <p>No need to change theme for instance, stil need to pass here</p>
        </header>
        </>
    );
}

function Sidebar({theme, setTheme}){
    return (
        <button onClick={ ()=>
            setTheme(theme==="light"?"dark":"light")}
                 style={{
                 padding:"5px 10px",cursor:"pointer"}}
                >Toggle Theme
        </button>
    )
}

function MainComponent({theme}){
    return (
        <main
         style={
                {
                    padding:"10px",
                    background:theme==="light"?"#f5f5f5":"#333",
                    color:theme==="light"?"#000":"#fff",
                    minHeight:"20vh"
                }}>
            <h3>Main Context - Theme: {theme}</h3>
            <p>
                Needed theme here only. But passed theme props from header till here 
            </p>


        </main>
    )
}

export default UseContextWithout;
