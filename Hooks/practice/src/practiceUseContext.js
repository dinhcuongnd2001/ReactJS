import { useContext } from "react"
import {ThemeContext} from './ThemeContext';
function UseContext(){
    const context = useContext(ThemeContext);
    return(
        <p className={context.theme}>Hello ae nha</p>
    )
}

export default UseContext;