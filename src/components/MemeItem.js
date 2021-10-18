import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import './MemeItem.css';

import EditMemeForm from './EditMemeForm';
import MemeImg from './MemeImg';
import EditMemeImg from './EditMemeImg';

export default class MemeItem extends React.Component {
  state = {
    editModeOn: false,
    imgIdx: this.props.imgIdx,
    texts: this.props.texts,
    isAllCaps: this.props.isAllCaps,
    fontIdx: this.props.fontIdx,
    fontSize: this.props.fontSize,
    pos: this.props.pos
  };

  resetState = () => {
    const { imgIdx, texts, isAllCaps, fontIdx, fontSize, pos } = this.props;
    this.setState({
      editModeOn: false,
      imgIdx,
      texts,
      isAllCaps,
      fontIdx,
      fontSize,
      pos
    });
  };

  setEditModeTo = value => this.setState({ editModeOn: value });

  setTexts = ({ currentTarget: { name, value } }) =>
    this.setState(state =>
      ({ 'texts': { ...state.texts, [name]: value } }));

  toggleAllCaps = () => this.setState(state =>
    ({ isAllCaps: !state.isAllCaps }));

  setPos = (elem, { top, left }) => {
    const { id } = elem;
    this.setState(state => ({
      pos: { ...state.pos, [id]: { top, left } }
    }));
  };

  handleChange = ({ currentTarget: { name, value } }) => {
    const number = Number.parseInt(value, 10); //if the value can be converted to a number type, convert it to a number type.
    this.setState({ [name]: !isNaN(number) ? number : value });
  };

  handleClick = ({ currentTarget: { name } }) => {
    const { props, setEditModeTo } = this;
    const { deleteMeme, id } = props;

    if (name === 'deleteBtn') deleteMeme(id);
    else if (name === 'editBtn') setEditModeTo(true);
  };

  render = () => {
    const { props, state, resetState, setTexts, toggleAllCaps, setEditModeTo, setPos, handleChange, handleClick } = this;
    const { id, imgsData, saveMemeEdits } = props;
    const { editModeOn, imgIdx, texts, fontIdx, fontSize, isAllCaps, pos } = state;

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
  }
};