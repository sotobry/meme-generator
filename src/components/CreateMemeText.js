import React from 'react';
import './CreateMemeText.css';
import fontsData from '../data/fonts';
export default class CreateMemeText extends React.Component {
  state = {

  };

  render = () => {
    const { state, props } = this;
    const { text, isAllCaps, fontIdx, fontSize } = props;

    const font = fontsData[fontIdx];
    const style = {
      textTransform: isAllCaps ? 'uppercase' : 'none',
      fontFamily: font.family,
      fontWeight: font.weight,
      fontSize
    };
    return (<p className='CreateMemeText' style={style}>{text}</p>);
  };
};