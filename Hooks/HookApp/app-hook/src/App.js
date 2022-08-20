import './App.css';
import { useStore, actions } from './store';
import {useImperativeHandle, useRef, useEffect} from 'react';
import Video from './Video';
function App() {
  // const [state, dispacth] = useStore();
  // const {todos, todoInput} = state;
  // const handleClick = () =>{
  //   dispacth(actions.addTodoInput(todoInput));
  //   dispacth(actions.setTodoInput(''));
  // }

  // function handleDelete(index) {
  //   dispacth(actions.deleteTodoInput(index))
  // }
  

  const VideoRef = useRef();
  
  useEffect(()=>{
    console.log(VideoRef.current);
  }, [])

  function handlePlay(){
    VideoRef.current.play();
  }
  function handlePause(){
    VideoRef.current.pause();
  }
  return (
    <div style={{padding:20}}>
      {/* <input
        value={todoInput}
        placeholder= 'Enter tod ...'
        onChange={e=> {
          dispacth(actions.setTodoInput(e.target.value));
        }}
      />

      <button onClick={handleClick}>Add</button>

      <ul>
        {
          todos.map(
            (todo, index) => 
              ( 
                  <li key={index}>
                    {todo}
                    <span onClick={() => handleDelete(index)} style={{marginLeft:10}}>X</span> 
                  </li>

              )
            )
        }
      </ul> */}
      <Video 
        ref = {VideoRef} 
      />
      <br></br>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
