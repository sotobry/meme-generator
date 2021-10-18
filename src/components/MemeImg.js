import './MemeImg.css';
import fontsData from '../data/fonts';
const MemeImg = props => {
  const { imgsData, imgIdx, texts: { text1, text2 }, fontIdx, fontSize, isAllCaps, pos: { pos1, pos2 } } = props;

  const font = fontsData[fontIdx];
  const imgStyle = {
    backgroundImage: `url(${imgsData[imgIdx].url})`
  };
  const textStyle = {
    textTransform: isAllCaps ? 'uppercase' : 'none',
    fontFamily: font.family,
    fontWeight: font.weight,
  };

  const createMemeImgHeight = 500;
  const memeImgHeight = 250;
  const text1Style = {
    top: pos1.top,
    left: pos1.left,
    fontSize: fontSize * memeImgHeight / createMemeImgHeight
  };

  const text2Style = {
    top: pos2.top,
    left: pos2.left,
    fontSize: fontSize * memeImgHeight / createMemeImgHeight
  };
  return (
    <div className='MemeImg' style={{ ...imgStyle, ...textStyle }}>
      <p style={text1Style}>{text1}</p>
      <p style={text2Style}>{text2}</p>
    </div>
  );
};

export default MemeImg;