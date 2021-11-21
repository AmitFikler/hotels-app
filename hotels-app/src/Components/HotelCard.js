import React from 'react';

class HotelCard extends React.Component {
  render() {
    return (
      <li>
        {this.props.name}
        <img
          src={this.props.img}
          alt={this.props.name}
          width="75px"
          height="60px"
        />
      </li>
    );
  }
}

export default HotelCard;
