import React from 'react';
import FlipClock from './FlipClock';
import Footer from '../components/Footer';
import "../css/styles.css"

const App = () => {
  return (
    <div>
      <h1>We're launching soon</h1>
      <FlipClock/>
      <Footer/>
    </div>
  );
}

export default App