import React from 'react';

// import './CreateMemeForm.css';

import fontsData from '../data/fonts';

const EditMemeForm = props => {
  const { id, imgsData, imgIdx, texts, fontIdx, fontSize, isAllCaps, pos, resetState, setTexts, toggleAllCaps, setEditModeTo, handleChange: superHandleChange, saveMemeEdits } = props;
  const { text1, text2 } = texts;

  const handleChange = ev => {
    const { name } = ev.currentTarget;
    if (name.includes('text')) setTexts(ev);
    else superHandleChange(ev);
  };

  const cancelEdits = () => {
    resetState();
    setEditModeTo(false);
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    saveMemeEdits({ id, imgIdx, texts, fontIdx, fontSize, isAllCaps, pos });
    setEditModeTo(false);
  };

  const handleClick = ev => {
    const { name } = ev.currentTarget;
    console.log({ name });
    if (name === 'toggleAllCapsBtn') toggleAllCaps();
    else if (name === 'cancelBtn') cancelEdits();
  };

  return (
    <form className='CreateMemeForm'
      onSubmit={handleSubmit}
    >
      <div className='field'>
        <label htmlFor='imgIdx'>Select image</label>
        <select name='imgIdx' id='imgIdx'
          value={imgIdx}
          onChange={handleChange}
        >
          {imgsData.map(({ id, name }, i) =>
            <option key={id} value={i}>{name}</option>)}
        </select>
      </div>
      <div className='field'>
        <label htmlFor='text1'>Enter text</label>
        <input name='text1' id='text1' required
          placeholder='Text line 1'
          value={text1}
          onChange={handleChange}
        />
        <button type='button'
          name='toggleAllCapsBtn'
          onClick={handleClick}
        >
          <span>A</span>a
        </button>
      </div>
      <div className='field'>
        <label htmlFor='text2'>Enter text</label>
        <input name='text2' id='text2'
          placeholder='Text line 2'
          value={text2}
          onChange={handleChange}
        />
      </div>
      <div className='field font-family'>
        <label htmlFor='fontIdx'>Select font</label>
        <select name='fontIdx' id='fontIdx'
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
        <label htmlFor='fontSize'>Enter font size</label>
        <div>
          <input type='number'
            name='fontSize' id='fontSize'
            min='6'
            max='96'
            step='6'
            value={fontSize}
            onChange={handleChange}
          /> px
        </div>
      </div>
      <button name='cancelBtn' type='button'
        onClick={handleClick}
      >Cancel</button>
      <button name='saveBtn'
      // onClick={handleClick}
      >Save Changes</button>
    </form>
  );
};

export default EditMemeForm;