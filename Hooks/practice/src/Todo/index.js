import {useReducer, useRef } from "react";
import reducer,{initState} from './reducer';
import {addJob,setJob,removeJob} from './action';
import logger  from "./loger";

function App() {

  const [state, dispatch] = useReducer(logger(reducer), initState);
  const {job, jobs} = state;
  const ref = useRef();

  const handleClick = () => {
    dispatch(addJob(job));
    dispatch(setJob(''));
    ref.current.focus();
  }

  const handleRemove = (index) => {
    dispatch(removeJob(index));
  }
  
  return (
    <div style={{padding: '0 20px'}}>
      <input 
        ref = {ref}
        value={job} 
        placeholder= "Let's input to add jobs"
        onChange = {e => dispatch(setJob(e.target.value))}
      />
      <button onClick = {handleClick}>Add</button>
      <ul>
          {jobs.map(
            (job, index) => <li key={index}>
              {job} 
              <span onClick={()=> handleRemove(index)}>&times;</span>
              </li>)
          }
      </ul>
    </div>
  )
}

export default App;
