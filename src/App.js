import { useState } from 'react';
import './App.css';
import Specs from './components/specs';

function App() {

  return (
    <div className="App">
      <div id="specs-wrapper">
      <Specs
      cpu = {Specs.cpu}
      gpu = {Specs.gpu}
      ram = {Specs.ram}
      ssd = {Specs.ssd}
      psu = {Specs.psu}
      motherboard = {Specs.mobo}
      case = {Specs.tower}
      cooler = {Specs.cooler}
      />
      </div>
    </div>
  );
}

export default App;
