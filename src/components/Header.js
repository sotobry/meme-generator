import './Header.css';
import pepeImg from '../images/pepe.png';

const Header = () => {
  return (
    <header className='Header'>
      <h1>MEME GENERAT<img src={pepeImg} alt='pepe the frogs face' />R</h1>
    </header>
  );
};

export default Header;