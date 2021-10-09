import React from 'react';
import './CreateMemeText.css';
export default class CreateMemeText extends React.Component {
  state = {

  };

  render = () => {
    const { state, props } = this;
    const { text, isAllCaps } = props;

    const style = {
      textTransform: isAllCaps ? 'uppercase' : 'none'
    };
    return (<p className='CreateMemeText' style={style}>{text}</p>);
  };
};