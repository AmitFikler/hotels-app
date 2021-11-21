import React from 'react';
import CallNowButton from './CallNowButton';
import { Link } from 'react-router-dom';
class HotelPage extends React.Component {
  render() {
    return (
      <div className="HotelPage">
        <Link to={'/'}>
          <button>חזרה לדף הבית</button>
        </Link>
        <h1 className="hotelPageHeader">{this.props.name}</h1>
        <img
          className="hotelPageImg"
          src={this.props.img}
          alt={this.props.name}
          height="100px"
        />
        <h3 className="address">
          כתובת: {this.props.street} {this.props.number}
        </h3>
        <CallNowButton phone={this.props.phone} />
      </div>
    );
  }
}

export default HotelPage;
