import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import './MemeItem.css';

import EditMemeForm from './EditMemeForm';
import MemeImg from './MemeImg';
import EditMemeImg from './EditMemeImg';

const MemeItem = props => {
  const [memeData, setMemeDataTo] = useState({
    editModeOn: false,
    imgIdx: props.imgIdx,
    texts: props.texts,
    isAllCaps: props.isAllCaps,
    fontIdx: props.fontIdx,
    fontSize: props.fontSize,
    pos: props.pos
  });

  const resetState = () => {
    const { imgIdx, texts, isAllCaps, fontIdx, fontSize, pos } = props;
    setMemeDataTo({
      editModeOn: false,
      imgIdx,
      texts,
      isAllCaps,
      fontIdx,
      fontSize,
      pos
    });
  };

  const setEditModeTo = value => setMemeDataTo(memeData => ({
    ...memeData,
    editModeOn: value
  }));

  const setTexts = ({ currentTarget: { name, value } }) => setMemeDataTo(memeData => ({
    ...memeData,
    'texts': {
      ...memeData.texts,
      [name]: value
    }
  }));

  const toggleAllCaps = () => setMemeDataTo(memeData => ({
    ...memeData,
    isAllCaps: !memeData.isAllCaps
  }));

  const setPos = (elem, { top, left }) => {
    const { id } = elem;
    setMemeDataTo(memeData => ({
      ...memeData,
      pos: {
        ...memeData.pos,
        [id]: { top, left }
      }
    }));
  };

  const handleChange = ({ currentTarget: { name, value } }) => {
    const number = Number.parseInt(value, 10); //if the value can be converted to a number type, convert it to a number type.
    setMemeDataTo(memeData => ({
      ...memeData,
      [name]: !isNaN(number) ? number : value
    }));
  };

  const handleClick = ({ currentTarget: { name } }) => {
    const { deleteMeme, id } = props;

    if (name === 'deleteBtn') deleteMeme(id);
    else if (name === 'editBtn') setEditModeTo(true);
  };

  const { id, imgsData, saveMemeEdits } = props;
  const { editModeOn, imgIdx, texts, fontIdx, fontSize, isAllCaps, pos } = memeData;

  const memeImgProps = { imgsData, imgIdx: props.imgIdx, texts: props.texts, fontIdx: props.fontIdx, fontSize: props.fontSize, isAllCaps: props.isAllCaps, pos: props.pos };

  const editMemeImgProps = { imgsData, imgIdx, texts, fontIdx, fontSize, isAllCaps, pos, setPos };

  const editMemeFormProps = { id, imgsData, saveMemeEdits, imgIdx, texts, fontIdx, fontSize, isAllCaps, pos, resetState, setTexts, toggleAllCaps, setEditModeTo, handleChange };

  return (
    <div className='MemeItem'>
      {!editModeOn &&
        <>
          <MemeImg {...memeImgProps} />
          <button name='editBtn' type='button'
            onClick={handleClick}>Edit</button>
          <button name='deleteBtn' type='button'
            onClick={handleClick}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </>}
      {editModeOn &&
        <>
          <EditMemeImg {...editMemeImgProps} />
          <EditMemeForm {...editMemeFormProps} />
        </>
      }
    </div>
  );
};

export default MemeItem;