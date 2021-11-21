import React from 'react';

class HotelPage extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}---{this.props.street}
      </div>
    );
  }
}

export default HotelPage;
