import './MemeList.css';

import MemeItem from './MemeItem';
const MemeList = props => {
  const { userMemes, imgsData, deleteMeme, saveMemeEdits } = props;

  return (
    <div className='MemeList'>{
      userMemes.length ?
        userMemes.map(meme => {
          const memeItemProps = { ...meme, imgsData, deleteMeme, saveMemeEdits };
          return (
            <MemeItem key={meme.id}{...memeItemProps} />
          );
        }) :
        <h1 style={{ textAlign: 'center' }}>No memes created yet {':('}</h1>
    }</div>
  );
};

export default MemeList;