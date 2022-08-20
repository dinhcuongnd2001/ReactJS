import {useReducer} from 'react';
import Context from './Context'
import reducer, {initalState}  from './reducer'
import logger from './logger';
function Provider({children}) {
    const [state, dispatch] = useReducer(logger(reducer), initalState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider;
