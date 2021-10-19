import MemeItem from './MemeItem';
const MemeList = props => {
  const { userMemes, imgsData, deleteMeme, saveMemeEdits } = props;

  return (
    <>{
      userMemes.map(meme => {
        const memeItemProps = { ...meme, imgsData, deleteMeme, saveMemeEdits };
        return (
          <MemeItem key={meme.id}{...memeItemProps} />
        );
      })
    }</>
  );
};

export default MemeList;