import React from 'react';
import './App.css';
import MemeGenerator from './components/MemeGenerator';
import pepeImg from './images/pepe.png';

export default class App extends React.Component {
  state = {
    imgsData: null
  };

  render = () => {
    const { state } = this;
    const { imgsData } = state;

    const memeGeneratorProps = { ...state };

    return (
      <div className="App">
        <header>
          <h1>MEME GENERAT<img src={pepeImg} alt='pepe the frogs face' />R</h1>

        </header>
        {imgsData && <MemeGenerator {...memeGeneratorProps} />}
      </div>
    );
  };

  componentDidMount = () => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(({ data: { memes: imgsData } }) => this.setState({ imgsData }));
  };
};
