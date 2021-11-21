import React from 'react';
import HotelsGallery from './Components/HotelsGallery';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HotelPage from './Components/HotelPage';
import { hotelslData } from './hotelsData';
import { kebabCase } from './Components/helpers/kebabCase';

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
            {hotelslData.map((hotel) => (
              <Route
                exact
                path={'/' + encodeURIComponent(kebabCase(hotel.name))}
                element={
                  <HotelPage
                    key={hotel.name}
                    name={hotel.name}
                    street={hotel['street name']}
                    img={hotel.img}
                    number={hotel.number}
                    phone={hotel.phone}
                  />
                }
              />
            ))}
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
