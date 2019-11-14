import React, { Component } from 'react';
import NavBar from './components/NavBar/index';
import Hero from './components/Slider/index';
import TopVideos from './components/TopVideos/index';
import Events from './components/Events/index';
import Footer from './components/Footer/index.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <Hero />
        <TopVideos />
        <Events />
        <Footer />
      </div>
    )
  }
}
export default App;
