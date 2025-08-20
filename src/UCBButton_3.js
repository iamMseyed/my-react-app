import React from "react";
function UCBButton_3({handleClick, children}){
    console.log('Rendering button - ',children)
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

export default React.memo(UCBButton_3) 