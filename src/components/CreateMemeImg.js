import React from 'react';
import './CreateMemeImg.css';
import CreateMemeText from './CreateMemeText';

const CreateMemeImg = props => {
  const { imgsData, imgIdx, texts: { text1, text2 }, fontIdx, fontSize, isAllCaps, pos: { pos1, pos2 }, setPos } = props;

  const createMemeTextProps = { fontIdx, fontSize, isAllCaps, setPos };

  const { url } = imgsData[imgIdx];
  const style = { backgroundImage: `url(${url})` };
  return (
    <div className='CreateMemeImg' style={style}
      onDragOver={ev => ev.preventDefault()}
    >
      <CreateMemeText
        {...createMemeTextProps}
        id='pos1'
        text={text1}
        top={pos1.top} left={pos1.left}
      />
      <CreateMemeText
        {...createMemeTextProps}
        id='pos2'
        text={text2}
        top={pos2.top} left={pos2.left}
      />
    </div>
  );
};

export default CreateMemeImg;