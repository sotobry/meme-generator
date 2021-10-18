import './EditMemeImg.css';

import EditMemeText from './EditMemeText';

const EditMemeImg = props => {
  const { imgsData, imgIdx, texts: { text1, text2 }, fontIdx, fontSize, isAllCaps, pos: { pos1, pos2 }, setPos } = props;

  const editMemeTextProps = { fontIdx, fontSize, isAllCaps, setPos };

  const imgStyle = {
    backgroundImage: `url(${imgsData[imgIdx].url})`
  };

  return (
    <div className='EditMemeImg' style={imgStyle}
      onDragOver={ev => ev.preventDefault()}
    >
      <EditMemeText
        {...editMemeTextProps}
        id='pos1'
        text={text1}
        top={pos1.top} left={pos1.left}
      />
      <EditMemeText
        {...editMemeTextProps}
        id='pos2'
        text={text2}
        top={pos2.top} left={pos2.left}
      />
    </div>
  );
};

export default EditMemeImg;