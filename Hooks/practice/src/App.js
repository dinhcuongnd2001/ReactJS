import { useCallback, useState, useReducer, useRef , useContext, createContext} from "react";
import Content  from "./Content";
import PracticeUseEffect from './PracticeUseEffect';
import ChatApp from './ChatApp';
import LayoutEffect from "./LayoutEffect";
import UseRef from "./UseRef";
import UseCallBack from "./UseCallBack";
import UseMemo from "./UseMemo";
import TodoApp from './Todo'
import './App.css';
import UseContext from "./practiceUseContext";
import { ThemeProvider, ThemeContext} from './ThemeContext'

function App() {
  // const [show, setShow] = useState(false);

  // function handleOnclick() {
  //   setShow(!show);
  // }

  // return (
  //   <div style={{padding:32}}>
  //     <button onClick = {handleOnclick}>Toggle</button>
  //     {show && <UseMemo />}
  //   </div>
  // )
  // console.log(theme);
  const context = useContext(ThemeContext);
  // console.log(context);
    return (
          <div style={{padding:24}}>
              <button onClick = {context.handleClick}>Toggle Theme</button>
              <UseContext/>
          </div>
        // <p className= {context.theme}> Hello</p>
    )
}

export default App;
