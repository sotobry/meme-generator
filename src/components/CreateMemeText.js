import React from 'react';
import './CreateMemeText.css';
import fontsData from '../data/fonts';
const { min, max } = Math;

export default class CreateMemeText extends React.Component {
  state = {
    top: this.props.initialTop || 0,
    left: this.props.initialLeft || 0,
  };
  startDrag = ({ currentTarget }) => {
    currentTarget.classList.add('isDragging');
  };

  endDrag = ev => {
    const {
      clientY: cursorY,
      clientX: cursorX,
      currentTarget: memeText,
    } = ev;

    const imgContainer = memeText.parentElement;
    const {
      height: memeTextHeight,
      width: memeTextWidth
    } = memeText.getBoundingClientRect();

    const {
      y: imgContainerY,
      x: imgContainerX,
      height: imgContainerHeight,
      width: imgContainerWidth
    } = imgContainer.getBoundingClientRect();

    const imgContainerBorder = this.props.borderSize || 1;

    const minTop = 0, minLeft = 0;
    const maxTop = imgContainerHeight - memeTextHeight - 2 * imgContainerBorder;
    const maxLeft = imgContainerWidth - memeTextWidth - 2 * imgContainerBorder;

    const top = min(max(cursorY - imgContainerY - imgContainerBorder - memeTextHeight / 2, minTop), maxTop);
    const left = min(max(cursorX - imgContainerX - imgContainerBorder - memeTextWidth / 2, minLeft), maxLeft);

    this.setState({ top, left });
    memeText.classList.remove('isDragging');
  };

  render = () => {
    const { props, state } = this;
    const { text, isAllCaps, fontIdx, fontSize } = props;
    const { top, left } = state;
    const font = fontsData[fontIdx];
    const style = {
      textTransform: isAllCaps ? 'uppercase' : 'none',
      fontFamily: font.family,
      fontWeight: font.weight,
      fontSize,
      top, left
    };
    return (
      <p className='CreateMemeText' style={style}
        draggable='true'
        onDragStart={this.startDrag}
        onDragEnd={this.endDrag}
      >{text}</p>
    );
  };
};