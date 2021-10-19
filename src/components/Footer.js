import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='Footer'>
      <p>Made with <FontAwesomeIcon id='heart' icon={faHeart} /> and ☕ by Bryann Sotomayor <FontAwesomeIcon icon={faCopyright} /> 2021
      </p>
      <p>
        <a href='https://github.com/sotobry'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href='https://www.linkedin.com/in/sotobry/'>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </p>
    </footer>
  );
};
export default Footer;