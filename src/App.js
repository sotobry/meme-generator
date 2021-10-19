import React from 'react';
import './App.css';
import FutureFeaturesList from './components/FutureFeaturesList';
import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator';
import MemeItem from './components/MemeItem';

import { updateLocalStorage } from './helperFunctions';

export default class App extends React.Component {
  state = {
    imgsData: null,
    userMemes: JSON.parse(localStorage.getItem('userMemes')) || [],
    view: 'memeGeneratorView'
  };

  addMeme = data => {
    const { imgIdx, texts, fontIdx, fontSize, isAllCaps, pos } = data;

    this.setState(state => ({ userMemes: [{ id: String(Math.random()), imgIdx, texts, fontIdx, fontSize, isAllCaps, pos }, ...state.userMemes] }));
  };
  deleteMeme = id => {
    this.setState(state => ({
      userMemes: state.userMemes.filter(meme => meme.id !== id)
    }));
  };

  saveMemeEdits = editedMeme => {
    console.log('saveMemeEdits function called.');
    const { id } = editedMeme;

    this.setState(state => ({
      userMemes: state.userMemes.map(meme => meme.id === id ? editedMeme : meme)
    }));
  };

  setViewTo = view => this.setState({ view });

  render = () => {
    const { state, addMeme, deleteMeme, saveMemeEdits, setViewTo } = this;
    const { imgsData, userMemes, view } = state;

    const headerProps = { setViewTo };
    const memeGeneratorProps = { ...state, addMeme };

    return (
      <div className="App">
        <Header {...headerProps} />
        {imgsData &&
          <>
            {view === 'memeGeneratorView' &&
              <MemeGenerator {...memeGeneratorProps} />}

            {view === 'userMemesView' &&
              userMemes.map(meme => {
                const memeItemProps = { ...meme, imgsData, deleteMeme, saveMemeEdits };
                return (
                  <MemeItem key={meme.id}{...memeItemProps} />
                );
              })}

            {view === 'futureFeaturesView' &&
              <FutureFeaturesList />}
          </>
        }
      </div>
    );
  };

  componentDidMount = () => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(({ data: { memes: imgsData } }) => this.setState({ imgsData }));
  };

  componentDidUpdate = () => updateLocalStorage(this.state.userMemes);
};
