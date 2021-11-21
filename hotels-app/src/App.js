import React from 'react';
import HotelsGallery from './Components/HotelsGallery';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Hotels in Haifa</h1>
        <HotelsGallery />
      </div>
    );
  }
}

export default App;
