import React from 'react';
import '../assets/styles/components/Footer.scss';
import facebookIcon from '../assets/img/facebookIcon.svg';
import instagramIcon from '../assets/img/instagram-icon.png';
import twitterIcon from '../assets/img/twitter-icon.png';

const Footer = () => (
  <footer className='footer'>
    <ul>
      <li>
        <p className='footer__link'>Privacidad</p>
      </li>
      <li>
        <p className='footer__link'>Terminos y Condiciones</p>
      </li>
    </ul>

    <p>2020 Weather, inc. Todos los derechos reservados</p>

    <ul>
      <li>
        <a href='https://www.instagram.com/' target='_blank'>
          <img src={instagramIcon} alt='icon instagram' />
        </a>
      </li>
      <li>
        <a href='https://twitter.com/' target='_blank'>
          <img src={twitterIcon}alt='icon twitter' />
        </a>
      </li>
      <li>
        <a href='https://www.facebook.com/' target='_blank'>
          <img src={facebookIcon} alt='icon facebook' />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;