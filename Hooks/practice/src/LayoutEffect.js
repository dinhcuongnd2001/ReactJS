import { useLayoutEffect, useState } from "react";

function LayoutEffect() {
    const [state, setState] = useState(0);
    
    useLayoutEffect(() => {
        if(state === 4)
            setState(0);
        console.log('hi');
    },[state])
    console.log(state);
    return (
        <div>
            <h1>{state}</h1>
            <button onClick =  {() => {setState(state+1)}}>Incre</button>
        </div>
    )
}

export default LayoutEffect;