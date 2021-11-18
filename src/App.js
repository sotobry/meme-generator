import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import FutureFeaturesList from './components/FutureFeaturesList';
import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator';
import MemeList from './components/MemeList';

import { updateLocalStorage } from './helperFunctions';

const App = () => {
  const [imgsData, setImgsDataTo] = useState(null);
  //TODO confirm correctness.
  const [userMemes, setUserMemesTo] = useState(() => JSON.parse(localStorage.getItem('userMemes')) || []);
  const [view, setViewTo] = useState('memeGeneratorView');

  const addMeme = data => {
    const { imgIdx, texts, fontIdx, fontSize, isAllCaps, pos } = data;

    setUserMemesTo(userMemes => [
      { id: String(Math.random()), imgIdx, texts, fontIdx, fontSize, isAllCaps, pos },
      ...userMemes
    ]);
  };

  const deleteMeme = id =>
    setUserMemesTo(userMemes => userMemes.filter(meme => meme.id !== id));

  const saveMemeEdits = editedMeme => {
    console.log('saveMemeEdits function called.');
    const { id } = editedMeme;

    setUserMemesTo(userMemes =>
      userMemes.map(meme => meme.id === id ? editedMeme : meme));
  };

  const headerProps = { setViewTo };
  const memeGeneratorProps = { imgsData, userMemes, view, addMeme };
  const memeListProps = { imgsData, userMemes, deleteMeme, saveMemeEdits };

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(({ data: { memes: imgsData } }) => setImgsDataTo(imgsData));
  }, []);
  useEffect(() => updateLocalStorage(userMemes));

  return (
    <div className="App">
      <Header {...headerProps} />
      {imgsData &&
        <>
          {view === 'memeGeneratorView' &&
            <MemeGenerator {...memeGeneratorProps} />}

          {view === 'userMemesView' &&
            <MemeList {...memeListProps} />}

          {view === 'futureFeaturesView' &&
            <FutureFeaturesList />}
        </>
      }
      <Footer />
    </div>
  );
};

export default App;