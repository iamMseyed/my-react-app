import React from "react";
function UCBCount_2({text,count}){
    console.log(`Rendering ${text}`);
    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default React.memo(UCBCount_2) 
/* React.memo is a higher order component prevents funcitonal componets to stops re-render 
if props doesn't change. Remember it has noting to do with hooks. Available back in react 16

Optimized component*/
