import React from 'react';
import './App.css';
import CreateMemeForm from './components/CreateMemeForm';
import CreateMemeImg from './components/CreateMemeImg';

export default class App extends React.Component {
  state = {
    imgsData: null,
    imgIdx: 0,
    texts: { text1: '', text2: '' },
    isAllCaps: false,
    fontIdx: 0
  };

  setTexts = ({ currentTarget: { name, value } }) =>
    this.setState(state =>
      ({ 'texts': { ...state.texts, [name]: value } }));

  handleChange = ({ currentTarget: { name, value } }) => {
    const number = Number.parseInt(value, 10);
    this.setState({ [name]: !isNaN(number) ? number : value });
  };

  setRandomImgIdx = () => {
    const { floor, random } = Math;
    const { imgsData } = this.state;
    const imgIdx = floor(random() * imgsData.length);
    this.setState({ imgIdx });
  };

  toggleAllCaps = () => this.setState(state =>
    ({ isAllCaps: !state.isAllCaps }));

  render = () => {
    const { state, setTexts, handleChange, setRandomImgIdx, toggleAllCaps } = this;
    const { imgsData } = state;
    const createMemeImgProps = { ...state };
    const createMemeFormProps = { ...state, setTexts, handleChange, setRandomImgIdx, toggleAllCaps };

    return (
      <div className="App">
        <CreateMemeForm {...createMemeFormProps} />
        {imgsData && <CreateMemeImg {...createMemeImgProps} />}
      </div>
    );
  };

  componentDidMount = () => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(({ data: { memes: imgsData } }) => this.setState({ imgsData }));
  };
};
