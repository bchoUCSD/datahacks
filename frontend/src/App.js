import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [counter, setCounter] = React.useState(0)
  const [input, setInput] = React.useState("")
  const [selectedOption, setSelectedOption] = React.useState(null);
  
  function incrementClick(){
    setCounter(prev => {return prev + 1})
  }

  function decrementClick(){
    setCounter(prev => {return prev - 1})
  }


  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is our front end of the app</h1>
        <button onClick={incrementClick}>Increment</button>
        <button onClick={decrementClick}>Decrement</button>
        <h1>{counter}</h1>
        <input onChange={e => setInput(e.target.value)}></input>
        <h1>User Types:{input}</h1>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedOption ? selectedOption : 'Select an option'}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleOptionSelect('1')}>1</Dropdown.Item>
            <Dropdown.Item onClick={() => handleOptionSelect('2')}>2</Dropdown.Item>
            <Dropdown.Item onClick={() => handleOptionSelect('3')}>3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </header>
    </div>
  );
}

export default App;
