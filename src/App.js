import React from 'react';
import './App.css';
import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator';
import MemeItem from './components/MemeItem';

export default class App extends React.Component {
  state = {
    imgsData: null,
    userMemes: JSON.parse(localStorage.getItem('userMemes')) || []
  };

  addMeme = data => {
    const { imgIdx, texts, fontIdx, fontSize, isAllCaps, pos } = data;

    this.setState(state => ({ userMemes: [{ imgIdx, texts, fontIdx, fontSize, isAllCaps, pos }, ...state.userMemes] }));
  };
  render = () => {
    const { state, addMeme } = this;
    const { imgsData, userMemes } = state;

    const memeGeneratorProps = { ...state, addMeme };

    return (
      <div className="App">
        <Header />
        {imgsData &&
          <>
            <MemeGenerator {...memeGeneratorProps} />
            {userMemes.map(meme => {
              console.log({ meme });
              const memeItemProps = { ...meme, imgsData };
              return (
                <MemeItem key={Math.random()}{...memeItemProps} />
              )
            })}
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

  componentDidUpdate = () => {
    // console.log({ userMemes: this.state.userMemes });
    const updateLocalStorage = userMemes => {
      localStorage.setItem('userMemes', JSON.stringify(userMemes));
    };
    updateLocalStorage(this.state.userMemes);
  };
};
