import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const [plot, setPlot] = React.useState('')
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  async function handlePost(){
    if(selectedOption){
      try{
        axios.defaults.withCredentials = true;
        const res = await axios.post('http://127.0.0.1:8000/generate_plot', {
            category:selectedOption
        });
        setPlot(res.data.plot)
        console.log("plot is",plot)
      }
      catch (err){
        console.log('Error:', err)
      }
    }
    else{
      alert('Choose a period')
    } 
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is our front end of the app</h1>
        <DropdownButton id="dropdown-basic-button" title={selectedOption? selectedOption:'Choose one' }>
          <Dropdown.Item onClick={() => handleOptionSelect('Early Jurassic')}>Early Jurassic</Dropdown.Item>
          <Dropdown.Item onClick={() => handleOptionSelect('Mid Jurassic')}>Mid Jurassic</Dropdown.Item>
          <Dropdown.Item onClick={() => handleOptionSelect('Late Jurassic')}>Late Jurassic</Dropdown.Item>
          <Dropdown.Item onClick={() => handleOptionSelect('Early Cretaceous')}>Early Cretaceous</Dropdown.Item>
          <Dropdown.Item onClick={() => handleOptionSelect('Late Cretaceous')}>Late Cretaceous</Dropdown.Item>
          <Dropdown.Item onClick={() => handleOptionSelect('Late Triassic')}>Late Triassic</Dropdown.Item>
        </DropdownButton>

        <button onClick={handlePost}>Make POST request</button>
        {plot && <img src={`data:image/png;base64,${plot}`} alt="Plot" />}



      </header>
    </div>
  );
}

export default App;