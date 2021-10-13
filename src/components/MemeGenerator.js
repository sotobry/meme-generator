import React from 'react';
import CreateMemeForm from './CreateMemeForm';
import CreateMemeImg from './CreateMemeImg';

import './MemeGenerator.css';

export default class MemeGenerator extends React.Component {
  state = {
    imgIdx: 0,
    texts: { text1: '', text2: '' },
    isAllCaps: false,
    fontIdx: 0,
    fontSize: 24
  };

  setTexts = ({ currentTarget: { name, value } }) =>
    this.setState(state =>
      ({ 'texts': { ...state.texts, [name]: value } }));

  handleChange = ({ currentTarget: { name, value } }) => {
    const number = Number.parseInt(value, 10);
    this.setState({ [name]: !isNaN(number) ? number : value });
  };

  setRandomImgIdx = () => {
    const { floor, random } = Math;
    const { imgsData } = this.props;
    const imgIdx = floor(random() * imgsData.length);
    this.setState({ imgIdx });
  };

  toggleAllCaps = () => this.setState(state =>
    ({ isAllCaps: !state.isAllCaps }));

  render = () => {
    const { props, state, setTexts, handleChange, setRandomImgIdx, toggleAllCaps } = this;

    const createMemeImgProps = { ...props, ...state };
    const createMemeFormProps = { ...props, ...state, setTexts, handleChange, setRandomImgIdx, toggleAllCaps };

    return (
      <div className='MemeGenerator'>
        <CreateMemeForm {...createMemeFormProps} />
        <CreateMemeImg {...createMemeImgProps} />
      </div>
    );
  };
};