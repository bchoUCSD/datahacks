import './app.css';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import hourglass from './images/hourglass.png';
// import tracks from './images/tracks.png';
// import leaves from './images/leaf.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const [plot, setPlot] = React.useState('')
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  async function handlePost() {
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
  
  // Website
  return (
    <div className="App">
      <section className="flex-container">
          <Parallax pages={2.5} class="wrapper">
            <ParallaxLayer speed={.05} offset={0} style={{ height: "auto" }}>
                <div className="panel parallax" id="back-4"></div>
            </ParallaxLayer>
            <ParallaxLayer speed={.1} offset={0}style={{ height: "auto" }}>
                <div className="panel parallax" id="mid-3"></div>
            </ParallaxLayer>
            <ParallaxLayer speed={.2} offset={0}style={{ height: "auto" }}>
                <div className="panel parallax" id="mid-2"></div>
            </ParallaxLayer>
            <ParallaxLayer speed={.3} offset={0} sticky={{ start: 0, end: .2 }} className="title">
              <h1 className="heading">T-Race</h1>
            </ParallaxLayer>
            <ParallaxLayer speed={.4} offset={0.2} style={{ height: "auto" }}>
                  <div className="panel parallax" id="front-1"></div>
            </ParallaxLayer>
            <ParallaxLayer speed={.4} offset={1} factor={2}>
              <div className='visualizer'> 
                <div className='vis-container'>
                  <h2 className='prompt'>Visualize how dinosaurs changed over time.</h2>
                  
                  <div className='menu'>
                    <div className='menu-dropdown'>
                      <img className="hourglass" src={hourglass} alt="Era"></img>
                      <DropdownButton id="dropdown-basic-button" title={selectedOption? selectedOption:'Choose one' }>
                        <Dropdown.Item onClick={() => handleOptionSelect('Early Jurassic')}>Early Jurassic</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleOptionSelect('Mid Jurassic')}>Mid Jurassic</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleOptionSelect('Late Jurassic')}>Late Jurassic</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleOptionSelect('Early Cretaceous')}>Early Cretaceous</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleOptionSelect('Late Cretaceous')}>Late Cretaceous</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleOptionSelect('Late Triassic')}>Late Triassic</Dropdown.Item>
                      </DropdownButton>
                    </div>
                    <button class="btn btn-success" onClick={handlePost}>Start Race</button>  
                  </div>
                  {plot && <img src={`data:image/png;base64,${plot}`} alt="Plot" />}
                </div> 
              </div>
            </ParallaxLayer>
          </Parallax> 
      </section>
    </div>
  );
}

export default App;