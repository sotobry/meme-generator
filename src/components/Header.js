import './Header.css';
import pepeImg from '../images/pepe.png';

const Header = ({ setViewTo }) => {

  const handleClick = ({ currentTarget: { className } }) =>
    setViewTo(className);

  return (
    <header className='Header'>
      <h1>MEME GENERAT<img src={pepeImg} alt='pepe the frogs face' />R</h1>
      <nav>
        <ul>
          <li className='memeGeneratorView' onClick={handleClick}>Create new meme</li>
          <li className='userMemesView' onClick={handleClick}>View your memes</li>
          <li className='futureFeaturesView' onClick={handleClick}>Coming soon features</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;