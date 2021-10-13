import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom } from '@fortawesome/free-solid-svg-icons'
import fontsData from '../data/fonts';
import './CreateMemeForm.css';

const CreateMemeForm = props => {
  const { setTexts, handleChange: superHandleChange, setRandomImgIdx, toggleAllCaps } = props;

  const handleChange = ev => {
    const { name } = ev.currentTarget;
    if (name.includes('text')) setTexts(ev);
    else superHandleChange(ev);
  };

  const handleClick = ev => {
    const { name } = ev.currentTarget;
    if (name === 'randImgBtn') setRandomImgIdx();
    else if (name === 'toggleAllCapsBtn') toggleAllCaps();
  };

  const handleSubmit = ev => { console.log('form submitted') };

  const { imgsData, imgIdx, texts: { text1, text2 }, isAllCaps, fontIdx, fontSize } = props;

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
      <div className='field font-family'>
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
      <div className='field font-size'>
        <label>Enter font size</label>
        <div>
          <input type='number'
            name='fontSize'
            min='6'
            max='96'
            step='6'
            value={fontSize}
            onChange={handleChange}
          /> px
        </div>
      </div>
      <button className='addMemeBtn'>Add Meme</button>
    </form>
  );
};

export default CreateMemeForm;