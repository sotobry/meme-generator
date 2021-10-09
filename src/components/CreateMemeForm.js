import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom } from '@fortawesome/free-solid-svg-icons'
import fontsData from '../data/fonts';
export default class CreateMemeForm extends React.Component {
  state = {
    imgsData: null,
    imgIdx: 0,
    texts: { text1: '', text2: '' },
    isAllCaps: false,
    fontIdx: 0
  };

  handleChange = ev => {
    const { name, value } = ev.target;
    // console.log(name.includes('text'));
    if (name.includes('text')) {
      this.setState(state => ({ 'texts': { ...state.texts, [name]: value } }));
    }
    else {
      const number = Number.parseInt(value, 10);
      this.setState({ [name]: !isNaN(number) ? number : value });
    }
  };
  setRandomImgIdx = () => {
    const { floor, random } = Math;
    const { imgsData } = this.state;
    const imgIdx = floor(random() * imgsData.length);
    this.setState({ imgIdx });
  };
  toggleAllCaps = () => {
    this.setState(state =>
      ({ isAllCaps: !state.isAllCaps })
    );
  };
  handleClick = ev => {
    const { setRandomImgIdx, toggleAllCaps } = this;
    const { name } = ev.currentTarget;
    if (name === 'randImgBtn') setRandomImgIdx();
    else if (name === 'toggleAllCapsBtn') toggleAllCaps();
  };
  handleSubmit = ev => { console.log('form submitted') };

  render = () => {
    const { state, handleChange, handleClick, handleSubmit } = this;
    const { imgsData, imgIdx, texts, isAllCaps, fontIdx } = state;
    const { text1, text2 } = texts;
    return (
      <form className='CreateMemeForm'
        onSubmit={handleSubmit}
      >
        <div className='field'>
          <label>Select image</label>
          <select name='imgIdx'
            value={imgIdx}
            onChange={handleChange}
          >
            {imgsData &&
              imgsData.map(({ id, name }, i) =>
                <option key={id} value={i}>{name}</option>)}
          </select>
          <button type='button'
            name='randImgBtn'
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faRandom} />
          </button>
        </div>
        <div className='field'>
          <label>Enter text</label>
          <input name='text1' required
            placeholder='Text line 1'
            value={text1}
            onChange={handleChange}
          />
          <button type='button'
            name='toggleAllCapsBtn'
            onClick={handleClick}

          >
            <span style={{ fontWeight: 900 }}>A</span>a
          </button>
        </div>
        <div className='field'>
          <label>Enter text</label>
          <input name='text2'
            placeholder='Text line 2'
            value={text2}
            onChange={handleChange}
          />
        </div>
        <div className='field'>
          <label>Select font</label>
          <select name='fontIdx'
            value={fontIdx}
            onChange={handleChange}
          >
            {fontsData.map((font, i) =>
              <option key={i} value={i}>
                {font.family}
              </option>)}
          </select>
        </div>
        <button className='addMeme'>Add Meme</button>
        <br />
        <br />
        imgIdx ({typeof imgIdx}): {imgIdx} <br />
        text1 ({typeof text1}): {text1} <br />
        text2 ({typeof text2}): {text2} <br />
        isAllCaps ({typeof isAllCaps}): {String(isAllCaps)} <br />
        fontIdx ({typeof fontIdx}): {fontIdx}
      </form>
    );
  };

  componentDidMount = () => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(({ data: { memes: imgsData } }) => this.setState({ imgsData }));
  };
};