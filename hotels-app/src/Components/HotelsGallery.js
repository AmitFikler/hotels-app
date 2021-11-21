import React from 'react';
import { hotelsData } from '../hotelsData';

import { Link } from 'react-router-dom';
import { kebabCase } from './helpers/kebabCase';
import HotelCard from './HotelCard';
class HotelsGallery extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {hotelsData.map((hotel) => (
            <Link to={'/' + kebabCase(hotel.name)}>
              <HotelCard name={hotel.name} img={hotel.img} />
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default HotelsGallery;
