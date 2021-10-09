import React from 'react';

export default class CreateMemeText extends React.Component {
  state = {

  };

  render = () => {
    const { state, props } = this;
    const { text, isAllCaps } = props;

    const style = {
      textTransform: isAllCaps ? 'uppercase' : 'none'
    };
    return (<p style={style}>{text}</p>);
  };
};