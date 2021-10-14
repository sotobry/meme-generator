import './MemeItem.css';
import fontsData from '../data/fonts';

const MemeItem = props => {
  const { imgIdx, texts: { text1, text2 }, fontIdx, fontSize, isAllCaps, pos: { pos1, pos2 }, imgsData } = props;

  const memeImgStyle = {
    backgroundImage: `url(${imgsData[imgIdx].url})`
  };
  const font = fontsData[fontIdx];
  const memeTextStyle = {
    textTransform: isAllCaps ? 'uppercase' : 'none',
    fontFamily: font.family,
    fontWeight: font.weight,
  };
  console.log(pos1.top);
  console.log(pos1.left);
  const memeText1Style = {
    top: pos1.top,
    left: pos1.left
  };
  const memeText2Style = {
    top: pos2.top,
    left: pos2.left
  };

  return (
    <>
      <div className='MemeItem'>
        <div className='memeImg' style={{ ...memeImgStyle, ...memeTextStyle }}>
          <p style={memeText1Style}>{text1}</p>
          <p style={memeText2Style}>{text2}</p>
        </div>
      </div>
      <ul>
        <li>fontSize: {fontSize} ({typeof fontSize})</li>
      </ul>
    </>
  );
};

export default MemeItem;