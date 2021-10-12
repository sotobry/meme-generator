import React from 'react';
import './App.css';
import MemeGenerator from './components/MemeGenerator';

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
