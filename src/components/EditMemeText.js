import './EditMemeText.css';
import fontsData from '../data/fonts';
const {
  // floor, 
  min, max
} = Math;

const EditMemeText = props => {
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

    const top = `${min(max(cursorY - imgContainerY - imgContainerBorder - memeTextHeight / 2, minTop), maxTop) / (imgContainerHeight - 2 * imgContainerBorder) * 100}%`;

    const left = `${min(max(cursorX - imgContainerX - imgContainerBorder - memeTextWidth / 2, minLeft), maxLeft) / (imgContainerWidth - 2 * imgContainerBorder) * 100}%`;

    setPos(memeText, { top, left });

    memeText.classList.remove('isDragging');
  };

  const createMemeImgHeight = 500;
  const memeImgHeight = 250;
  const font = fontsData[fontIdx];
  const style = {
    textTransform: isAllCaps ? 'uppercase' : 'none',
    fontFamily: font.family,
    fontWeight: font.weight,
    fontSize: fontSize * memeImgHeight / createMemeImgHeight,
    top, left,
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

export default EditMemeText;