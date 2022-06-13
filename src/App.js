import { useState } from 'react';
import './App.css';
import SkylineDropdown from './SkylineDropdown';
import WaterfrontDropdown from './WaterfrontDropdown';
import CastleDropdown from './CastleDropdown';
import SloganList from './SloganList';
import SloganForm from './SloganForm';
import CityNameInput from './CityNameInput';
import City from './City';

function App() {
  const [skylineId, setSkyLineId] = useState('skyline-1');
  const [waterFrontId, setWaterFrontId] = useState('waterfront-1');
  const [castleId, setCastleId] = useState('castle-1');
  const [cityName, setCityName] = useState('city');
  const [slogans, setSlogans] = useState(['The City of Excellence']);
  const [sloganForm, setSloganForm] = ('');
  // track some state here.
  // You'll need to keep track of a skylineId, waterfrontId, and castleId. All these start out as 1
  // you'll need to track a city name, which starts as the city name of your choice.
  // finally, you'll need an array of slogans, which could start out as ['The City of Excellence'] for example

  return (
    <div className="App">
      {/* here, the City component takes in skylineId, waterfrontId, castleId as props. It'll use those ids to render pictures correctly. */}
      <h1>
        {/* dynamically update the city name here using state */}
        Welcome to beautiful Portland!
      </h1>
      <div className='bottom'>
        {/* here, the CityNameInput component takes in the setCityName state handler function */}
        <section className='dropdowns'>
          <label>
            Skyline
            <select>
              <option>Skyline 1</option>
              <option>Skyline 2</option>
              <option>Skyline 3</option>
            </select>
          </label>
          <label>
            Waterfront
            <select>
              <option>Waterfront 1</option>
              <option>Waterfront 2</option>
              <option>Waterfront 3</option>
            </select>
          </label>
          <label>
            Castle
            <select>
              <option>Castle 1</option>
              <option>Castle 2</option>
              <option>Castle 3</option>
            </select>
          </label>
          
          {/* 
          render all three Dropdown components (WaterfrontDropdown, SkylineDropdown, CastleDropdown) here. 
          
          In each Dropdown, pass as props the state handler functions defined above, so that these child components can manipulate parent state 
          */}
        </section>
        {/* here, the SloganForm component takes in the setSlogans state handler function and the slogans array that live in state */}
        {/* here, the SloganList component takes the array of slogans that lives in state */}

      </div>
    </div>
  );
}

export default App;
