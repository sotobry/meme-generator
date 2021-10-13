import React from 'react';
import './App.css';
import MemeGenerator from './components/MemeGenerator';
import pepeImg from './images/pepe.png';

export default class App extends React.Component {
  state = {
    imgsData: null,
    userMemes: []
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
        <header>
          <h1>MEME GENERAT<img src={pepeImg} alt='pepe the frogs face' />R</h1>

        </header>
        {imgsData && <MemeGenerator {...memeGeneratorProps} />}
        {userMemes.length > 0 && userMemes.map(meme => {
          const { imgIdx, texts, fontIdx, fontSize, isAllCaps, pos } = meme;
          return (
            <ul>
              <li>imgIdx: {imgIdx} ({typeof imgIdx})</li>
              <li>text1: {texts.text1} ({typeof texts.text1})</li>
              <li>text2: {texts.text2} ({typeof texts.text2})</li>
              <li>fontIdx: {fontIdx} ({typeof fontIdx})</li>
              <li>fontSize: {fontSize} ({typeof fontSize})</li>
              <li>isAllCaps: {String(isAllCaps)} ({typeof isAllCaps})</li>
              <li>top1: {pos.pos1.top} ({typeof pos.pos1.top})</li>
              <li>left1: {pos.pos1.left} ({typeof pos.pos1.left})</li>
              <li>top2: {pos.pos2.top} ({typeof pos.pos2.top})</li>
              <li>left2: {pos.pos2.left} ({typeof pos.pos2.left})</li>
            </ul>
          )
        })}
      </div>
    );
  };

  componentDidMount = () => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(({ data: { memes: imgsData } }) => this.setState({ imgsData }));
  };

  componentDidUpdate = () => {
    console.log({ userMemes: this.state.userMemes })
  };
};
