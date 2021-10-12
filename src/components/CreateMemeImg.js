import React from 'react';
import './CreateMemeImg.css';
import CreateMemeText from './CreateMemeText';

const CreateMemeImg = props => {
  const { imgsData, imgIdx, texts: { text1, text2 }, isAllCaps, fontIdx, fontSize } = props;

  const createMemeTextProps = { isAllCaps, fontIdx, fontSize };

  const { url } = imgsData[imgIdx];
  const style = { backgroundImage: `url(${url})` };
  return (
    <div className='CreateMemeImg' style={style}
      onDragOver={ev => ev.preventDefault()}
    >
      <CreateMemeText
        {...createMemeTextProps}
        text={text1}
        initialTop={0} initialLeft={0}
      />
      <CreateMemeText
        {...createMemeTextProps}
        text={text2}
        initialTop={20} initialLeft={20}
      />
    </div>
  );
};

export default CreateMemeImg;