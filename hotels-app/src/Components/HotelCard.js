import React from 'react';

class HotelCard extends React.Component {
  render() {
    return (
      <li key={this.props.name}>
        {this.props.name}
        <img src={this.props.img} alt={this.props.name} />
      </li>
    );
  }
}

export default HotelCard;
