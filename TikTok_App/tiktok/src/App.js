import {useState} from 'react'
function App() {
  const [name, setName] = useState('')
  console.log(name)
  return (
    <div className="App" style={{padding: 20}}>
      <input 
      value={name}
        onChange={ e => setName(e.target.value)}
      />
      <button onClick={() => setName('Nguyen Van BBB')}>Change</button>
    </div>
  );
}

export default App;
