import React, { useState } from 'react';
import CreateMemeForm from './CreateMemeForm';
import CreateMemeImg from './CreateMemeImg';

import './MemeGenerator.css';

const MemeGenerator = props => {
  const [formData, setFormDataTo] = useState({
    imgIdx: '23',
    texts: {
      text1: '',
      text2: ''
    },
    fontIdx: 0,
    fontSize: 42,
    isAllCaps: false,
    pos: {
      pos1: {
        top: '0%',
        left: '0%'
      },
      pos2: {
        top: '4%',
        left: '4%'
      },
    }
  });

  const resetState = () => setFormDataTo({
    imgIdx: '23',
    texts: {
      text1: '',
      text2: ''
    },
    fontIdx: 0,
    fontSize: 42,
    isAllCaps: false,
    pos: {
      pos1: {
        top: '0%',
        left: '0%'
      },
      pos2: {
        top: '4%',
        left: '4%'
      },
    }
  });

  const setTexts = ({ currentTarget: { name, value } }) =>
    setFormDataTo(formData => ({
      ...formData,
      texts: {
        ...formData.texts,
        [name]: value
      }
    }));

  const setPos = (elem, { top, left }) => {
    const { id } = elem;
    setFormDataTo(formData => ({
      ...formData,
      pos: {
        ...formData.pos,
        [id]: { top, left }
      }
    }));
  };

  const handleChange = ({ currentTarget: { name, value } }) => {
    const number = Number.parseInt(value, 10);
    setFormDataTo(formData => ({
      ...formData,
      [name]: !isNaN(number) ? number : value
    }));
  };

  const setRandomImgIdx = () => {
    const { floor, random } = Math;
    const { imgsData } = props;
    const imgIdx = floor(random() * imgsData.length);
    setFormDataTo(formData => ({
      ...formData,
      imgIdx
    }));
  };

  const toggleAllCaps = () => setFormDataTo(formData => ({
    ...formData,
    isAllCaps: !formData.isAllCaps
  }));

  const { imgsData } = props;

  const createMemeImgProps = { imgsData, ...formData, setPos };
  const createMemeFormProps = { ...props, ...formData, resetState, setTexts, handleChange, setRandomImgIdx, toggleAllCaps };

  return (
    <div className='MemeGenerator'>
      <CreateMemeForm {...createMemeFormProps} />
      <CreateMemeImg {...createMemeImgProps} />
    </div>
  );
};

export default MemeGenerator;