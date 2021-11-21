import React from 'react';
import CallNowButton from './CallNowButton';
class HotelPage extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}---{this.props.street}
        <CallNowButton />
      </div>
    );
  }
}

export default HotelPage;
