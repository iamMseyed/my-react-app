// with useContext()
import{useState,createContext,useContext} from "react"; 

// create context
const ThemeContext = createContext();

// create provider component
function UseContextWith(){
    const[theme, setTheme] = useState('dark');
    return (
        <>
            <hr/>
                <h1>
                    With UseContext()
                </h1>
            <ThemeContext.Provider value ={{theme, setTheme}}>     
                <Layout/>
            </ThemeContext.Provider>
        </>

    );
}

function Layout(){
    return (
        <div>
            <Header/>
            <Sidebar/>
            <MainComponent/>
        </div>
    );
}

function Header(){
    const {theme} = useContext(ThemeContext);
    return (
        <header
        style = {{
            padding:"10px",
            background:theme==="light"?"#f5f5f5":"#333",
            color:theme==="light"?"#000":"#fff"
        }}
        >
            <h1>Header - Current Theme : {theme}</h1>
        </header>
    );
}

function Sidebar(){
    const {theme, setTheme}= useContext(ThemeContext);
     return (
        <button onClick={ ()=>
            setTheme(theme==="light"?"dark":"light")}
                 style={{
                 padding:"5px 10px",cursor:"pointer"}}
                >Toggle Theme
        </button>
    )
}

function MainComponent(){
    const {theme} = useContext(ThemeContext);
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
    );
}

export default UseContextWith;