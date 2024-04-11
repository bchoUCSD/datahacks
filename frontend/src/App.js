import './app.css';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import hourglass from './assets/hourglass.png'
import bcr from './assets/dinosaur_race.mp4';
import earlyC from './assets/earlyC.png'
import earlyJ from './assets/earlyJ.png'
import lateC from './assets/lateC.png'
import lateJ from './assets/lateJ.png'
import lateTri from './assets/lateTri.png'
import midJ from './assets/midJ.png'

function App() {
  const [plot, setPlot] = React.useState('')
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  async function handlePost() {
    if(selectedOption){
      setPlot(selectedOption)
    }
    else{
      alert('Choose a period')
    } 
  }
  
  // Website
  return (
    <div className="App">
      
      <section className="flex-container">
    
        <Parallax pages={3.5} class="wrapper">
          <ParallaxLayer offset={0} className="panel parallax"></ParallaxLayer>
          <ParallaxLayer speed={.05} offset={0} style={{ height: "auto" }}>
              <div className="panel parallax" id="back-4"></div>
          </ParallaxLayer>
          <ParallaxLayer speed={.08} offset={0}style={{ height: "auto" }}>
              <div className="panel parallax" id="mid-3"></div>
          </ParallaxLayer>
          <ParallaxLayer speed={.3} offset={0} sticky={{ start: 0, end: .2 }} className="title" style={{ zIndex: 5, position:"absolute"  }}>
            <h1 className="heading">T-Race</h1>
          </ParallaxLayer>
          <ParallaxLayer speed={.2} offset={0}style={{ height: "auto" }}>
              <div className="panel parallax" id="mid-2"></div>
          </ParallaxLayer>
          <ParallaxLayer speed={.2} offset={0} style={{ height: "auto" }}>
                <div className="panel parallax" id="front-1"></div>
          </ParallaxLayer>
          <ParallaxLayer speed={.2} offset={1} factor={2.5}>
            <div className='visualizer'> 
              <div className='vis-container'>
                <h2 className='prompt'>Visualize how dinosaurs changed over time.</h2>
                <div className='menu'>
                  <div className='menu-dropdown'>
                    <img src={hourglass} alt="Era" class="hourglass"></img>
                    <DropdownButton id="dropdown-basic-button" title={selectedOption? selectedOption:'Choose one' }>
                      <Dropdown.Item onClick={() => handleOptionSelect(earlyJ)}>Early Jurassic</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleOptionSelect(midJ)}>Mid Jurassic</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleOptionSelect(lateJ)}>Late Jurassic</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleOptionSelect(earlyC)}>Early Cretaceous</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleOptionSelect(lateC)}>Late Cretaceous</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleOptionSelect(lateTri)}>Late Triassic</Dropdown.Item>
                    </DropdownButton>
                  </div>
                  <button class="btn btn-success" onClick={handlePost}>Start Race</button> 
                </div>

                {plot && <img className='plot' src={plot} alt="plot"/>}
                <video autoPlay loop muted>
                  <source src={bcr} type='video/mp4'/>
                </video>
              </div> 
            </div>
          </ParallaxLayer>
        </Parallax>
      </section>
    </div>
  );
}

export default App;