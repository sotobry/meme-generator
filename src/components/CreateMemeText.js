import './CreateMemeText.css';
import fontsData from '../data/fonts';
const { min, max } = Math;

const CreateMemeText = props => {
  const { id, text, fontIdx, fontSize, isAllCaps, top, left, setPos } = props;

  const startDrag = ({ currentTarget }) => currentTarget.classList.add('isDragging');

  const endDrag = ev => {
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

    const imgContainerBorder = props.borderSize || 1;

    const minTop = 0, minLeft = 0;
    const maxTop = imgContainerHeight - memeTextHeight - 2 * imgContainerBorder;
    const maxLeft = imgContainerWidth - memeTextWidth - 2 * imgContainerBorder;

    const top = min(max(cursorY - imgContainerY - imgContainerBorder - memeTextHeight / 2, minTop), maxTop);
    const left = min(max(cursorX - imgContainerX - imgContainerBorder - memeTextWidth / 2, minLeft), maxLeft);

    const { id } = memeText;
    setPos(id, { top, left });

    memeText.classList.remove('isDragging');
  };

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
      id={id}
      draggable='true'
      onDragStart={startDrag}
      onDragEnd={endDrag}
    >{text}</p>
  );
};

export default CreateMemeText;