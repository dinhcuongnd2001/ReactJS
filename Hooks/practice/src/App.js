import { useCallback, useState, useReducer, useRef } from "react";
import Content  from "./Content";
import PracticeUseEffect from './PracticeUseEffect';
import ChatApp from './ChatApp';
import LayoutEffect from "./LayoutEffect";
import UseRef from "./UseRef";
import UseCallBack from "./UseCallBack";
import UseMemo from "./UseMemo";
import TodoApp from './Todo'

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
  return <TodoApp />
}

export default App;
