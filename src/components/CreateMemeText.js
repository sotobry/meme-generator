import React from 'react';

export default class CreateMemeText extends React.Component {
  state = {

  };

  render = () => {
    const { state, props } = this;
    const { text } = props;
    return (<p>{text}</p>);
  };
};