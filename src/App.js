import React,{useState, useEffect} from 'react';
import './App.css';
import  Board  from './components/board/board';

function App() {
  const [start, setstart] = useState(false);

  return (
    <div className="App">
      <button className={"start_btn" + (start ? ' hidden' : '')}
        role="button"
        onClick={()=>setstart(true)}
        >Start</button>

    
        {start && <Board start = {start} />}

    </div>
  );
}

export default App;





