import React from 'react';

class CallNowButton extends React.Component {
  render() {
    return (
      <button>
        <a href={`tel:+972${this.props.phone}`}>
          <i className="fas fa-phone-alt"></i>
          התקשר עכשיו
        </a>
      </button>
    );
  }
}

export default CallNowButton;
