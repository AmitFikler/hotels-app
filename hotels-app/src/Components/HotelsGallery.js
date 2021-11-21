import React from 'react';

import { Link } from 'react-router-dom';
import { hotelslData } from '../hotelsData';
import { kebabCase } from './helpers/kebabCase';
import HotelCard from './HotelCard';
class HotelsGallery extends React.Component {
  render() {
    return (
      <div>
        <h1>מלונות בחיפה</h1>
        <ul>
          {hotelslData.map((hotel) => (
            <Link to={'/' + kebabCase(hotel.name)}>
              <HotelCard key={hotel.name} name={hotel.name} img={hotel.img} />
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default HotelsGallery;
