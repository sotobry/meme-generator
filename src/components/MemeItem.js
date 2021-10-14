const MemeItem = props => {
  const { imgIdx, texts: { text1, text2 }, fontIdx, fontSize, isAllCaps, pos: { pos1, pos2 } } = props;

  return (
    <ul>
      <li>imgIdx: {imgIdx} ({typeof imgIdx})</li>
      <li>text1: {text1} ({typeof text1})</li>
      <li>text2: {text2} ({typeof text2})</li>
      <li>fontIdx: {fontIdx} ({typeof fontIdx})</li>
      <li>fontSize: {fontSize} ({typeof fontSize})</li>
      <li>isAllCaps: {String(isAllCaps)} ({typeof isAllCaps})</li>
      <li>top1: {pos1.top} ({typeof pos1.top})</li>
      <li>left1: {pos1.left} ({typeof pos1.left})</li>
      <li>top2: {pos2.top} ({typeof pos2.top})</li>
      <li>left2: {pos2.left} ({typeof pos2.left})</li>
    </ul>
  );
};

export default MemeItem;