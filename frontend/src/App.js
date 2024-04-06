import React from 'react';

function App() {
  const [counter, setCounter] = React.useState(0)
  const [input, setInput] = React.useState("")

  function incrementClick(){
    setCounter(prev => {return prev + 1})
  }

  function decrementClick(){
    setCounter(prev => {return prev - 1})
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is our front end of the app</h1>
        <button onClick={incrementClick}>Increment</button>
        <button onClick={decrementClick}>Decrement</button>
        <h1>{counter}</h1>
        <input onChange={e => setInput(e.target.value)}></input>
        <h1>User Types:{input}</h1>


      </header>
    </div>
  );
}

export default App;
