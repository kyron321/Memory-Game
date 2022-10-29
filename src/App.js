import './App.css';
import {useState} from 'react'

function App() {
const [name, setName] = useState('Carmen Winstead') 
console.log(name)

// const handleClick = () => {
//   setName("kyron smith")
// }

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      {/* <button onClick={handleClick}>Change name</button> */}
      <button onClick={()=>setName("Kyron Smith")}>Change Name</button>
    </div>
  );
}

export default App;
