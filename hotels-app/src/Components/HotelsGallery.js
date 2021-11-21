import React from 'react';
import { hotelsData } from '../hotelsData';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HotelCard from './HotelCard';
import { kebabCase } from './helpers/kebabCase';

class HotelsGallery extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {hotelsData.map((hotel) => (
            <HotelCard name={hotel.name} img="X" />
          ))}
        </ul>
      </div>
    );
  }
}

export default HotelsGallery;
