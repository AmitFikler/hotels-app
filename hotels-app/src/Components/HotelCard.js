import React from 'react';

class HotelCard extends React.Component {
  render() {
    return (
      <li className="hotel-card">
        {this.props.name}
        <img
          src={this.props.img}
          alt={this.props.name}
          width="100%"
          height="80%"
        />
      </li>
    );
  }
}

export default HotelCard;
