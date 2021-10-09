import React from 'react';
import './CreateMemeText.css';
import fontsData from '../data/fonts';
export default class CreateMemeText extends React.Component {
  state = {

  };

  render = () => {
    const { state, props } = this;
    const { text, isAllCaps, fontIdx } = props;

    const font = fontsData[fontIdx];
    const style = {
      textTransform: isAllCaps ? 'uppercase' : 'none',
      fontFamily: font.family,
      fontWeight: font.weight
    };
    return (<p className='CreateMemeText' style={style}>{text}</p>);
  };
};