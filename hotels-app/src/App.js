import React from 'react';
import HotelsGallery from './Components/HotelsGallery';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { kebabCase } from './Components/helpers/kebabCase';
import { hotelsData } from './hotelsData';
import HotelPage from './Components/HotelPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route exect path="/" element={<HotelsGallery />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
