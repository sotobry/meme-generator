import React from 'react';
import CreateMemeForm from './CreateMemeForm';
import CreateMemeImg from './CreateMemeImg';

import './MemeGenerator.css';

export default class MemeGenerator extends React.Component {
  state = {
    imgIdx: 0,
    texts: { text1: '', text2: '' },
    fontIdx: 0,
    fontSize: 24,
    isAllCaps: false,
    pos: {
      pos1: { top: 0, left: 0 },
      pos2: { top: 20, left: 20 },
    }
  };

  resetState = () => this.setState({
    imgIdx: 0,
    texts: { text1: '', text2: '' },
    fontIdx: 0,
    fontSize: 24,
    isAllCaps: false,
    pos: {
      pos1: { top: 0, left: 0 },
      pos2: { top: 20, left: 20 },
    }
  });

  setTexts = ({ currentTarget: { name, value } }) =>
    this.setState(state =>
      ({ 'texts': { ...state.texts, [name]: value } }));

  setPos = (id, { top, left }) => this.setState(state => ({
    pos: { ...state.pos, [id]: { top, left } }
  }));

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
    const { props, state, resetState, setTexts, setPos, handleChange, setRandomImgIdx, toggleAllCaps } = this;
    const { imgsData } = props;

    const createMemeImgProps = { imgsData, ...state, setPos };
    const createMemeFormProps = { ...props, ...state, resetState, setTexts, handleChange, setRandomImgIdx, toggleAllCaps };

    return (
      <div className='MemeGenerator'>
        <CreateMemeForm {...createMemeFormProps} />
        <CreateMemeImg {...createMemeImgProps} />
      </div>
    );
  };
};