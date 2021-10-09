import './CreateMemeImg.css';
import CreateMemeText from './CreateMemeText';

const CreateMemeImg = props => {
  console.log('CreateMemeImg rendered');
  const { imgsData, imgIdx, texts: { text1, text2 }, isAllCaps, fontIdx } = props;
  const createMemeTextProps = { isAllCaps, fontIdx };

  const { url } = imgsData[imgIdx];
  const style = { backgroundImage: `url(${url})` };
  return (
    <div className='CreateMemeImg' style={style}>
      <CreateMemeText {...createMemeTextProps} text={text1} />
    </div>
  );
};

export default CreateMemeImg;