import React from 'react';
import Navbar from './components/navbar';
import Carousel from './components/carousel';
import About from './components/about';
import Types from './components/types';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <About />
        <Types />
        <Footer />
      </div>
    );
  }
}

export default App;

