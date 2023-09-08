// App.js
import React from 'react';
import './App.css';
import Register from './Register';
import videoBackground from './'

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted className="background-video">
        <source src="./fondo.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>
      <div className="overlay"></div>
      <div className="content">
        <div className="title">

        </div>
        <Register />
      </div>
    </div>
  );
}

export default App;
